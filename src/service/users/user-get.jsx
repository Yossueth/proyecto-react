const datUsers_API = 'http://localhost:3001/users'

export async function getUser() {
    const response = await fetch(datUsers_API);
    const data = await response.json();
    return data
}