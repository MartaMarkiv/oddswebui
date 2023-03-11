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
              <UserStatus>
                Active
                <button
                  className="userActionButton"
                  onClick={()=> toggleBlockStatus(email, 0)}
                >
                  <LockOutlined className="userIcon"/>
                </button>
              </UserStatus> :
              <UserStatus>
                Inactive
                <button
                  className="userActionButton"
                  onClick={()=> toggleBlockStatus(email, 1)}
                >
                  <UnlockOutlined className="userIcon"/>
                </button>
                </UserStatus>
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
                <button
                  className="userActionButton"
                  onClick={() => resetPassword(email)}
                >
                    <InteractionOutlined className="userIcon"/>
                </button>
          ),
          className: "userAction"
        },
        {
          title: 'Remove user',
          dataIndex: 'removeUser',
          key: 'removeUser',
          className: "userAction",
          render: (_, {email}) => (
              <button
                className="userActionButton"
                onClick={() => deleteUser(email)}
              >
                <DeleteOutlined className="userIcon"/>
              </button>
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