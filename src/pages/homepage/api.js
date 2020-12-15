
let result = { statusOk: false, statusCode: -1, content: null };

export const getCharacters = async () => {
  var response = await fetch(
    "https://rickandmortyapi.com/api/character",
    {
      method: 'GET',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      },
    },
  )
    .then(r => {
      (result.statusOk = r.ok), (result.statusCode = r.status);
      if (r.ok && r.status) {
        return r.json();
      }
    })
    .catch(error => console.error('Error:', error));

  result.content = response;

  return result;
};

export const getCharacterInfo = async (id) => {
  var response = await fetch(
    "https://rickandmortyapi.com/api/character/" + id,
    {
      method: 'GET',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json'
      },
    },
  )
    .then(r => {
      (result.statusOk = r.ok), (result.statusCode = r.status);
      if (r.ok && r.status) {
        return r.json();
      }
    })
    .catch(error => console.error('Error:', error));

  result.content = response;

  return result;
};


