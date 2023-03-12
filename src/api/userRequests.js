import { client } from "./api";

export const createUserRequest = (data, callback) => {
    client.post(`/user`, data)
        .then(res => {
            callback({success: true});
        })
        .catch(err => {
            callback({success: false, error: err.message || err});
        })
};

export const getUsersRequest = (callback) => {
    client.get(`/users`)
    .then(res => {
        callback({success: true, data: res.data});
    }).catch(err => {
        callback({success: false, error: err.message || err});
    })
};

export const updateUserRequest = (data, callback) => {
    client.put(`/update_user`, data)
        .then(res => {
            callback({success: true});
        })
        .catch(err => {
            callback({success: false, error: err.message || err});
        })
};

export const deleteUserRequest = (email, callback) => {
    client.delete(`/user`, { data: { email }})
    .then(res => {
        callback({success: true});
    }).catch(err => {
        callback({success: false, error: err.message || err});
    })
};

export const resetPasswordRequest = (email, callback) => {
    client.post(`/send_email`, { email })
    .then(res => {
        callback({success: true});
    }).catch(err => {
        callback({success: false, error: err.message || err});
    })
};