const STANDARD_FORMEL = 'Impedimenta';

export function lagEttersokte(brukere, oppgaver) {
    return brukere.map((bruker) => {
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