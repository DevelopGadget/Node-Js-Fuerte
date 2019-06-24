const UserController = require('../Controllers/User.controller');

exports.User = app => {
    app.get('/User', UserController.Get);
    app.get('/User/:Id', UserController.GetById);
    app.post('/User', UserController.Post);
    app.put('/User/:Id', UserController.Put);
    app.delete('/User/:Id', UserController.Delete);
}