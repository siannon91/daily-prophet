// alle HTTP-kall til API ligger her

import axios from 'axios';
import { BASE_URL } from './config.js';

export async function hentData(endepunkt) {
    try {
        const respons = await axios.get(BASE_URL + endepunkt);
        
        // skriver statuskoden i konsollen (som oppgaven krever)
        console.log(`Statuskode for ${endepunkt}:`, respons.status);

        return respons.data;
    } catch (feil) {
        console.error(`Feil ved henting av ${endepunkt}:`, feil.message);
        
        // kaster feilen videre, så den som kaller funksjonen kan vise en
        // melding til brukeren. Uten dette ville hentData returnert "undefined"
        // og resten av koden trodd at alt gikk bra.
        throw feil;
    }
    
}