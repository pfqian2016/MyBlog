let caesars = (function() {
  let strToEncode;
  let encodedStr;
  let decodedStr;
  return {
    getStr(str) {
      strToEncode = str.toUpperCase();
    },
    encode() {
      //TODO encode str
      let encodedArr = rot13(strToEncode);
      return encodedStr = encodedArr.map((val) => String.fromCharCode(val)).join('');
    },
    decode() {
      //TODO decode str
      let decodedArr = rot13(strToEncode);
      return decodedStr = decodedArr.map((val) => String.fromCharCode(val)).join('');
    }
  }
})();

function rot13(str) {
  let codeArr = [];
  for(let i = 0; i < str.length; i++) {
    codeArr.push(str.charCodeAt(i));
  }
  let ret = codeArr.map((val) => {
    if(val >= 65 && val <=77) {
      return val + 13;
    }else if(val >= 78 && val <= 90){
      return val - 13;
    }else {
      return val;
    }
  });
  return ret;
}
module.exports = caesars;
