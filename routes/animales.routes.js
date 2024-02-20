const { Router } = require('express');
const { check } = require('express-validator');
const { existenteAnimalId } = require('../helpers/db-validators');
const { existenteId } = require('../helpers/db-validators')

const { validarCampos } = require('../middlewares/validar-campos');
const {
    animalesGet,
    animalesPost,
    animalesDelete,
    getAnimalesById,
    animalesPut 

} = require('../controllers/animales.controller');

const router = Router();

router.get("/", animalesGet)


router.post(
    "/",
    [
        check("nombre", "Nombre no puede estar vacio").not().isEmpty(),
        check("especie", "Especie no puede estar vacia").not().isEmpty(),
        check("peso", "El peso no puede estar vacio").not().isEmpty(),
        check("altura", "La altura no puede estar vacio").not().isEmpty(),
        validarCampos
    ], animalesPost
);

router.delete(
    "/:id",
    [
        check("id").custom(existenteAnimalId),
        check("id", "no es un id valido").isMongoId(),
        validarCampos
    ], animalesDelete
)

router.get(
    "/:id",
    [
        check('id', 'No es un argumento valido').isMongoId(),
        check('id').custom(existenteId),
        validarCampos
    ],getAnimalesById
)

router.put(
    "/:id",
    [
        check('id', 'No es un argumento valido').isMongoId(),
        check('id').custom(existenteId),
        validarCampos
    ],animalesPut
)

module.exports = router;