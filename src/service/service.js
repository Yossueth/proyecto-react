const url = "http://localhost:3000/users";

export let getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export let postData = async (newData) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error", error);
  }
};
