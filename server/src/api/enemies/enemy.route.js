const EnemyRoutes = require ("express").Router();

const {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne,
} = require ("./enemy.controller");

EnemyRoutes.get("/", getAll);
EnemyRoutes.get("/:id", getOne);
EnemyRoutes.post("/", postOne);
EnemyRoutes.patch("/:id", patchOne);
EnemyRoutes.delete("/:id", deleteOne);

module.exports = EnemyRoutes