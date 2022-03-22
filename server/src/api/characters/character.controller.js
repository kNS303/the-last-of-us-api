const Character = require ("./character.model");

const getAll = async (req, res, next) => {
    try {
        const characters = await Character.find();
        res.status(200).json(characters);

    } catch (error) {
        return next (error)
    }
}

const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const character = await Character.findById(id);
        res.status(200).json(character);
    } catch (error) {
        return next (error)
    }
}

const postOne = async (req, res, next) => {
    try {
        const character = new Character(req.body)
        
        if (req.file) {
            character.img = req.file.path;
        }

        const characterDB = await character.save();
        return res.status (201).json(characterDB)
    } catch (error) {
        return next(error)
    }
}

const patchOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const character = new Character(req.body);
        character._id = id;
        const updateCharacter = await Character.findByIdAndUpdate (id, character);
        return res.status(200).json(updateCharacter);
    } catch (error) {
        return next (error);
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const character = await Character.findByIdAndDelete(id);
        return res.status(200).json(character);
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

