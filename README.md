Fetch JSON post request

let url = 'https://someurl.com';
let options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                property_one: value_one,
                property_two: value_two
            })
        };
let response = await fetch(url, options);
let responseOK = response && response.ok;
if (responseOK) {
    let data = await response.json();
    // do something with data
}

Axios JSON post request

let url = 'https://someurl.com';
let options = {
            method: 'POST',
            url: url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                property_one: value_one,
                property_two: value_two
            }
        };
let response = await axios(options);
let responseOK = response && response.status === 200 && response.statusText === 'OK';
if (responseOK) {
    let data = await response.data;
    // do something with data
}

So:

Fetch's body = Axios' data
Fetch's body has to be stringified, Axios' data contains the object
Fetch has no url in request object, Axios has url in request object
Fetch request function includes the url as parameter, Axios request function does not include the url as parameter.
Fetch request is ok when response object contains the ok property, Axios request is ok when status is 200 and statusText is 'OK'
To get the json object response: in fetch call the json() function on the response object, in Axios get data property of the response object.