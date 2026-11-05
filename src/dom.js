const bountyBoard = document.getElementById('bounty-board');

function lagKort(person) {
    return `
    <div class="wanted-card">
        <div class="wanted-title">Wanted</div>
        <div class="wizard-name">${person.username}</div>
        <div class="muggle-name"><strong>Muggle Alias:</strong> ${person.name}</div>

        <div class="details-box">
            <div><strong>Last Known Location:</strong> ${person.address.city}</div>
            <div><strong>Ministry Case ID:</strong> ${person.address.zipcode}</div>
            <div><strong>Dark Magic Radar:</strong> Lat ${person.address.geo.lat} / Lng ${person.address.geo.lng}</div>
        </div>
    </div>
    `;
}

export function visKort(liste) {
    const kortHTML = liste.map(lagKort).join('');
    bountyBoard.innerHTML = kortHTML;
}