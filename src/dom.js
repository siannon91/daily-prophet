const bountyBoard = document.getElementById('bounty-board');
const statusIndicator = document.getElementById('status-indicator');

function lagKort(person, erFanget) {
    return `
    <div class="wanted-card ${erFanget ? 'captured' : ''}">
        <div class="wanted-title">Wanted</div>
        <div class="dark-mark"><img src="${import.meta.env.BASE_URL}img/mm.jpg" alt="Dark Mark" /></div>
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

        <button class="capture-btn" data-id="${person.id}">
            ${erFanget ? 'Captured ✓' : 'Mark as captured'}
        </button>
    </div>
    `;
}

export function visKort(liste, fangede = []) {
    const kortHTML = liste
        .map((person) => lagKort(person, fangede.includes(person.id)))
        .join('');
    bountyBoard.innerHTML = kortHTML;
}

export function visMelding(tekst) {
    statusIndicator.textContent = tekst;
}