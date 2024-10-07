import { Router } from 'express';
import { Store, Building } from '../../model/address.js';

export default Router()


.get('/store', async (req, res, next) => {
    const { q } = req.query;
    const stores = await Store.find({ name: q });

    res.json(stores);
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
.put('/store/:id', async (req, res, next) => {
    const { id } = req.params;
    const store = await Store.findById(id);

    if (store == null) {
        res.status(400);
    }
    else {
        const { name } = req.body;

        store.name = name;
        store.save();

        res.status(204);
    }
})
.delete('/store/:id', async (req, res, next) => {
    const { id } = req.params;
    const store = await Store.findByIdAndDelete(id);

    res.status(204);
})


.get('/building', async (req, res, next) => {
    const { q } = req.query;
    const buildings = await Building.find({ name: q });

    res.json(buildings);
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
.put('/building/:id', async (req, res, next) => {
    const { id } = req.params;
    const building = await Building.findById(id);

    if (building == null) {
        res.status(400);
    }
    else {
        const { name, address } = req.body;

        if (address) {
            building.address = address;
        }
        if (name) {
            building.name = name;
        }
        await building.save();

        res.status(204);
    }
})
.delete('/building/:id', async (req, res, next) => {
    const { id } = req.params;
    const building = await Building.findByIdAndDelete(id);

    res.status(204);
})