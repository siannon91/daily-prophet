const bountyBoard = document.getElementById('bounty-board');

function lagKort(person) {
    return `
    <div class="wanted-card">
        <div class="wanted-title">Wanted</div>
        <div class="wizard-name">${person.trollmannNavn}</div>
        <div class="muggle-name"><strong>Muggle Alias:</strong> ${person.mugglerNavn}</div>

        <div class="details-box">
            <div><strong>Last Known Location:</strong> ${person.by}</div>
            <div><strong>Ministry Case ID:</strong> ${person.saksId}</div>
            <div><strong>Dark Magic Radar:</strong> Lat ${person.breddegrad} / Lng ${person.lengdegrad}</div>

            <div class="spell-box">
                <strong>Binding Counter-Spell:</strong><br />
                <span class="spell-text">${person.formel}!</span>
            </div>    
        </div>
    </div>
    `;
}

export function visKort(liste) {
    const kortHTML = liste.map(lagKort).join('');
    bountyBoard.innerHTML = kortHTML;
}