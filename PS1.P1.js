function alphabet_order(str)
  {
    str = str.replace(/[^A-Za-z]+/g, '');
return str.split('').sort().join('');
  }
console.log(alphabet_order("supercalifragilisticexpialidocious"));


