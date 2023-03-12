import { Table } from "antd";
import React, { useState } from "react";
import { StyledBettingTable, SessionWrap, EmptyData } from "./styles";
import { IpRuleCell } from "./components/IpRuleCell";
import { TableRow } from "./components/TableRow/TableRow";
import { ActionBlock } from "./components/ActionBlock";
import { ConfirmWindow } from "../ConfirmWindow";

export const UsersTable = ({
	users,
	deleteUser,
	resetPassword,
	toggleBlockStatus,
	updateRule
}) => {

	const [data, setData] = useState(null);
	const [isOpenConfirm, setIsOpenConfirm] = useState(false);

	console.log(users);

	const confirmAction = () => {
		deleteUser(data);
		setData(null);
		setIsOpenConfirm(false);
	}

	const cancelAction = () => {
		setData(null);
		setIsOpenConfirm(false);
	}

	const handleDelete = (user) => {
		setData(user);
		setIsOpenConfirm(true);
	};

	const handleSave = (record) => {
		updateRule(record);
      };


    const columns = [
        {
			title: "User Id",
			dataIndex: "userId",
			key: "userId",
        },
        {
			title: "Name",
			dataIndex: "name",
			key: "name",
        },
        {
			title: "Email",
			dataIndex: "email",
			key: "email",
			width: 200
        },
        {
			title: "Status",
			dataIndex: "status",
			key: "status",
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
			title: "IP Address",
			dataIndex: "ipAddress",
			key: "ipAddress",
        },
        {
			title: "IP rule",
			dataIndex: "ipRule",
			key: "ipRule",
			onCell: (record) => ({
				record,
				editable: true,
				handleSave,
			}),
        },
        {
			title: "Location",
			dataIndex: "location",
			key: "location",
        },
        {
			title: "Session time",
			dataIndex: "session",
			key: "session",
			render: (_, { session }) => {
				return <SessionWrap>{session || "-"}</SessionWrap>
			},
        },
        {
			title: "Reset password",
			dataIndex: "resetPassword",
			key: "resetPassword",
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
			title: "Remove user",
			dataIndex: "removeUser",
			key: "removeUser",
			className: "userAction",
			render: (_, {email}) => (
				<ActionBlock
				type="remove"
				action={handleDelete}
				data={{email}}
				/>
			),
        },
          
      ];
    
      const components = {
        body: {
			row: TableRow,
			cell: IpRuleCell,
        },
      };

    return <StyledBettingTable>
		{ users && users.length ? <Table
				className="table-layout"
				columns={columns}
				dataSource={users}
				components={components}
				sticky={true}
				rowKey="id"
				bordered
				scroll={{ x: window.innerWidth }}
				pagination={false}
				size="middle"
			/>:
			<EmptyData>There is no users data yet.</EmptyData>
		}
		<ConfirmWindow
			content={"Are you sure you want to delete user?"}
			isOpen={isOpenConfirm}
			handleCancel={cancelAction}
			handleOk={confirmAction}
		/>
    </StyledBettingTable>
};