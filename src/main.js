import './style.css';
import { ENDPOINTS } from './config';
import { hentData } from './api';
import { visKort } from './dom';

async function start() {
  const brukere = await hentData(ENDPOINTS.users);
  visKort(brukere);
}

start();