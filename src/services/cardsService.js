import api from "./api";

export async function getCards(config) { 
    await api.get(`/cards`,config);
}