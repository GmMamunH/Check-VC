const letter = prompt('Enter Your letter:');

if (
  letter === 'a' ||
  letter === 'e' ||
  letter === 'i' ||
  letter === 'o' ||
  letter === 'u'
) {
  document.getElementById("result").innerHTML = letter + ' is Vowel';
} else {
    document.getElementById("per").innerHTML = letter + ' is consonant';
}