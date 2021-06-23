const { Schema , model } = require('mongoose');
const materialSchema = require('./Material');

const trackerSchema = new Schema ({
    tracker: {
        type: Number
    },
    clientName: {
        type: String,
        required: true
    },
    items: [materialSchema]
})

const Tracker = model('Tracker', trackerSchema);

module.exports = Tracker;

// const { Schema, model } = require('mongoose');
// const reactionSchema = require('./Reaction');
// const dateFormat = require('../utils/dateFormat');

// const thoughtSchema = new Schema(
//   {
//     thoughtText: {
//       type: String,
//       required: 'You need to leave a thought!',
//       minlength: 1,
//       maxlength: 280
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: timestamp => dateFormat(timestamp)
//     },
//     username: {
//       type: String,
//       required: true
//     },
//     reactions: [reactionSchema]
//   },
//   {
//     toJSON: {
//       getters: true
//     }
//   }
// );

// thoughtSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

// const Thought = model('Thought', thoughtSchema);

// module.exports = Thought;
