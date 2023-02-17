import api from "./api";

export async function signup(userData) { 
    await api.post(`/users/sign-up`,userData);
}

export async function login(userData) { 
    await api.post(`/users/sign-in`,userData);
}