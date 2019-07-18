const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

const TradeSchema = new mongoose.Schema({
    type: { type: String, required: true, uppercase: true,
        enum: ['COMPRE', 'VENDA'] },
    users: [userSchema],
    symbol: { type: String, required: true },
    share: { type: Number, min: 10, max: 30, required: true },
    value: { type: Number, min: 130.42, max:195.65, required: true },
    createdAt: {type: Date,default: Date.now,}
})

TradeSchema.plugin(mongoosePaginate);

mongoose.model('Trade', TradeSchema);