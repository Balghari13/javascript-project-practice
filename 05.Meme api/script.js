console.log('----');

const btn = document.querySelector('button');


async function fetchMeme(){
  const URL = 'https://meme-api.com/gimme/wholesomememes';
  const response = await fetch(URL);
  const data =await response.json();
  console.log(data);
  document.querySelector('.author').innerText = `Meme by: ${data.author}`;
  document.querySelector('.meme-title').innerText = data.title;
  document.querySelector('.meme-img').src = data.url

}
fetchMeme()

btn.addEventListener('click', fetchMeme)
