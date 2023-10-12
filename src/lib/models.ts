import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    ounces: {
        type: Number,
        required: true,
    }
});

const Account = mongoose.models.Account || mongoose.model('Account', accountSchema);

const submissionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    ounces: {
        type: Number,
        required: true,
    },
    roast: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const Submission = mongoose.models.Submission || mongoose.model('Submission', submissionSchema);

export { Account, Submission };