import api from "./api";

export async function getNotes(config) { 
    const promise = await api.get(`/notes`,config);

    return promise.data;
}