# Aufgabe Web basics

## Aufgabe 1
Erstelle eine simple Restaurant website. Wie diese aussehen soll findest du [hier](https://maierfabian.de/tutorials/restaurant).
Nutze nur HTML und CSS keine Frameworks. Nutze folgende Variablen für das CSS um deinen Code so übersichtlich wie möglich zu halten:

```css
    --main-color: #0c17b8;
    --white-color: #ffffff;
    --black-color: #000000;
    --paragraph-color: #646464;
    --background-color: #f5f5f5;
    --text-color: #000000;
    --body-font-family: 'Josefin Sans', sans-serif;
    --paragraph-font-family: 'Nunito', sans-serif;
    --transition: 0.5s;
    --font-size: 16px;
```
Als Bild Platzhalter kannst du folgende URL nutzen:

```shell
    https://via.placeholder.com/1500x800
```
Die Menüpunkte sollen jeweils auf die sektionen der seite verweisen welche eventuell später noch hinzugefügt werden (onpage ohne verlinkung auf eine unterseite)


## Aufgabe 2
Implementiere die Logic für die Reservierung. 
Bei unserem Beispielrestaurant gibt es die Option zu reservieren. Eine Reservierung geht mit der direkten Zahlung von 15,70€ pro person daher. 
Sollte eine Reservierung mit 10 oder mehr Personen getätigt werden, wird ein 5% Rabatt angewand. Wenn der Nutzer auf Preis Berechnen klickt, soll einmal der Gesamtpreis sowie der Preis pro Person angezeigt werden. Nutze dafür Javascript in einer eigenen Datei.


## Aufgabe 3
Erstelle ein Github Repository für deine Website. 
Lade dir dafür zuerst Git von der [offiziellen Seite](https://git-scm.com/download/win) herunter sowie [Github Desktop](https://github.com/apps/desktop).
Sobald du dich auf github Desktop angemeldet hast, navigiere zur Github Website und erstelle ein Repository (Privat oder Public ist dabei egal).

Danach öffnest du deine CMD in deinem Projekt ordner und führst folgenden befehl aus:

```bash
    git init
```

*Dieser Befehl initialisiert ein Lokales Git Repository*

Füge nun alle deine Dateien hinzu nutze dafür:

```bash
    git add .
```
    
Erstelle nun deinen ersten lokalen Commit nutze dafür:

```bash
    git commit -m "Deine Commit Message"
```
*-m wird hierbei genutzt, um deine Commit message hinzuzufügen. Versuche diese immer möglichst einfach aber verständlich zu benennen. (Bei deinem ersten commit in einem neuen Repository nutzt man "init" als message.)*
    
Verbinde nun dein Github Repository mit deinem Lokalen Repo.
Nutze dafür folgenden command:
```bash
git remote add origin https://github.com/username/mein-neues-projekt.git
```
*Ersetze die Beispielsurl durch deine eigentliche Repository url*

Zu gut darletzt, push deine Änderungen in dein Github Repository. Nutze dafür:
```bash
git push -u origin master
```