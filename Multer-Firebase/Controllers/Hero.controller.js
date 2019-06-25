const Firebase = require('../Firebase/Firebase.database');

exports.Get = async (req, res) => {
    return res.status(200).send(await Firebase.Get({}));
}

exports.GetById = async (req, res) => {
    return res.status(200).send(await Firebase.GetById(req.params.Id));
}

exports.Post = async (req, res) => {
    return res.status(200).send(await Firebase.Post(req));
}

exports.Put = async (req, res) => {
    return res.status(200).send(await Firebase.Put(req.body, req.params.Id));
}

exports.Delete = async (req, res) => {
    return res.status(200).send(await Firebase.Delete(req.params.Id));
}