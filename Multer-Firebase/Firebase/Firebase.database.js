const App = require('../Config/Firebase.config');
const Database = App.Database;
const DataFormat = App.Data;
const FieldPath = App.FieldPath;
const Storage = App.Image;

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
    Storage(Hero, {}, (err) => {
        if (!err) {
            await Database.collection('Heroes').add(Object.assign({ 'Photo': Hero.file.originalname }, Hero.body));
        }
    });
}

exports.Put = async (Hero, Id) => {
    return await Database.collection('Heroes').doc(Id).update(Hero);
}

exports.Delete = async Id => {
    return await Database.collection('Heroes').doc(Id).delete();
}