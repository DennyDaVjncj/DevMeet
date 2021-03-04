import { AppsOutlined } from '@material-ui/icons';
import axios from 'axios';

const API = {
  getUser: function() {
    return axios.get(`/api/users/me`);
  },
};

export default API;
