//author: Gabriel
var dict = {
    "2": "A",
    "22": "B",
    "222": "C",
    "3": "D",
    "33": "E",
    "333": "F",
    "4": "G",
    "44": "H",
    "444": "I",
    "5": "J",
    "55": "K",
    "555": "L",
    "6": "M",
    "66": "N",
    "666": "O",
    "7": "P",
    "77": "Q",
    "777": "R",
    "7777": "S",
    "8": "T",
    "88": "U",
    "888": "V",
    "9": "W",
    "99": "X",
    "999": "Y",
    "9999": "Z",
    "0":" ",    
    "00":" ",
    "000":" ",
    "0000":" ",
  };
  
  async function decoder(strNumeros) {
      try{
        const arrayStrNumbers = strNumeros.split(" ");
        const arrPalavra = await arrayStrNumbers.map(function(strNum) {
          return dict[strNum];
        });
        return arrPalavra.join("");
      }catch(error){
        throw new Error(error);
      }
  }

  export {decoder};