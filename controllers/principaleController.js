const data = require('../data');

function getUffici() {
    return data.uffici;
}

function getUfficiById( id) {
    return data.uffici.find((ufficio) => ufficio.id === +id);
    console.log('ciao');
}

module.exports = {
    getUffici,
    getUfficiById
}