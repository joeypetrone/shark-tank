import utils from '../helpers/utils.js';
import personData from '../helpers/data/personData.js'

const buildGraveyard = () => {
    const persons = personData.getDeadPersons();
    let domString = '<h2 class="col-12 text-center">Graveyard</h2>';


    domString += '<div class="d-flex flex-wrap">';

    persons.forEach((person) => {
      domString += '<div class="col-4 person-card">';
      domString += '<div class="card">';
      domString += '<div class="card-body">';
      domString += `<h5 class="card-title">${person.name}</h5>`;
      domString += '</div>';
      domString += '</div>';
      domString += '</div>';
    });
    
//    domString += '</div>';
//    
//    domString += '<div class="card w-100 text-light bg-dark">';
//    domString += '  <div class="card-header font-weight-bold">Graveyard</div>';
//    domString += '    <div class="col-6 d-flex flex-wrap justify-content-center">';
//
//    persons.forEach((person) => {
//        domString += '    <div class="card text-dark m-2 w-35">';
//        domString += `    <div class="card-body text-dark text-center">${person.name}</div>`;
//        domString += '    </div>';
//    })
//
//    domString += '</div>';
//
    utils.printToDom('graveyard', domString);
};

export default { buildGraveyard };