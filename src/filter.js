// logikken fo søk og filtrering

// tar i mot listen og søkeordet, og returnerer en ny liste
//med bare de som passer. Den originale listen blir ikke endret
export function filtrerEttersokte(liste, sokeord) {
    const ord = sokeord.toLowerCase().trim();
    return liste.filter((person) => {
        return (
            person.trollmannNavn.toLowerCase().includes(ord) ||
            person.mugglerNavn.toLowerCase().includes(ord) ||
            person.by.toLowerCase().includes(ord)
        );
    });
}