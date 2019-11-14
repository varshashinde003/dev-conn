
import niv from "node-input-validator";
import mongoose from "mongoose";

niv.extend('unique', ({ value, args }) => {
    const field = args[1] || 'email';
    let condition = {};
    condition[field] = value;
    if (args[2]) {
        condition['_id'] = { $ne: mongoose.Types.ObjectId(args[2]) };
    }
    return mongoose.model(args[0]).findOne(condition).select(field)
        .exec()
        .then((doc) => { return !doc })
        .catch(() => { return true })
});


niv.extend('exists', ({ value, args }) => {
    const field = args[1] || 'email';
    let condition = {};
    condition[field] = value;
    if (args[2]) {
        condition['_id'] = { $ne: mongoose.Types.ObjectId(args[2]) };
    }
    return mongoose.model(args[0]).findOne(condition).select(field)
        .exec()
        .then((doc) => { return !!doc })
        .catch(() => { return false })
});

niv.extend('different', ({ value, args }, v) => {
    let [otherField] = args;
    otherField = otherField.split('.').filter((e) => e !== '');

    let otherValue;

    otherField.map((item) => {
        if (typeof otherValue === 'undefined') {
            otherValue = v.inputs && v.inputs[item];
        } else {
            otherValue = otherValue[item];
        }
    });

    if (typeof otherValue === 'undefined') {
        return true;
    }

    if (otherValue !== value) {
        return true;
    }

    return false;
});


export default niv.Validator;