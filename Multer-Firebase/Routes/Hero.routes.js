const HeroController = require('../Controllers/Hero.controller');

exports.HeroRoutes = app => {
    app.get('/Hero', HeroController.Get);
    app.get('/Hero/:Id', HeroController.GetById);
    app.post('/Hero', HeroController.Post);
    app.put('/Hero/:Id', HeroController.Put);
    app.delete('/Hero/:Id', HeroController.Delete);
}