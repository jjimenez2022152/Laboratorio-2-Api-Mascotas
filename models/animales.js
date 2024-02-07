const {Schema, model} = require('mongoose');

const AnimalesSchema = Schema({
    nombre:{
        type: String,
        require: [true, 'El nombre debe de ser obligatorio']
    },
    especie:{
        type: String,
        require: [true, 'la especie es obligatorio'],
        unique: true
    },
    peso:{
        type: String,
        require: [true, 'el peso es obligatorio']
    },
    altura:{
        type: String,
        require: [true, 'la altura es obligatoria']
    },
   
    
});

module.exports = model('Animales', AnimalesSchema);
