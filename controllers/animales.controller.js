const bcryptjs = require('bcryptjs');
const Animales = require('../models/animales');
const { response } = require('express');
const animales = require('../models/animales');


const animalesGet = async (req, res = response) => {
    const { limite, desde } = req.query;
    const query = { estado: true };

    const [total, animales] = await Promise.all([
        Animales.countDocumments(query),
        Animales..find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        animales
    });
}

const getAnimalesById = async (req, res) => {
    const { id } = req.params;
    const animales = await Animales.findOne({ _id: id });

    res.status(200).json({
        animales
    });
}

const putAnimales = async (req, res = response) => {
    const { id } = req.params;
    const {_id, password, google, correo, ...resto}
}

const animalesPost = async (req, res) => {
    const {nombre, especie, peso, altura} = req.body;

    const animales
}