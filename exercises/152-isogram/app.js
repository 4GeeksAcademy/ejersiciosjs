function isIsogram(text) {
  // your code here
    const lowerCaseText = text.toLowerCase();
    const chars = [];
    for (let i = 0; i < lowerCaseText.length; i++) {
      if (chars.indexOf(lowerCaseText[i]) !== -1) {
        return false;
      }
      chars.push(lowerCaseText[i]);
    }
    return true;
  }


console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false