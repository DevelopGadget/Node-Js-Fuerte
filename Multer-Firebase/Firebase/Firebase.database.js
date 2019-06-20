const Database = require('../Config/FIrebase.config').Database;
const Storage = require('../Config/FIrebase.config').Storage;

exports.Get = async ({ Skip = 0, Limit = 0 }) => {
    var snaps = await Database.collection('Heroes')
        .orderBy('Name')
        .limit(Limit)
        .startAt(Skip)
        .get();
    return snaps.docs;
}

exports.GetById = async Id => {

}

exports.Post = async Hero => {

}

exports.Put = async (Hero, Id) => {

}

exports.Delete = async Id => {

}