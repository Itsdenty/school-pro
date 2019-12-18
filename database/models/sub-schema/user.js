module.exports = function(Schema){
    return new Schema({
        id: {type: Schema.ObjectId},
        phone_number: {type: String, unique: true, required: true},
        email: {type: String, unique: true},
        username: {type: String},
        password: {type: String, required: true},
        blocked: {type: Boolean, default: false},
        role: {type: Schema.ObjectId, ref: 'Role'},
        permissions: [{type: String}],
        last_login: {type: Date},
        login_count: {type: Number},
        deleted_at: {type: Date, default: null}
    });
};
