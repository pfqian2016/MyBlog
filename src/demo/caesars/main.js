import './style.css';
const caesars = require('./caesars.js');

window.onload = function() {
  let btnEncode = document.getElementById('btn-encode');
  let btnDecode = document.getElementById('btn-decode');
  btnEncode.addEventListener('click', function(e) {
      let textEncode = document.getElementById('text-encode');
      caesars.getStr(textEncode.value);
      let ret = caesars.encode();
      let result = document.getElementById('result');
      result.innerHTML = ret;
  },true);
  btnDecode.addEventListener('click', function(e) {
    let textDecode = document.getElementById('text-decode');
    caesars.getStr(textDecode.value);
    let ret = caesars.decode();
    let result = document.getElementById('result');
    result.innerHTML = ret;
  },true);
};
