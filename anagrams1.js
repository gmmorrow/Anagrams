const button = document.getElementById("findButton");
const div = document.getElementById("output")
button.onclick = function() {
  div.innerHTML = ""
  let typedText = document.getElementById("input").value;
  let anagrams = getAnagramsOf(typedText);
  let element = document.createElement("h3")
  element.textContent = anagrams
  div.appendChild(element)
  
}
function getAnagramsOf(text) {
  let order = alphabetize(text);
  let newArray = [];
  for (i = 0; (i < words.length); i++) {
    if (order === alphabetize(words[i])) {
      newArray.push(words[i])
    }
  }
  return (newArray)
}
  //
function alphabetize(a) {
  
  return a.toLowerCase()
    .split("")
    .sort()
    .join("")
    .trim();
}

