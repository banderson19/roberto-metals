const { Schema , model } = require('mongoose');
const ticketSchema = require('./Ticket');

const clientSchema = new Schema ({
    clientName: {
        type: String
    }
})

// ticketSchema.virtual('ticketCount').get(function() {
//     return this.tickets.length;
//   });

const Client = model('Client', clientSchema);

module.exports = Client;