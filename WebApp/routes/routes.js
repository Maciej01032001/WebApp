const express = require('express');
const router = express.Router();
const {
    addNewPosting,
    addNewOffering,
    getAllActivePostings,
    getAllPastPostings,
    getAllOfferingsForPosting,
    getActivePostingDetails
} = require('../controllers/controller');

router.post('/postings', addNewPosting);

router.post('/offerings', addNewOffering);

router.get('/add-posting', (req, res) => {
    res.render('addNewPosting.ejs');
});

router.get('/add-offering/:id', (req, res) => {
    const id = req.params.id;
    res.render('addNewOffering.ejs', {id});
});

router.get('/active-postings', async (req, res) => {
    try {
        const activePostings = await getAllActivePostings();
        res.render('activePostings.ejs', {activePostings});
    } catch (error) {
        console.log(error)
    }
});

router.get('/past-postings', async (req, res) => {
    try {
        const pastPostings = await getAllPastPostings();
        res.render('pastPostings.ejs', {pastPostings});
    } catch (error) {
        console.log(error)
    }
});

router.get('/postings/:postingId', async (req, res) => {
    try {
        const id = req.params.postingId;
        const posting = await getActivePostingDetails(id)
        res.render('activePostingDetails.ejs', {posting: posting});
    } catch (error) {
        console.log(error)
    }
});

router.get('/offerings/:postingId', async (req, res) => {
    try {
        const postingId = req.params.postingId;
        const posting = await getActivePostingDetails(postingId)
        const offerings = await getAllOfferingsForPosting(postingId, posting.max_value)
        res.render('offeringsForPosting.ejs', {posting: posting, offerings: offerings});
    } catch (error) {
        console.log(error)
    }
});

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;