import axios from 'axios';
import { BASE_URL } from './config.js';

export async function hentData(endepunkt) {
    try {
        const respons = await axios.get(BASE_URL + endepunkt);
        console.log(`Statuskode for ${endepunkt}:`, respons.status);

        return respons.data;
    } catch (feil) {
        console.error(`Feil ved henting av ${endepunkt}:`, feil.message);
        throw feil;
    }
    
}