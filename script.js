function pairElement(str) {
  
  
  let array = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'G') {
      array.push([str[i], 'C']);
    }
    if (str[i] === 'C') {
      array.push([str[i], 'G']);
    }
    if (str[i] === 'A') {
      array.push([str[i], 'T']);
    }
    if (str[i] === 'T') {
      array.push([str[i], 'A']);
    }
    
  }
  
  return array;
}

console.log(pairElement("GCG"));
