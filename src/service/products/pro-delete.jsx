const products_API = 'http://localhost:3001/products/'


export async function deleteprodu(id) {
    const response = await fetch(products_API + id, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}