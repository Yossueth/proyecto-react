const products_API = "http://localhost:3001/products/";

export async function PUT(id, nombreEdit, precioEdit, imagen) {
  const response = await fetch(products_API + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: nombreEdit,
      precio: precioEdit,
      imagen: imagen
    }),
  });
  if (response.ok) {
    console.log("Cambió");
  }
}
