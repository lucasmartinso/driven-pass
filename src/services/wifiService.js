import api from "./api";

export async function getWifi(config) { 
    const promise = await api.get(`/wifi`,config);

    return promise.data;
}