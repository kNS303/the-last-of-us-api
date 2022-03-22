const CharacterRoutes = require ("express").Router();

const {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne,
} = require ("./character.controller");

CharacterRoutes.get("/", getAll);
CharacterRoutes.get("/:id", getOne);
CharacterRoutes.post("/", postOne);
CharacterRoutes.patch("/:id", patchOne);
CharacterRoutes.delete("/:id", deleteOne);

module.exports = CharacterRoutes