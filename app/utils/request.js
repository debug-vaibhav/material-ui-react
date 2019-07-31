import axios from 'axios';

export default function request(method, url, data, headers) {
  if (!data) {
    data = {}
  }

  //Check for headers
  if (!headers) {
    headers = {}
    headers['Content-type'] = 'application/json';
  }

  const callingAgents = {
    method: method,
    url: url,
    data: data,
    headers: headers
  };

  return new Promise((resolve) => {
    axios(callingAgents)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        resolve(err);
      });
  });
}
