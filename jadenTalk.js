function jadenTalk(text) {
  const unneededPunctuation = /[.,!?;:]/g;

  let cleanText = text.replace(unneededPunctuation, "");

  const words = cleanText.split(" ");

  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return capitalizedWords.join(" ");
}

module.exports = jadenTalk