import './style.css'
import {
  setupAllBooks,
  setupFindBook,
  setupAddBooks,
  setupUpdateBook,
  setupDeleteBook,
  renderMain
} from "./APIRequests";

renderMain();
document.querySelector<HTMLDivElement>("#navigation")!.innerHTML = `
  <div>
    <h1>API Requests</h1>
    <div class="card">
      <button id="Request1" type="button"></button>
    </div>
    <div class="card">
      <button id="Request2" type="button"></button>
    </div>
    <div class="card">
      <button id="Request3" type="button"></button>
    </div>
        <div class="card">
      <button id="Request4" type="button"></button>
    </div>
        <div class="card">
      <button id="Request5" type="button"></button>
    </div>
  </div>
`;




/* document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`; */

//ApiCalls
setupAllBooks(document.querySelector<HTMLButtonElement>("#Request1")!);
setupFindBook(document.querySelector<HTMLButtonElement>("#Request2")!);
setupAddBooks(document.querySelector<HTMLButtonElement>("#Request3")!);
setupUpdateBook(document.querySelector<HTMLButtonElement>("#Request4")!);
setupDeleteBook(document.querySelector<HTMLButtonElement>("#Request5")!);