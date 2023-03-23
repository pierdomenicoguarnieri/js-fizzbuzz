const container = document.querySelector(".container");

for(let i = 1; i <= 100; i++){
  const box = document.createElement("div");
  box.classList.add("box");
  let output = i;

  if(!(i % 3) && !(i % 5)){
    box.classList.add("fizzbuzz");
    output = "FizzBuzz"
  }else if(!(i % 3)){
    box.classList.add("fizz");
    output = "Buzz";
  }else if(!(i % 5)){
    box.classList.add("buzz");
    output = "Buzz";
  }

  box.append(output);
  container.append(box);
}