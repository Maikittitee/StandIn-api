import { Router } from 'express';
import { Store, Building } from '../model/address.js';

export default Router()

.get('/store/:id', async (req, res, next) => {
    const { id } = req.params;
    const store = await Store.findById(id);
    
    res.json(store);
})
.get('/store', async (req, res, next) => {
    const query = req.query.q;
    const stores = await Store.find({ name: query });

    res.json(stores);
})
.put('/store/:id', async (req, res, next) => {
    const { id } = req.params;
    const store = await Store.findById(id);
    
    if (store != null) {
        const name = req.body.name;

        store.name = name;
        store.save();

        res.status(204);
    }
    else {
        res.status(400);
    }
})
.post('/store', async (req, res, next) => {
    try {
        const newstore = await Store.create(req.body);

        res.status(201);
    } 
    catch (error) {
        res.status(400);
    }
})
.delete('/store/:id', async (req, res, next) => {
    const { id } = req.params;
    const store = await Store.findByIdAndDelete(id);

    res.status(204);
})

.get('/building/:id', async (req, res, next) => {
    const { id } = req.params;
    const building = await Building.findById(id);

    res.json(building);
})
.get('/building', async (req, res, next) => {
    const query = req.query.q;
    const building = await Building.find({ name: query });

    res.json(building);
})
.put('/building/:id', async (req, res, next) => {
    const { id } = req.params;
    const building = await Building.findById(id);
    
    if (building != null) {
        const name = req.body.name;

        building.name = name;
        await building.save();

        res.status(204);
    }
    else {
        res.status(400);
    }
})
.post('/building', async (req, res, next) => {
    try {
        const building = await Building.create(req.body);

        res.status(201);
    } 
    catch (error) {
        res.status(400);
    }
})
.delete('/building/:id', async (req, res, next) => {
    const { id } = req.params;
    const building = await Building.findByIdAndDelete(id);

    res.status(204);
})