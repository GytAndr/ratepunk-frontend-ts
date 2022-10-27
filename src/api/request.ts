import { nanoid } from 'nanoid'

export default async function submitEmail(email: string) {

  //get dato from form
  const data = {
    id: nanoid(),
    email,
  };
  //send to server in json format
  const JSONdata = JSON.stringify(data);

  //JSON bin API endpoint
  const endpoint = "https://api.jsonbin.io/v3/b/634e397b0e6a79321e2c3393";
  const options = {
    //PUT because we need only last value to be stored
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": "$2b$10$DpAvBBF9vRsEDGiJ8jIWbeUm30bE7mMTw0kDmo7WbRbz2gIos2mrm",
    },
    body: JSONdata,
  };
  const response = await fetch(endpoint, options);
  const result = await response.json();
  return result.record.id;
}