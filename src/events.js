// lyttere for hendelser fra brukeren

const sokefelt = document.getElementById('auror-search');
const bountyBoard = document.getElementById('bounty-board');

// kaller funksionen vi får inn hver gang brukeren skriver i søkefelter
export function lyttTilSok(norBrukerSkriver) {
    sokefelt.addEventListener('input', (hendelse) => {
        norBrukerSkriver(hendelse.target.value);
    });
}

// kaller funksjonen vi får inn når brukeren klikker på fanget-knapp
export function lyttTilFangst(norKlikk) {
    bountyBoard.addEventListener('click', (hendelse) => {
        // closest() finner knappen selv om brukeren klikker på noe inni den
        const knapp = hendelse.target.closest('.capture-btn');
        if (!knapp)
            return;
        // vi bruker Number for dataset.id er alltid tekst, men id i listen er tall
        norKlikk(Number(knapp.dataset.id));
    });
}