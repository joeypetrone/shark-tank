import utils from '../helpers/utils.js';
import personData from '../helpers/data/personData.js'

const buildGraveyard = () => {
    const persons = personData.getDeadPersons();
    let domString = '';
    
    domString += '<div class="card w-100 text-light bg-dark">';
    domString += '  <div class="card-header font-weight-bold">Graveyard</div>';
    domString += '    <div class="d-flex flex-wrap">';

    persons.forEach((person) => {
        domString += '    <div id="graveyard-card" class="card text-dark m-2 p-1">';
        domString += `      <div class="card-body text-dark text-center">${person.name}</div>`;
        domString += `      <button id="${person.id}" type="button" class="btn btn-dark revive-btn">Revive</button>`;
        domString += '    </div>';
    })
    domString += '</div>';
    domString += '</div>';

    utils.printToDom('graveyard', domString);
};

export default { buildGraveyard };