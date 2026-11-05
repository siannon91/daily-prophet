import './style.css';
import { ENDPOINTS } from './config';
import { hentData } from './api';
import { visKort } from './dom';

async function start() {
  const [brukere, oppgaver] = await Promise.all([
    hentData(ENDPOINTS.users),
    hentData(ENDPOINTS.todos),
  ]);

  console.log(oppgaver);
  visKort(brukere);
}

start();