import axios from 'axios';

async function hentBrukere(params) {
  try {
    const respons = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('Statuskode:', respons.status);
    console.log(respons.data);
  } catch (error) {
    console.error('Noe gikk galt:', feil.message);
  }
  
}
hentBrukere();