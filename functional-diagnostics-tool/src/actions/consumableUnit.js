import axios from 'axios';

export const FETCH_CONSUMABLEUNIT = 'FETCH_CONSUMABLEUNIT';

// Rover Endpoint Info
// const ROOT_URL = '';
// const Authorization = '';
//const ROOT_URL = 'https://stg01-update.delivery.autodesk.com/appcast/services/appcastService/';
//const ROOT_URL = 'https://update.delivery.autodesk.com/appcast/services/appcastService/';

var ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts?key=123';

export function fetchConsumableUnit() {

   //Global settings for axios
  // axios.defaults.headers.common['x-autodesk-appcast-tracer-type'] = tracerType;
  // axios.defaults.headers.common['Authorization'] = Authorization;
  // axios.defaults.headers.post['Content-Type'] = 'application/json';

  //var url = root_url + (preview ? 'preview/' : '') + 'sam/v4';

  //var BODY = JSON.parse(clientState);
  //var request = axios.post(`${url}`, BODY);
  const request = axios.post(`${ROOT_URL}`);

  return {
    type: FETCH_CONSUMABLEUNIT,
    payload: request
  };
}
