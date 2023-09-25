import { client } from "./api";

export const createUserRequest = (data, callback) => {
    client.post(`/api/user`, data)
        .then(res => {
            callback(res.data);
        })
        .catch(err => {
            callback({success: false, message: err.message || err});
        })
};

export const getUsersRequest = (token, callback) => {
    client.get(`/api/users/${token}`)
    .then(res => {
        callback({success: true, data: res.data});
    }).catch(err => {
        callback({success: false, error: err.message || err});
    })
};

export const updateUserRequest = (data, callback) => {
    client.put(`/api/update_user`, data)
        .then(res => {
            const { data: { success, message }} = res;
            callback({success, error: message});
        })
        .catch(err => {
            callback({success: false, error: err.message || err});
        })
};

export const deleteUserRequest = (email, token, callback) => {
    client.delete(`/api/user`, { data: { email, token }})
    .then(res => {
        callback({success: true});
    }).catch(err => {
        callback({success: false, error: err.message || err});
    })
};

export const resetPasswordRequest = (email, callback) => {
    client.post(`/api/send_email`, { email })
    .then(res => {
        callback(res.data);
    }).catch(err => {
        callback({success: false, message: err.message || err});
    })
};

export const updatePasswordRequest = (password, token, callback) => {
    client.put(`/api/set_password/${token}`, { password })
    .then(res => {
        callback({success: true});
    }).catch(err => {
        callback({success: false, error: err.message || err});
    })
};

export const loginRequest = (email, password, callback) => {
    client.post(`/api/login`, { email_or_username: email, password })
    .then(res => {
        callback(res.data);
    }).catch(err => {
        callback({success: false, error: err.message || err});
    })
};

export const logoutRequest = (token, callback) => {
    client.post(`/api/logout`, { token })
    .then(res => {
        callback(res.data);
    }).catch(err => {
        callback({success: false, error: err.message || err});
    })
};