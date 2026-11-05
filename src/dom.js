const bountyBoard = document.getElementById('bounty-board');

function lagKort(person) {
    return `
    <div class="wanted-card">
        <div class="wanted-title">Wanted</div>
        <div class="wizard-name">${person.username}</div>
        <div class="muggle-name"><strong>Muggle Alias:</strong> ${person.name}</div>
    </div>
    `;
}

export function visKort(liste) {
    const kortHTML = liste.map(lagKort).join('');
    bountyBoard.innerHTML = kortHTML;
}