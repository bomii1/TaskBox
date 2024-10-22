// 함수 선언문
function greet() {
    console.log("Hello!");
  }
  greet();  // "Hello!"

  
// 함수 표현식
const greet = function() {
    console.log("Hello!");
  };
  greet();  // "Hello!"

  
// Function 생성자 함수
const greet = new Function('console.log("Hello!");');
greet();  // "Hello!"

// 화살표 함수 표현식
const greet = () => {
    console.log("Hello!");
  };
  greet();  // "Hello!"

  
// 즉시 실행 함수: IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("Hello!");
})();  // "Hello!"


// 재귀 함수
function countdown(n) {
    if (n <= 0) {
      console.log("Done!");
      return;
    }
    console.log(n);
    countdown(n - 1);
  }
  countdown(3);  // 3, 2, 1, "Done!"

// 중첩 함수
function outer() {
    function inner() {
      console.log("Inner function");
    }
    console.log("Outer function");
    inner();
  }
  outer();  // "Outer function", "Inner function"

// 콜백함수
function greet(callback) {
    console.log("Hello!");
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet(sayGoodbye);  // "Hello!", "Goodbye!"
    
