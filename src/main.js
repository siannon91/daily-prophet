import axios from 'axios';
import { ENDPOINTS } from './config';
import { hentData } from './api';

async function start() {
  const brukere = await hentData(ENDPOINTS.users);
  console.log(brukere);
}

start();