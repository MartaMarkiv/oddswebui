import { client } from "./api";

export const createUserRequest = (data, callback) => {
    client.post(`/user`, data)
        .then(res => {
            console.log(res);
            callback({success: true});
        })
        .catch(err => {
            callback({success: false, error: err});
        })
};

export const getUsersRequest = (callback) => {
    client.get(`/users`)
    .then(res => {
        console.log(res);
        callback({success: true, data: res.data});
    }).catch(err => {
        callback({success: false, error: err});
    })
};

export const updateUserRequest = (data, callback) => {
    client.put(`/update_user`, data)
        .then(res => {
            console.log(res);
            callback({success: true});
        })
        .catch(err => {
            callback({success: false, error: err});
        })
};

export const deleteUserRequest = (email, callback) => {
    client.delete(`/user`, { data: { email }})
    .then(res => {
        console.log(res);
        callback({success: true});
    }).catch(err => {
        callback({success: false, error: err});
    })
};

export const resetPasswordRequest = (email, callback) => {
    client.post(`/send_email`, { email })
    .then(res => {
        console.log(res);
        callback({success: true});
    }).catch(err => {
        callback({success: false, error: err});
    })
};