const products_API = 'http://localhost:3001/products'

export function Postprodu(taskData) {
    fetch(products_API, {
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