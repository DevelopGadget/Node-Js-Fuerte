const admin = require('firebase-admin');
const Multer = require('multer');
const path = require('path');

const serviceAccount = require('../firebase.json');

exports.App = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://multer-84861.firebaseio.com'
});

exports.Database = admin.firestore();
exports.FieldPath = admin.firestore.FieldPath.documentId();
exports.Data = Snaps => {
    var final = [];
    Snaps.forEach(e => {
        final.push(Object.assign({ 'id': e.id }, e.data()));
    });
    return final;
}

const storage = Multer.diskStorage({
    destination: path.join(__dirname, '../uploads'),
    filename:  (req, file, cb) => {
        cb(null, file.originalname);
    }
})
exports.Image = uploadImage = Multer({
    storage,
    limits: {fileSize: 5000000}
}).single('image');