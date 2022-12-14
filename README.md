# REST_Api_Typescript_Express
Webbutveckling, Assignment 3 - Alann André
SUVNET21 - Augusti 2022

## Beskrivning av projektet
I följande projekt har jag byggt en API med 4 st. endpoints som använts för att hämta böcker, uppdatera en existerande bok, skapa nya böcker eller ta bort böcker. Dessa böcker beskrivs med författare, titel, antal sidor, en sammanfattning samt en bild. Alla böcker har en unik id.
Projektet har utvecklats med Typescript och Express.
Alla API endpoints kan köras/testas via en .rest (server.rest) fil direkt i VsCode eller via en client app byggt med Vite.

## Vilka krav som är uppfyllda

Krav för godkänt:

[X] 1. Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)

[X] 2. Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)

[X] 3. Datan som API:et hanterar sparas lokalt i serverfilen

[X] 4. APIét ska svara med 404 om datan saknas.

[X] 5. Git & GitHub har använts

[X] 6. Projektmappen innehåller en README.md fil - (läs ovan för mer info)

[X] 7. Uppgiften lämnas in i tid!

Krav för väl godkänt:

[X] 1. Alla punkter för godkänt är uppfyllda

[X] 2. All data skall vara sparad i en JSON-fil istället för i serverfilen

[X] 3. Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort

[X] 4. Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och 
presentera datan, redigeringsformulär skall fyllas i med befintlig information.

[X] 5. Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt

## Info om hur projektet byggs och körs.
Projektet byggs med separerade client och server projekt som kommunicerar via en proxy.

1 - starta server projektet i server mappen:

run: npm run dev

2 - Filen books.json skapas med all data som kommer sen att hämta, updatera, skapa eller tas bort. books.json updateras när PUT, POST eller DELETE används.

3 - i server mappen hittar man filen server.rest i mappen src. Med den filen kan man testa alla end points som api:et har (GET, POST, PUT och DELETE)

4 - Om man vill kan man också ha tillgång till data via ett klient-gränssnitt. För det startar man client projektet i client mappen från en ny terminal. Viktigt att hålla igång server projektet eftersom client projektet kommer att hämta data från server sida via en proxy.

run: npm run dev

5 - I klient-gränssnittet kan man köra alla CRUD commands. Om data ändras från klient sidan ändras det på server sida också.