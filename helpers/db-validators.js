const Role = require('../models/role');
const Usuario = require('../models/usuario');
const Animales = require('../models/animales');

const esRoleValido = async (role = '') => {
    const existeRol = await Role.findOne({role});
    if(!existeRol){
        throw new Error(`El Role${ role } no existe en la base de datos`);
    }
}

const existenteEmail = async (correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error(`El correo ${ correo } ya esta registrado`);
    }
}

const existenteId = async (id = '') => {
    const existeId = await Usuario.findOne({id});
    if(existeId){
        throw new Error(`El usuario con el id ${ id } no existe`)
    }
}

const existenteAnimalId = async (id = '') => {
    const existeId = await Animales.findOne({ id });
    if(existeId){
        throw new Error(`El id ${ id } ya esta en uso`);
    }
}


module.exports = {
    esRoleValido,
    existenteEmail,
    existenteId,
    existenteAnimalId
}