import api from "./api";

export async function getCredentials(config) { 
    const promise = await api.get(`/credentials`,config);

    return promise.data;
}

export async function createCredentials(data,config) { 
    await api.post(`/credentials`, data,config);
}