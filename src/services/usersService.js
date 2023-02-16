import api from "./api";

export async function signup(userData) { 
    await api.post(`/users/sign-up`,userData);
}