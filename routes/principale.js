const express = require('express');
const router = express.Router();
const {getUffici, getUfficiById} = require('../controllers/principaleController');

router.get('/', async (req, res)=>{
    //res.json(getUffici());
    const result = await getUffici();
    res.render('uffici', {
        uffici : result
    })
});

/*router.get('/', async (req, res)=>{
    try {
        const result = await getUffici();
        return result.json;
    } catch (e) {
        res.status(500).send(e.toString());
    }
    
});*/

router.get('/:id([0-9]+)', (req, res)=>{
    res.json(getUfficiById(req.params.id));
});
module.exports = router;