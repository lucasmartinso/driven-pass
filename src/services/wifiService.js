import api from "./api";

export async function getNotes(config) { 
    await api.get(`/notes`,config);
}