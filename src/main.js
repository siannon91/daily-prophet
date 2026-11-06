import './style.css';
import { ENDPOINTS } from './config';
import { hentData } from './api';
import { visKort, visMelding } from './dom';
import { lagEttersokte } from './mapper';
import { filtrerEttersokte, filtrerEtterStatus } from './filter';
import { lyttTilSok, lyttTilFangst, lyttTilStatus } from './events';
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
    let gjeldendeStatus = 'all';

    function oppdaterVisning() {
      const sokt = filtrerEttersokte(ettersokte, gjeldendeSok);
      const resultat = filtrerEtterStatus(sokt, gjeldendeStatus, fangede);
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

    lyttTilStatus((status) => {
      gjeldendeStatus = status;
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