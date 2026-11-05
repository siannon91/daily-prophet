import './style.css';
import { ENDPOINTS } from './config';
import { hentData } from './api';
import { visKort } from './dom';
import { lagEttersokte } from './mapper';
import { filtrerEttersokte } from './filter';
import { lyttTilSok } from './events';

async function start() {
  const [brukere, oppgaver] = await Promise.all([
    hentData(ENDPOINTS.users),
    hentData(ENDPOINTS.todos),
  ]);

  const ettersokte = lagEttersokte(brukere, oppgaver);
  visKort(ettersokte);

  lyttTilSok((sokeord) => {
    const resultat = filtrerEttersokte(ettersokte, sokeord);
    visKort(resultat);
  });
}

start();