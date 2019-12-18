'use strict';

module.exports = function(mongoose, connection){
    let OrderDefinition,
        Schema = mongoose.Schema,
        UserSchema = require("./sub-schema/user")(Schema),
        OrderSchema;

    OrderDefinition = {
        name: {type: String},
        students: [userSchema],
        teachers: [userSchema],
        totalQuantity: {type: Number},
        totalCost: {type: Number},
        createdBy: {type: Schema.ObjectId, ref: 'User'},
    };

    OrderSchema = new mongoose.Schema(OrderDefinition, {
        collection: 'orders',
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    });

    OrderSchema.index({orderRef: 1});

    return connection.model('Order', OrderSchema);
};