import './style.css'
import {
  setupAllBooks,
  setupFindBook,
  setupAddBooks,
  setupUpdateBook,
  setupDeleteBook,
  setupChuckFacts,
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
    <div class="card">
      <button id="Request6" type="button"></button>
    </div>
  </div>
`;

//ApiCalls
setupAllBooks(document.querySelector<HTMLButtonElement>("#Request1")!);
setupFindBook(document.querySelector<HTMLButtonElement>("#Request2")!);
setupAddBooks(document.querySelector<HTMLButtonElement>("#Request3")!);
setupUpdateBook(document.querySelector<HTMLButtonElement>("#Request4")!);
setupDeleteBook(document.querySelector<HTMLButtonElement>("#Request5")!);
setupChuckFacts(document.querySelector<HTMLButtonElement>("#Request6")!);