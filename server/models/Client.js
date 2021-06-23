const { Schema , model } = require('mongoose');

const clientSchema = new Schema ({
    clientName: {
        type: String
    }
})

const Client = model('Client', clientSchema);

module.exports = Client;