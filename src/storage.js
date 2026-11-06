// localStorage
// vi lagrer bare en liste med id, ikke hele kortene

const NOKKEL = 'daily-prophet-fangede';

// henter lista med id til de fangede personene (eller tom liste hvis ingenting er lagret enda)
export function hentFangede() {
    // hvis teksten er ødelagt JSON.parse kaster en feil, da bruker vi try/catch
    // som starter heller med en tom liste
    try {
        const tekst = localStorage.getItem(NOKKEL);
        return tekst ? JSON.parse(tekst) : [];
    } catch (feil) {
        console.error('Kunne ikke lese fra localStorage:', feil.message);
        return [];
    }
}

// fungerer som en bryter, hvis id er i listen den fjernes, eller den legges til. og returnerer den nye liste
export function byttFanget(id) {
    const fangede = hentFangede();
    //gammel liste endres aldri, en ny blir laget
    const ny = fangede.includes(id) ? fangede.filter((x) => x !== id) : [...fangede, id];


    localStorage.setItem(NOKKEL, JSON.stringify(ny));
    return ny;
}