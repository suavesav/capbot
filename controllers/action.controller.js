const Action = require('../models/action.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.action_create = function (req, res) {
    let action = new Action(
        {
            name: req.body.name,
            description: req.body.description,
        }
    );

    action.save(function (err) {
        if (err) { return next(err); }
        res.send('Action Created')
    })
};

exports.action_list = function (req, res) {
    console.log(req.query);
    Action.find(req.query, function(err, actions) {
        if (err) { return next(err); }
        res.send(actions);
    })
};

exports.action_details = function (req, res) {
    Action.findById(req.params.id, function(err, action) {
        if (err) { return next(err); }
        res.send(action);
    })
};

exports.action_update = function (req, res) {
    Action.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, action) {
        if (err) { return next(err); }
        res.send('Action Updated')
    })
};

exports.action_delete = function (req, res) {
    Action.findByIdAndRemove(req.params.id, function(err, action) {
        if (err) { return next(err); }
        res.send('Action Deleted');
    })
};
