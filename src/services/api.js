const callToApi = () => {
  return fetch('https://palabras-aleatorias-public-api.herokuapp.com/random')
    .then((response) => response.json())
    .then((response) => response.body.Word);
};

export default callToApi;
