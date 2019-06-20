const App = require('../Config/Firebase.config');
const Database = App.Database;
const Storage = App.Storage;
const DataFormat = App.Data;
const FieldPath = App.FieldPath;

exports.Get = async ({ Skip = 0, Limit = 50 }) => {
    const snaps = await Database.collection('Heroes')
        .orderBy(FieldPath)
        .limit(Limit)
        .startAt(Skip)
        .get();
    return DataFormat(snaps);
}

exports.GetById = async Id => {
    const snap = await Database.collection('Heroes').doc(Id).get();
    return Object.assign({ 'id': snap.id }, snap.data());
}

exports.Post = async Hero => {

}

exports.Put = async (Hero, Id) => {

}

exports.Delete = async Id => {

}