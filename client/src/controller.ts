export async function getAllBooks() {
  const result = await fetch("/api/books");
  const data = await result.json();
  return data
}

export async function getOneBook(id:number) {
  const result = await fetch("/api/books"+"/"+id);
  const data = await result.json();
  return data;
}

export async function deleteOneBook(id: number) {
  const result = await fetch("/api/books" + "/" + id, { method: 'DELETE' });
  return result;
}

export async function addNewBook(data = {}) {
  const response = await fetch("/api/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json(); 
}

export async function uppdateBook(id: number, data = {}) {
  const response = await fetch("/api/books" + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}


export async function getChuckFacts() {
  const result = await fetch("/api/external");
  const data = await result.json();
  return data;
}