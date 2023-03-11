import { Table } from "antd";
import React from 'react';
import { StyledBettingTable, UserStatus, SessionWrap } from "./styles";
import { parseUsersData } from "./utils";
import {
  InteractionOutlined,
  DeleteOutlined,
  UnlockOutlined,
  LockOutlined
} from "@ant-design/icons";
import { IpRuleCell } from "./components/IpRuleCell";
import { TableRow } from "./components/TableRow/TableRow";
import { ActionBlock } from "./components/ActionBlock";

export const UsersTable = ({
  users,
  deleteUser,
  resetPassword,
  toggleBlockStatus
}) => {

  const parsedData = parseUsersData(users);

    const columns = [
        {
          title: 'User Id',
          dataIndex: 'userId',
          key: 'userId',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          width: 200
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (_, {email, status}) => {
            return status ?
              <ActionBlock
                title="Active"
                type="active"
                action={toggleBlockStatus}
                data={{email, value: 0}}
              /> :
              <ActionBlock
                title="Inactive"
                type="inactive"
                action={toggleBlockStatus}
                data={{email, value: 1}}
              />
          }
        },
        {
          title: 'IP Address',
          dataIndex: 'ipAddress',
          key: 'ipAddress',
        },
        {
          title: 'IP rule',
          dataIndex: 'ipRule',
          key: 'ipRule',
          onCell: (record) => ({
            record,
            editable: true,
            handleSave,
          }),
        },
        {
          title: 'Location',
          dataIndex: 'location',
          key: 'location',
        },
        {
          title: 'Session time',
          dataIndex: 'session',
          key: 'session',
          render: (_, { session }) => {
            return <SessionWrap>{session || "-"}</SessionWrap>
          },
        },
        {
          title: 'Reset password',
          dataIndex: 'resetPassword',
          key: 'resetPassword',
          render: (_, { email }) => (
            <ActionBlock
              type="reset"
              action={resetPassword}
              data={{email}}
            />
          ),
          className: "userAction"
        },
        {
          title: 'Remove user',
          dataIndex: 'removeUser',
          key: 'removeUser',
          className: "userAction",
          render: (_, {email}) => (
            <ActionBlock
              type="remove"
              action={deleteUser}
              data={{email}}
            />
          ),
        },
          
      ];

      const handleSave = (row) => {
        console.log("HANDLEN SAVE");
        console.log(row);
      };

    
      const components = {
        body: {
          row: TableRow,
          cell: IpRuleCell,
        },
      };

    return <StyledBettingTable>
        <Table
            className="table-layout"
            columns={columns}
            dataSource={parsedData}
            components={components}
            sticky={true}
            rowKey="id"
            bordered
            scroll={{ x: window.innerWidth }}
            pagination={false}
            size="middle"
        />
    </StyledBettingTable>
};