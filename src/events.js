const sokefelt = document.getElementById('auror-search');

export function lyttTilSok(norBrukerSkriver) {
    sokefelt.addEventListener('input', (hendelse) => {
        norBrukerSkriver(hendelse.target.value);
    });
}

const bountyBoard = document.getElementById('bounty-board');

export function lyttTilFangst(nårKlikk) {
    bountyBoard.addEventListener('click', (hendelse) => {
        const knapp = hendelse.target.closest('.capture-btn');
        if (!knapp)
            return;
        nårKlikk(Number(knapp.dataset.id));
    });
}