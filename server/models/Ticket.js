const { Schema , model } = require('mongoose');
const materialSchema = require('./Material');

const ticketSchema = new Schema ({
    clientName: {
        type: String
    },
    materials: [materialSchema]
})

ticketSchema.virtual('materialCount').get(function() {
    return this.materials.length;
  });

const Ticket = model('Ticket', ticketSchema);

module.exports = Ticket;


