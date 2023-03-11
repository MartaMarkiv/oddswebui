import { Form, Input } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { EditForm, FormItem } from './styles';

export const IpRuleCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
  }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const [form] = Form.useForm();

    useEffect(() => {
      if (editing) {
        inputRef.current.focus();
      }
    }, [editing]);

    const toggleEdit = () => {
      setEditing(!editing);
      form.setFieldsValue({
        ipRule: record["ipRule"],
      });
    };

    const save = async () => {
      try {
        const values = await form.validateFields();
        toggleEdit();
        handleSave({
          ...record,
          ...values,
        });
      } catch (errInfo) {
        console.log('Save failed:', errInfo);
      }
    };

    let childNode = children;
    if (editable) {
        childNode = editing ? (
            <EditForm form={form} component={false}>
                <FormItem name="ipRule">
                    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                </FormItem>
            </EditForm>
        ) : (
            <div onClick={toggleEdit}>
            {children}
            </div>
        );
    }
    return <td {...restProps}>{childNode}</td>;
  };