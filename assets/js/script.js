const container = document.querySelector(".container");

for(let i = 1; i <= 100; i++){
  const box = document.createElement("div");
  box.classList.add("box")

  if(!(i % 3) && !(i % 5)){
    box.classList.add("fizzbuzz");
    box.innerHTML = "FizzBuzz";
    container.append(box);
  }else if(!(i % 3)){
    box.classList.add("fizz");
    box.innerHTML = "Fizz";
    container.append(box);
  }else if(!(i % 5)){
    box.classList.add("buzz");
    box.innerHTML = "Buzz";
    container.append(box);
  }else{
    box.innerHTML = i;
    container.append(box);
  }
}