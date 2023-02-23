import api from "./api";

export async function getCredentials(config) { 
    await api.get(`/credentials`,config);
}