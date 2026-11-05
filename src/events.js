const sokefelt = document.getElementById('auror-search');

export function lyttTilSok(norBrukerSkriver) {
    sokefelt.addEventListener('input', (hendelse) => {
        norBrukerSkriver(hendelse.target.value);
    });
}