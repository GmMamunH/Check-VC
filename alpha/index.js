// const letter = prompt('Enter Your letter:');

// if (
//   letter === 'a' ||
//   letter === 'e' ||
//   letter === 'i' ||
//   letter === 'o' ||
//   letter === 'u'
// ) {
//   document.getElementById("result").innerHTML = letter + ' is Vowel';
// } else {
//     document.getElementById("per").innerHTML = letter + ' is consonant';
// }

const form = document.querySelector("form");
const vowel = document.querySelector("#vowel");
const consonant = document.querySelector("#consonant");

form.addEventListener("submit", function(e){
  e.preventDefault();
  
  const letter = document.querySelector("#letter").value;
/* ==============================================
  if (!letter) {
    result.style.display = 'block';
    result.innerText = 'কি ব্যপার উল্টা পাল্টা ইনপুট দেও কেন?';
    this.reset();
    return;
  }
  
============================================== */

 if (
  letter === 'a' ||
  letter === 'e' ||
  letter === 'i' ||
  letter === 'o' ||
  letter === 'u'
) {
  document.getElementById("consonant").innerHTML = letter + ' is Vowel';
} else {
    document.getElementById("consonant").innerHTML = letter + ' is Consonant'};

    consonant.style.display = 'block';
});