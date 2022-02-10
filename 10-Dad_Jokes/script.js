const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);
generateJoke();

//Usando Fetch
// function generateJoke() {
//   fetch('https://icanhazdadjoke.com', {
//     headers: {
//       Accept: 'application/json',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//       console.log(data);
//     });
// }

//Usando Async/Await
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}
