const Enemy = require ("./enemy.model");

const getAll = async (req, res, next) => {
    try {
        const enemies = await Enemy.find();
        res.status(200).json(enemies);

    } catch (error) {
        return next (error)
    }
}

const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const enemy = await Enemy.findById(id);
        res.status(200).json(enemy);
    } catch (error) {
        return next (error)
    }
}

const postOne = async (req, res, next) => {
    try {
        const enemy = new Enemy(req.body)
    
        if (req.file) {
            enemy.img = req.file.path;
        }
      

        const enemyDB = await enemy.save();
        return res.status (201).json(enemyDB)
    } catch (error) {
        return next(error)
    }
}

const patchOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const enemy = new Enemy(req.body);
        enemy._id = id;
        const updateEnemy = await Enemy.findByIdAndUpdate (id, enemy);
        return res.status(200).json(updateEnemy);
    } catch (error) {
        return next (error);
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const enemy = await Enemy.findByIdAndDelete(id);
        return res.status(200).json(enemy);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
}