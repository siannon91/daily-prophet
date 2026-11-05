import './style.css';
import { ENDPOINTS } from './config';
import { hentData } from './api';
import { visKort, visMelding } from './dom';
import { lagEttersokte } from './mapper';
import { filtrerEttersokte } from './filter';
import { lyttTilSok } from './events';

async function start() {
  try {
    const [brukere, oppgaver] = await Promise.all([
      hentData(ENDPOINTS.users),
      hentData(ENDPOINTS.todos),
    ]);

    const ettersokte = lagEttersokte(brukere, oppgaver);
    visKort(ettersokte);

    lyttTilSok((sokeord) => {
      const resultat = filtrerEttersokte(ettersokte, sokeord);
      visKort(resultat);

      if (resultat.length === 0) {
        visMelding('No dark wizards found matching those parameters.');
      } else {
        visMelding('');
      }
    });
  } catch (feil) {
    visMelding(`Spell failed: ${feil.message}. The Death Eaters have jammed the connection.`)
  }
}

start();