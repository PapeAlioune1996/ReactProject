const API_TOKEN='a0db23b1e493c374c476eac16d902924'
//on creer une fonction qui recupere l;api
export function getFieldFromApiSearch(text,page){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
 //pour recuper les informations receuillis par l'url
 return fetch(url) 
   .then((response)=>response.json())
   .catch((error)=>console.log())//en cas d'erreur

}


export function getImageFromapi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }