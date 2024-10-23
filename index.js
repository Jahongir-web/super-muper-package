

const findWordCount = (str, word) => {
  let result = 0;
  
  str.split(" ").forEach(soz => {
    if(soz.toLowerCase() == word.toLowerCase()) {
      result = result + 1
    }
  })

  return `Siz kiritgan matnda ${word} so'zi ${result} marta qatnashgan!`;  
}

module.exports = findWordCount;

