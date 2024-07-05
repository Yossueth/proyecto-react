const products_API = "http://localhost:3001/products";

export async function PUT(id, taskData) {
  const response = await fetch(products_API + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });
  if (response.ok) {
    console.log("Cambio");
  }
}
