export const generateColumns = ({
    actionRenderer,
    sessionRenderer,
    resetHandler,
    deleteHandler,
    toggleStatusHandler,
    saveRuleHandler
}) => {
    return [
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
					actionRenderer("Blocked", "blocked", toggleStatusHandler, {email, value: 0}):
					actionRenderer("Unblocked", "unblocked", toggleStatusHandler, {email, value: 1})
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
				handleSave: saveRuleHandler,
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
			render: (_, { session }) => sessionRenderer(session),
        },
        {
			title: "Reset password",
			dataIndex: "resetPassword",
			key: "resetPassword",
			render: (_, { email }) => actionRenderer(null, "reset", resetHandler, {email, value: 0}),
			className: "userAction"
        },
        {
			title: "Remove user",
			dataIndex: "removeUser",
			key: "removeUser",
			className: "userAction",
			render: (_, {email}) => actionRenderer(null, "remove", deleteHandler, {email, value: 0})
        },
          
      ];
}