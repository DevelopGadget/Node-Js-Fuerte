const admin = require('firebase-admin');

const serviceAccount = require('../firebase.json');

exports.App = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://multer-84861.firebaseio.com'
});

exports.Database = admin.firestore();
exports.Storage = admin.storage();
exports.FieldPath = admin.firestore.FieldPath.documentId();

exports.Data = Snaps => {
    var final = [];
    Snaps.forEach(e => {
        final.push(Object.assign({ 'id': e.id }, e.data()));
    });
    return final;
}