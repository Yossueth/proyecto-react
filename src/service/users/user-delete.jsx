const datUsers_API = 'http://localhost:3001/users'

export async function DELETE(id) {
    const response = await fetch(datUsers_API + id, {
        method: 'DELETE',
    });
    if (response.ok) {
        console.log('Borrado');
    }
}