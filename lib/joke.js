export const getRandomJoke = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await res.json();

  return data;
}