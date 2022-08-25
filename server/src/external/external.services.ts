import fetch from "node-fetch";

export async function getChuckFacts() {
  const chuckFactsUrl = "https://api.chucknorris.io/jokes/random";
  let fetchedData = await fetch(chuckFactsUrl);
  let data = await fetchedData.json();
  return data;
}
