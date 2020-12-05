let express = require('express'),
    router = express.Router();

router.route('/create').post((req, res) => {
    return res.json({ "created": req.body });
});

router.route('/').get((req, res) => {
    console.log("help");
    return res.json({ "users" : [{_id: "123", name: "lewis", email: "lewis@myapp.com"}] });
})


router.route('/courses').get((req, res) => {
    console.log("help");
    return res.status(200).json({name:'api testing'});
})


module.exports = router;