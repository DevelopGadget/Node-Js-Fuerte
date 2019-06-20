const HeroController = require('../Controllers/Hero.controller');

exports.HeroRoutes = app => {
    app.get('/Hero', HeroController.Get);
    app.get('/Hero/:Id', HeroController.GetById);
    app.post('/Hero', HeroController.Post);
    app.put('/Hero', HeroController.Put);
    app.delete('/Hero', HeroController.Delete);
}