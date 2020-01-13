const express = require('express');
const router = express.Router();

const action_controller = require('../controllers/action.controller');

router.post('/create', action_controller.action_create);
router.get('/:id', action_controller.action_details);
router.put('/:id/update', action_controller.action_update)
router.delete('/:id/delete', action_controller.action_delete)

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', action_controller.test);
module.exports = router;

