// gjør rå API data om til vårt eget format

const STANDARD_FORMEL = 'Impedimenta';

// tar imot lister (to endepunkt) og returnerer en liste med våre objekter, ett per bruker
export function lagEttersokte(brukere, oppgaver) {
    // .map() lager en ny liste med ett nytt objekt per bruker 
    return brukere.map((bruker) => {
        // find() gir den første som passer, eller undefined hvis ingen finnes.
        const oppgave = oppgaver.find((o) => o.userId === bruker.id);
        return {
            id: bruker.id,
            trollmannNavn: bruker.username,
            mugglerNavn: bruker.name,
            by: bruker.address.city,
            saksId: bruker.address.zipcode,
            breddegrad: bruker.address.geo.lat,
            lengdegrad: bruker.address.geo.lng,
            formel: oppgave ? oppgave.title : STANDARD_FORMEL,

        };
    });
}