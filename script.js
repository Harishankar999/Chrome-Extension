fetch("https://icanhazdadjoke.com/slack")
  .then((res) => res.json())
  .then((res) => {
    const jokes = res.attachments[0].text;
    const jokeElement = document.getElementById("jokeElement");
    jokeElement.innerHTML = jokes;
  })
  .catch((err) => console.error(err));
