exports.getAnime = (animeName) => {
   return fetch(`https://api.jikan.moe/v3/search/anime?q=${animeName}`)
      .then((response) => response.json());
};

exports.saveAnimeToDB = (animeDetails) => {
   return fetch('http://localhost:8080/add', {
      method: 'post',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(animeDetails)
   });
};