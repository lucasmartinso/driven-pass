import api from "./api";

export async function getCredentials(config) { 
    const promise = await api.get(`/credentials`,config);

    return promise.data;
}