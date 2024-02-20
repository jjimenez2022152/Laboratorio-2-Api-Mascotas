const Animales = require('../models/animales');
const { response } = require('express');

const animalesGet = async (req, res = response) => {
    const {limite, desde} = req.query;
    const query = {estado: true};

    const [total, animales] = await Promise.all([
        Animales.countDocuments(query),
        Animales.find(query)
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



const animalesPost = async (req, res) => {
    //console.log("aaaaaaaaaaa")
    const {nombre, especie, peso, altura} = req.body;
    const animales = new Animales({nombre, especie, peso, altura});

    await animales.save();
    res.status(200).json({
        animales
    });
}

const animalesDelete = async (req, res) => {
    const { id } = req.params;
    const animales = await Animales.findByIdAndUpdate(id, {estado: false});

    res.status(200).json({
        animales
    });
}

const animalesPut =  async (req, res = response) => {
    const { id } = req.params;
    const { _id , ...resto} = req.body;

    const animales = await Animales.findByIdAndUpdate(id, resto);

    res.status(200).json({
        msg: 'Animal actualizado',
        animales
    })
}


module.exports = {
    animalesPost,
    animalesDelete,
    getAnimalesById,
    animalesPut,
    animalesGet
}