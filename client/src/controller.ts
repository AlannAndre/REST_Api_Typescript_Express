export async function getAllBooks() {
  const result = await fetch("/api");
  const data = await result.json();
  console.log(data);
  return data
}

export async function getOneBook(id:number) {
  const result = await fetch("/api"+"/"+id);
  const data = await result.json();
  console.log(data);
  return data;
}

