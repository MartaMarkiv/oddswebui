import { v4 as uuidv4 } from 'uuid';

export const parseUsersData = (list) => {
    return list.map(userItem => {
        const {
            id,
            country,
            email,
            ip,
            is_blocked: status,
            is_online: isOnline,
            last_name,
            name,
            regex_ip,
            role,
            token_created_at: time,
        } = userItem;
        return {
            id: uuidv4(),
            name: `${name} ${last_name}`,
            location: country || "-",
            email,
            ipAddress: ip || "-",
            status,
            ipRule: regex_ip || "-",
            time,
            role,
            isOnline,
            session: isOnline ? new Date(time).getTime() : null,
            resetPassword: "sss",
            removeUser: "",
            userId: id,
        }
    });
}