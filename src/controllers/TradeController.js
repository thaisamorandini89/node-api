const mongoose = require('mongoose');

const Trade = mongoose.model('Trade');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const trades = await Trade.paginate({}, { page, limit:10 });

        return res.json(trades);
    },

    async show(req,res){
        const trade = await Trade.findById(req.params.id);

        return res.json(trade);
    },

    async store(req,res){
        const trade = await Trade.create(req.body);

        return res.json(trade);
    },

    async update(req, res){
        const trade = await Trade.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(trade);
    },

    async destroy(req,res) {
        await Trade.findByIdAndRemove(req.params.id);

        return res.send();
    }


};