import { v4 as uuidv4 } from 'uuid';

export const parseUsersData = (list) => {
    return list.map(userItem => {
        const {
            country,
            email,
            ip,
            is_blocked: isBlocked,
            is_online,
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
            status: is_online ? "online" : "offline",
            ipRule: regex_ip || "-",
            time,
            role,
            isBlocked,
            session: "1",
            resetPassword: "sss",
            removeUser: "",
            userId: 21312,
        }
    });
}