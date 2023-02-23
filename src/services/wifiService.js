import api from "./api";

export async function getWifi(config) { 
    await api.get(`/notes`,config);
}