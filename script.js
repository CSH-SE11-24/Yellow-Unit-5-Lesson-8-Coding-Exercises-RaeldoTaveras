console.log("Script running...")
// Task 1: Hello button flow
// Select the 'Click me for hello' button
let button = document.querySelector("#helloButton")
console.log(button)

// Select the empty p tag under that button
let tag =
  document.querySelector("#helloText")
console.log(tag)
// Add an event listener to the hello button such that when it's click, the p tag text says "Hello"
button.addEventListener("click",function(event){
  tag.textContent = "Hello"
})


// Task 2: All caps button flow
// Select the 'Click me for all caps' button
let caps = document.querySelector("#capsbutton")
console.log(caps)
// Select the p tag under that button (says there's no need to shout)
let ptag = document.querySelector("#capsText")
console.log(ptag)
// Add an event listener to the caps button such that when it's clicked, the p tag text is "THERE'S NO NEED TO SHOUT"
caps.addEventListener("click", function(event){
  ptag.textContent = "there's no need to shout"
})


// Task 3: Dog image flow
// Select the dog image


// Add an event listener to the dog image such that when it is clicked, the image src becomes happy-dog.jpeg







