import axios from 'axios';

export const FETCH_APPCAST = 'FETCH_APPCAST';

// Rover Endpoint Info
// const ROOT_URL = '';
// const Authorization = '';
//const ROOT_URL = 'https://stg01-update.delivery.autodesk.com/appcast/services/appcastService/';
//const ROOT_URL = 'https://update.delivery.autodesk.com/appcast/services/appcastService/';
//const Authorization = 'Basic YWRzdXBwb3J0OjFsb3ZlQXV0b2Qzc2s=';

export function fetchAppCast(clientState, tracerType, url, credentials) {

  if(credentials != ':'){
      var Authorization = 'Basic ' + window.btoa(credentials); // encode a string
      axios.defaults.headers.common['Authorization'] = Authorization;
  }

   //Global settings for axios
  axios.defaults.headers.common['x-autodesk-appcast-tracer-type'] = tracerType;
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  //var url = root_url + (preview ? 'preview/' : '') + 'sam/v4';

  var BODY = JSON.parse(clientState);
  //var request = axios.post(`${url}`, BODY);

  var request = axios.post(`${url}`, BODY)
    .catch(function (response) {
      if (response instanceof Error) {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', response);
        // console.log('Error', response.message);
        return {
          type: FETCH_APPCAST,
          status: 401,
          error: true
        };
      } else {
        // The request was made, but the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(response);
        // console.log(response.data);
        // console.log(response.status);
        return {
          type: FETCH_APPCAST,
          status: response.status,
          statusText: response.statusText,
          error: true
        };
      }
    });

  return {
    type: FETCH_APPCAST,
    payload: request
  };
}
