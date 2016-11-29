var sendBtn = document.getElementById("send");
var primeNumbers = [];
var isValidate = false;
document.getElementById('primes').textContent = "";

// generate prime numbers
sendBtn.addEventListener("click", function() {
  var num = document.getElementById("user-number").value;
  console.log("click");

  function primeNumbers() {
     if ( num == null ||  num == ""){
       isValidate = false;
document.getElementById('primes').textContent = "Type anything! ";      
    } else if (num <= 2) {   
      isValidate = false;
  document.getElementById('primes').textContent = "Oh no! You need to pick higher number to make me work!";
    } else if (num > 1000) {  
      isValidate = false; document.getElementById('primes').textContent = "Please, pick something smaller.";
    } else if ((num % 1) != 0 || num == NaN ) { isValidate = false; document.getElementById('primes').textContent = "Snap! It looks like you didn't type a number.";
    } else {
      isValidate = true;
    }
  };

  primeNumbers();

  //checking if number is prime
  function isPrime(x) {
    
    var primeNum = true;
    for (var i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) {
        primeNum = false;
      }
    }
    if (primeNum) {
      primeNumbers.push(x);
    }
  };

  primeNumbers = [];
  for (var j = 3; j <= num; j++) {
    isPrime(j);
  }
  //console.log(primeNumbers);

  function displayPrimes() {
    if (isValidate == true) {

      var finalNumbers = primeNumbers.join(', ');
      document.getElementById('primes').textContent = "Prime numbers smaller than your number: " + finalNumbers;
    }
  };
  displayPrimes();
  //  var primeNumbers = [];
});