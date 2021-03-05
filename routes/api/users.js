const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const { default: axios } = require('axios');

router.get('/me', (req, res) => {
  axios({
    method: 'get',
    url: 'https://randomuser.me/api/?results=50&inc=name,email,dob,phone,picture,location',
    responseType: 'json',
  }).then(({data}) => {
    console.log(data);
    res.json(data)
  }).catch(err => res.json(err))
});




module.exports = router;
