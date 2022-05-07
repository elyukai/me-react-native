# Aufgabe 3

In Aufgabe 3 geht es darum, eine To-Do-Liste zu bauen. Es existieren bereits ein paar Teile der Anwendung, einige andere müssen jedoch noch ergänzt werden.

Als Basis dient der Code im `base`-Ordner, alternativ kann er direkt über den folgenden Link in Snack geladen werden:

Code: https://snack.expo.dev/HRHLTFLh5.

## Aufgabe 3.1

Die `AddTodo`-Komponente soll implementiert werden. Sie soll ein Input-Feld und einen Button beinhalten. Über einen Klick auf den Button soll eine vorhandene Eingabe hinzugefügt werden. Der Button kann nur geklickt werden, wenn etwas eingegeben wurde.

Datei: `views/AddTodo.js`

*Tipps:*

- Es muss nur Code innerhalb des Funktionsrumpfs geändert bzw. hinzugefügt werden.
- Um mehrere Komponenten zurückgeben zu können, diese aber nicht noch extra in eine eigene Komponente packen zu müssen, kann statt `<View>…</View>` einfach `<>…</>` verwendet werden.

## Aufgabe 3.2

Die `EditTodo`-Komponente soll implementiert werden. Sie soll ein Input-Feld und zwei Buttons beinhalten. Das Eingabefeld soll mit dem bisherigen Titel vorausgefüll sein. Über einen Klick auf einen Button soll eine vorhandene Eingabe hinzugefügt werden. Der Button kann nur geklickt werden, wenn etwas eingegeben wurde. Über den anderen Button soll der Editiervorgang abgebrochen werden.

Datei: `views/EditTodo.js`

*Tipps:*

- Die Komponente ist der `AddTodo`-Komponente sehr ähnlich.

## Aufgabe 3.3

Der `appStateReducer` für die App soll implementiert werden.

Datei: `App.js`

*Tipps:*

- Welche *Action Types* es gibt und wie der jeweilige Payload aussieht, kann den in der `App`-Komponente definierten Funktionen entnommen werden.
- Da der restliche Code auf den State-Änderungen durch den Reducer basiert, kann anderen Codeteilen der zu unterschiedlichen Zeitpunkten erwartete State bzw. dessen ›Shape‹ entnommen werden.
- Einige Cases erfordern bestimmten JS-Code, damit der State als immutable behandelt wird:
  - Element einem Array hinzufügen: `[...oldArray, newElement]`
  - Key-Value-Paar in einem Objekt hinzufügen oder überschreiben: `{ ...oldObject, newKey: newValue }`
  - Ein bestimmtes Element in einem Array überschreiben: `oldArray.map(oldElement => isElement ? newElement : oldElement)`, wobei `isElement` ein Check ist, der auch `oldElement` einbezieht, z. B. `oldElement.id === requestedId`.

## Bonusaufgabe

Wenn noch Zeit übrig ist, kann sich noch um folgende Aufgabe gekümmert werden:

Ein To-Do-Eintrag besitzt nicht nur einen Titel, sondern auch eine optionale Beschreibung. Die Beschreibung muss angezeigt werden und editierbar sein.
