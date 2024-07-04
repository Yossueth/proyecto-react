const datUsers_API = 'http://localhost:3001/users'

export function postUser(taskData) {
    fetch(datUsers_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
    })
    .then(response => response.json())
    .then(data => {
    })
    .catch(error => {
        alert('ERROR POST')
    });
}