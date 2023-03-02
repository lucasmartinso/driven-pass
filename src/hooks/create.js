import { createCredentials } from "../services/credentialsService"

async function credentials({ title, password, username, url }) { 
    const data = { 
        title, 
        password,
        username, 
        url
    }

    await createCredentials(data);
}

async function notes() { 

}

async function cards() { 

}

async function wifi() { 

}

export const createFunctions = { 
    credentials,
    notes, 
    cards, 
    wifi
}