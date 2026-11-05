import './style.css';
import { ENDPOINTS } from './config';
import { hentData } from './api';
import { visKort } from './dom';
import { lagEttersokte } from './mapper';

async function start() {
  const [brukere, oppgaver] = await Promise.all([
    hentData(ENDPOINTS.users),
    hentData(ENDPOINTS.todos),
  ]);

  const ettersokte = lagEttersokte(brukere, oppgaver);
  visKort(ettersokte);
}

start();