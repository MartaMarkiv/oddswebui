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
  console.log("users:");
  console.log(users);

  const parsedData = parseUsersData(users);
  console.log(parsedData);

    const columns = [
        {
          title: 'User Id',
          dataIndex: 'userId',
          key: 'userId',
          width: 70
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
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          width: 90,
          render: (status) => {
            console.log(status);
            return status ? 
              <UserStatus>Active <button className="userActionButton"><LockOutlined className="userIcon"/></button></UserStatus> :
              <UserStatus>Inactive <button className="userActionButton"><UnlockOutlined className="userIcon"/></button></UserStatus>
          }
        },
        {
          title: 'IP Address',
          dataIndex: 'ipAddress',
          key: 'ipAddress',
          width: 100,
        },
        {
          title: 'IP rule',
          dataIndex: 'ipRule',
          key: 'ipRule',
          width: 150
        },
        {
          title: 'Location',
          dataIndex: 'location',
          key: 'location',
          width: 70,
        },
        {
          title: 'Session time',
          dataIndex: 'session',
          key: 'session',
          width: 90
        },
        {
          title: 'Reset password',
          dataIndex: 'resetPassword',
          key: 'resetPassword',
          render: () => (
              <button className="userActionButton"><InteractionOutlined className="userIcon"/></button>
          ),
          width: 115,
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
          width: 115,
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