const { Schema } = require('mongoose');

const materialSchema = new Schema(
  {
    materialName: {
      type: String,
      maxlength: 180
    },
    quantity: {
      type: Number,
      required: true
    }
  }
);

module.exports = materialSchema;
