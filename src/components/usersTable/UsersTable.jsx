import {Table} from "antd";
import React from 'react';
import {StyledBettingTable} from "./styles";

export const UsersTable = () => {

    const data = [
        {
          key: '1',
          userId: "07876868",
          name: 'John Brown',
          email: "mail1",
          status: 'online',
          ipAddress: "127.0.0.1",
          ipRule: "sdss",
          location: "UA",
          session: "1",
          resetPassword: "sss",
          removeUser: ""
        },
        {
          name: 'Jim Green',
          key: '2',
          userId: "56454",
          email: "mail1",
          status: 'online',
          ipAddress: "127.0.0.1",
          ipRule: "sdss",
          location: "UA",
          session: "1",
          resetPassword: "sss",
          removeUser: ""
        },
        {
          key: '3',
          name: 'Joe Black',
          userId: "343234",
          email: "mail1",
          status: 'online',
          ipAddress: "127.0.0.1",
          ipRule: "sdss",
          location: "UA",
          session: "1",
          resetPassword: "sss",
          removeUser: ""
        },
      ];

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
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
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
                <button>Reset</button>
            ),
          },
          {
            title: 'Remove user',
            dataIndex: 'removeUser',
            key: 'removeUser',
            render: () => (
                <button>Remove</button>
            ),
          },
          
      ];

    return <StyledBettingTable>
        <Table
            className="table-layout"
            columns={columns}
            dataSource={data}
            sticky={true}
            rowKey="key"
            bordered
            scroll={{ x: window.innerWidth }}
            pagination={false}
            size="middle"
        />
    </StyledBettingTable>
};