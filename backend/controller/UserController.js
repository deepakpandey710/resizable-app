const User = require("../model/UserModel");
const Count = require("../model/Count");

async function updateCount(inc=1) {
    let cnt = inc;
    const data = await Count.findOne({});
    if (data) {
        cnt += data.count
        await Count.updateOne({ _id: data._id }, { count: cnt });
    } else {
        await Count.create({ count: cnt });
    }
    return cnt;
}

module.exports.add = async (req, res) => {
    try {
        const { email, number } = req.body;
        await User.deleteMany({});
        let data = await User.create({ email, number });
        let count = await updateCount();
        return res.json({ data, count });
    } catch (error) {
        return res.json({ data: {}, count: 0 });
    }
};

module.exports.update = async (req, res) => {
    try {
        const { email, number } = req.body;
        let data = await User.findOneAndUpdate({}, {email, number }, { new: true });
        let count = await updateCount();
        return res.json({ data:data?data:{}, count });
    } catch (err) {
        return res.json({ data: {}, count: 0 });
    }
};

module.exports.getDetail = async (req, res) => {
    try {
        const data = await User.findOne({});
        let count = await updateCount(0);
        return res.json({ data, count });
    } catch (err) {
        return res.json({ data: {}, count: 0 });
    }
};