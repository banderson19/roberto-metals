const { Schema , model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const materialSchema = require('./Material');

const ticketSchema = new Schema ({
    clientName: {
        type: String
    },
    pickupDate: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    materials: [materialSchema]
})

ticketSchema.virtual('materialCount').get(function() {
    return this.materials.length;
  });

const Ticket = model('Ticket', ticketSchema);

module.exports = Ticket;


