const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const {
    usuariosPost,
    usuariosGet,
    getUsuarioById,
    putUsuarios,
    usuariosDelete
    } = require('../controllers/user.controller');

const { existenteEmail, esRoleValido, existenteId } = require('../helpers/db-validators');

const router = Router();

router.get("/", usuariosGet);

router.get(
    "/:id",
    [
        check('id', 'No es un argumento valido').isMongoId(),
        check('id').custom(existenteId),
        validarCampos
    ], getUsuarioById
);

router.put(
    "/:id",
    [
        check('id', 'No es un argumento valido').isMongoId(),
        check('id').custom(existenteId),
        check("role").custom(esRoleValido),
        validarCampos
    ], putUsuarios);

router.delete(
    "/:id",
    [
        check('id', 'No es un argumento valido').isMongoId(),
        check('id').custom(existenteId),
        validarCampos,
    ],usuariosDelete);    

router.post(
    "/",
    [
        check("nombre", "Nombre no puede estar vacio").not().isEmpty(),
        check("password", "El password debe de ser mayor a 6 caracteres").isLength({ min: 6 }),
        check("correo", "Este no es un correo valido").isEmail(),
        check("correo").custom(existenteEmail),
        check("role").custom(esRoleValido),
        validarCampos,
    ], usuariosPost
);

module.exports = router;