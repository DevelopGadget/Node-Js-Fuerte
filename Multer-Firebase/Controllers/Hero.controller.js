const Firebase = require('../Firebase/Firebase.database');

exports.Get = async (req, res) => {
    return res.status(200).send(await Firebase.Get({}));
}

exports.GetById = async (req, res) => {
    return res.status(200).send(await Firebase.GetById(req.params.Id));
}

exports.Post = async (req, res) => {

}

exports.Put = async (req, res) => {

}

exports.Delete = async (req, res) => {

}