const NOKKEL = 'daily-prophet-fangede';

export function hentFangede() {
    try {
        const tekst = localStorage.getItem(NOKKEL);
        return tekst ? JSON.parse(tekst) : [];
    } catch (feil) {
        console.error('Kunne ikke lese fra localStorage:', feil.message);
        return [];
    }
}

export function byttFanget(id) {
    const fangede = hentFangede();
    const ny = fangede.includes(id) ? fangede.filter((x) => x !== id) : [...fangede, id];

    localStorage.setItem(NOKKEL, JSON.stringify(ny));
    return ny;
}