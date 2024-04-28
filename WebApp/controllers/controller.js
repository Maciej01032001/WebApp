const Posting = require('../models/posting');
const Offering = require('../models/offering');
const {Op} = require('sequelize')

async function addNewPosting(req, res, next) {
    try {
        const {title, description, start_date_hour, end_date_hour, max_value, institution_name} = req.body;
        const newPosting = await Posting.create({
            title,
            description,
            start_date_hour,
            end_date_hour,
            max_value,
            institution_name
        });
        res.status(201).json(newPosting);
    } catch (error) {
        next(error);
    }
}

async function addNewOffering(req, res, next) {
    try {
        const {postingId, amount, offering_user} = req.body;
        const newOffering = await Offering.create({
            postingId,
            amount,
            offering_user
        });
        res.status(201).json(newOffering);
    } catch (error) {
        next(error);
    }
}

async function getAllActivePostings() {
    try {
        const activePostings = await Posting.findAll({where: {status: 'active'}});
        return (activePostings);
    } catch (error) {
        console.log(error);
    }
}

async function getActivePostingDetails(id) {
    try {
        const record = await Posting.findOne({where: {id: id}});
        return (record);
    } catch (error) {
        console.log(error);
    }

}

async function getAllPastPostings() {
    try {
        const pastPostings = await Posting.findAll({where: {status: 'past'}});
        return (pastPostings);
    } catch (error) {
        console.log(error);
    }
}

async function getAllOfferingsForPosting(postingId, max) {
    try {
        const offerings = await Offering.findAll(
            {
                where: {
                    postingId: postingId,
                    amount: {[Op.lte]: max},
                },
                order: [['amount', 'ASC']]
            });
        return (offerings);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addNewPosting,
    addNewOffering,
    getAllActivePostings,
    getAllPastPostings,
    getAllOfferingsForPosting,
    getActivePostingDetails
};
