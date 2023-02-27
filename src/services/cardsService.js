import api from "./api";

export async function getCards(config) { 
    const promise = await api.get(`/cards`,config);

    return promise.data
}