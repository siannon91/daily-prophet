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