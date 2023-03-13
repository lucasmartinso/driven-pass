import api from "./api";

export async function getWifi(config) { 
    const promise = await api.get(`/wifi`,config);

    return promise.data;
}

export async function createWifi(data,config) { 
    await api.post(`/wifi`, data,config);
}