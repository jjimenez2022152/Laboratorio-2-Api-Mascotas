const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
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
    password:{
        type: String,
        require: [true, 'la clave es obligatoria']
    },
    img:{
        type: String
    },
    role:{
        type: String,
        require: [true],
        enum: ["ADMIN_ROLE", "USER_ROLE"]
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }


});
