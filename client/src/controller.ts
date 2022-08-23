export async function getAllBooks() {
  const result = await fetch("/api");
  const data = await result.json();
  return data
}

export async function getOneBook(id:number) {
  const result = await fetch("/api"+"/"+id);
  const data = await result.json();
  return data;
}

export async function deleteOneBook(id: number) {
  const result = await fetch("/api" + "/" + id, { method: 'DELETE' });
  return result;
}

export async function addNewBook(data = {}) {
  // Default options are marked with *
  const response = await fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function uppdateBook(id: number, data = {}) {
  // Default options are marked with *
  const response = await fetch("/api" + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


const getUrl = "https://api.chucknorris.io/jokes/random";

export async function getChuckFacts() {
  const result = await fetch(getUrl);
  const data = await result.json();
  return data;
}