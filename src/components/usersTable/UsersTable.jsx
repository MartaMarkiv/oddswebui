import { Table } from "antd";
import React, { useState } from "react";
import { StyledBettingTable, SessionWrap, EmptyData } from "./styles";
import { IpRuleCell } from "./components/IpRuleCell";
import { TableRow } from "./components/TableRow/TableRow";
import { ActionBlock } from "./components/ActionBlock";
import { ConfirmWindow } from "../ConfirmWindow";
import { generateColumns } from "./utils/generateColumns";

export const UsersTable = ({
	users,
	deleteUser,
	resetPassword,
	toggleBlockStatus,
	updateRule
}) => {

	console.log(users);
	const [data, setData] = useState(null);
	const [isOpenConfirm, setIsOpenConfirm] = useState(false);

	const actionRenderer = (title, type, handler, data) => (<ActionBlock
		title={title}
		type={type}
		action={handler}
		data={data}
	/>);

	const sessionRenderer = (data) => (<SessionWrap>{data}</SessionWrap>);

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


	const columns = generateColumns({
		actionRenderer,
		sessionRenderer,
		toggleStatusHandler: toggleBlockStatus,
		saveRuleHandler: handleSave,
		resetHandler: resetPassword,
		deleteHandler: handleDelete
	});
    
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