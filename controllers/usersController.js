const User = require('../models/User');

module.exports = {
    findAll: function(req, res){
        User.find(req.query)

    }
}