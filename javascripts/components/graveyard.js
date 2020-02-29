import utils from '../helpers/utils.js';
import personData from '../helpers/data/personData.js'

const buildGraveyard = () => {
    const persons = personData.getDeadPersons();
    let domString = '';
    
    domString += '</div>';
    
    domString += '<div class="card w-100 text-light bg-dark">';
    domString += '  <div class="card-header font-weight-bold">Graveyard</div>';
    domString += '    <div class="col-6 d-flex flex-wrap justify-content-center">';

    persons.forEach((person) => {
        domString += '    <div class="card text-dark m-2 w-35">';
        domString += `    <div class="card-body text-dark text-center">${person.name}</div>`;
        domString += '    </div>';
    })

    domString += '</div>';

    utils.printToDom('graveyard', domString);
};

export default { buildGraveyard };