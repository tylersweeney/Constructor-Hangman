var wordsToGuess = ["Fry", "Bender", "Leela", "Scruffy the Janitor", "Professor Farnsworth", "Zoidberg", "Amy", "Hermes", "Zap Brannigan", "Kipp", "Calculatron"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;