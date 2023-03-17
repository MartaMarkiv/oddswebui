import { Table } from "antd";
import React, { useState } from "react";
import { StyledBettingTable, SessionWrap, EmptyData } from "./styles";
import { IpRuleCell } from "./components/IpRuleCell";
import { TableRow } from "./components/TableRow/TableRow";
import { ActionBlock } from "./components/ActionBlock";
import { TimerCell } from "./components/TimerCell";
import { ConfirmWindow } from "../ConfirmWindow";
import { generateColumns } from "./utils/generateColumns";

export const UsersTable = ({
	users,
	deleteUser,
	resetPassword,
	toggleBlockStatus,
	updateRule
}) => {

	const [data, setData] = useState(null);
	const [isOpenConfirm, setIsOpenConfirm] = useState(false);
	const [titleConfirm, setTitleConfirm] = useState("");
	const [typeConfirm, setTypeConfirm] = useState("");
	const [textConfirm, setTextConfirm] = useState("");

	const actionRenderer = (title, type, handler, data) => (<ActionBlock
		title={title}
		type={type}
		action={handler}
		data={data}
	/>);

	const sessionRenderer = (data) => (data ? <TimerCell  sessionTime={data}/> : <SessionWrap>-</SessionWrap>);

	const confirmAction = () => {
		switch (typeConfirm) {
			case "delete":
				deleteUser(data);
				break;
			case "blocking":
				toggleBlockStatus(data);
				break;
			default:
				break;
		}
		setData(null);
		setIsOpenConfirm(false);
	}

	const cancelAction = () => {
		setData(null);
		setIsOpenConfirm(false);
		setTypeConfirm("");
		setTitleConfirm("");
		setTextConfirm("");
	}

	const handleDelete = (user) => {
		setData(user);
		setTitleConfirm("Are you sure you want to delete user?");
		setTypeConfirm("delete");
		setTextConfirm("Delete");
		setIsOpenConfirm(true);
	};

	const handleSave = (record) => {
		updateRule(record);
    };

	const handleBlocking = (statusData) => {
		const { value } = statusData;
		setData(statusData);
		setTypeConfirm("blocking");
		setTextConfirm(value ? "Block" : "Unblock")
		setTitleConfirm(`Are you sure you want to ${value ? "block" : "unblock"} user?`);
		setIsOpenConfirm(true);
	}


	const columns = generateColumns({
		actionRenderer,
		sessionRenderer,
		toggleStatusHandler: handleBlocking,
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
			content={titleConfirm}
			isOpen={isOpenConfirm}
			handleCancel={cancelAction}
			handleOk={confirmAction}
			okText={textConfirm}
		/>
    </StyledBettingTable>
};