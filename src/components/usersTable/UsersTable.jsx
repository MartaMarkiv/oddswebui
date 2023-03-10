import { Table } from "antd";
import React from 'react';
import { StyledBettingTable, UserStatus } from "./styles";
import { parseUsersData } from "./utils";
import {
  InteractionOutlined,
  DeleteOutlined,
  UnlockOutlined,
  LockOutlined
} from "@ant-design/icons";

export const UsersTable = ({users}) => {

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
          render: (status) => {
            return status ? 
              <UserStatus>Active <button className="userActionButton"><LockOutlined className="userIcon"/></button></UserStatus> :
              <UserStatus>Inactive <button className="userActionButton"><UnlockOutlined className="userIcon"/></button></UserStatus>
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
        },
        {
          title: 'Reset password',
          dataIndex: 'resetPassword',
          key: 'resetPassword',
          render: () => (
              <button className="userActionButton"><InteractionOutlined className="userIcon"/></button>
          ),
          className: "userAction"
        },
        {
          title: 'Remove user',
          dataIndex: 'removeUser',
          key: 'removeUser',
          className: "userAction",
          render: () => (
              <button className="userActionButton"><DeleteOutlined className="userIcon"/></button>
          ),
        },
          
      ];

    return <StyledBettingTable>
        <Table
            className="table-layout"
            columns={columns}
            dataSource={parsedData}
            sticky={true}
            rowKey="id"
            bordered
            scroll={{ x: window.innerWidth }}
            pagination={false}
            size="middle"
        />
    </StyledBettingTable>
};