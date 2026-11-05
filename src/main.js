import './style.css';
import { ENDPOINTS } from './config';
import { hentData } from './api';

async function start() {
  const brukere = await hentData(ENDPOINTS.users);
  console.log(brukere);
}

start();