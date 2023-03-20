import { client } from "./api";

export const createUserRequest = (data, callback) => {
    client.post(`/user`, data)
        .then(res => {
            callback(res.data);
        })
        .catch(err => {
            callback({success: false, message: err.message || err});
        })
};

export const getUsersRequest = (token, callback) => {
    client.get(`/users/${token}`)
    .then(res => {
        callback({success: true, data: res.data});
    }).catch(err => {
        callback({success: false, error: err.message || err});
    })
};

export const updateUserRequest = (data, callback) => {
    client.put(`/update_user`, data)
        .then(res => {
            const { data: { success, message }} = res;
            callback({success, error: message});
        })
        .catch(err => {
            callback({success: false, error: err.message || err});
        })
};

export const deleteUserRequest = (email, token, callback) => {
    client.delete(`/user`, { data: { email, token }})
    .then(res => {
        callback({success: true});
    }).catch(err => {
        callback({success: false, error: err.message || err});
    })
};

export const resetPasswordRequest = (email, token, callback) => {
    client.post(`/send_email`, { email, token })
    .then(res => {
        callback({success: true, message: res.data});
    }).catch(err => {
        callback({success: false, message: err.message || err});
    })
};

export const updatePasswordRequest = (password, token, callback) => {
    client.put(`/user/${token}`, { password })
    .then(res => {
        callback({success: true});
    }).catch(err => {
        callback({success: false, error: err.message || err});
    })
};

export const loginRequest = (email, password, callback) => {
    client.post(`/login`, { email, password })
    .then(res => {
        callback(res.data);
    }).catch(err => {
        callback({success: false, error: err.message || err});
    })
};

export const logoutRequest = (token, callback) => {
    client.post(`/logout`, { token })
    .then(res => {
        callback(res.data);
    }).catch(err => {
        callback({success: false, error: err.message || err});
    })
};