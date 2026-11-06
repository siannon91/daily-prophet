import './style.css';
import { ENDPOINTS } from './config';
import { hentData } from './api';
import { visKort, visMelding } from './dom';
import { lagEttersokte } from './mapper';
import { filtrerEttersokte } from './filter';
import { lyttTilSok, lyttTilFangst } from './events';
import { hentFangede, byttFanget } from './storage';

async function start() {
  try {
    const [brukere, oppgaver] = await Promise.all([
      hentData(ENDPOINTS.users),
      hentData(ENDPOINTS.todos),
    ]);

    const ettersokte = lagEttersokte(brukere, oppgaver);
    let gjeldendeSok = '';
    let fangede = hentFangede();

    function oppdaterVisning() {
      const resultat = filtrerEttersokte(ettersokte, gjeldendeSok);
      visKort(resultat, fangede);

      if (resultat.length === 0) {
        visMelding('No dark wizards found matching those parameters.');
      } else {
        visMelding('');
      }
    }

    oppdaterVisning();
    
    lyttTilSok((sokeord) => {
      gjeldendeSok = sokeord;
      oppdaterVisning();
    });

    lyttTilFangst((id) => {
      fangede = byttFanget(id);
      oppdaterVisning();
    });

  } catch (feil) {
    visMelding(`Spell failed: ${feil.message}. The Death Eaters have jammed the connection.`);
  }
}

start();