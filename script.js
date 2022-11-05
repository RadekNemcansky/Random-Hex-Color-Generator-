// to generate anything random we use Math.random() method;
//to generate combination of numbers and letter, first we have to convert variable to string
//also the parameter of toString() has to be 16 because we need hexadecimal numeral system, which is 0-9 and then goes a-f.
//hex color number contains only six figures, hence we need to use substring method and define indexes as 2 and 8.

/* let color = Math.random();
color = Math.random().toString(16).substring(2,8 );
console.log(color)
 */

const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

const generateColor = (a, b) => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  //next line of code selects background of the document and makes it colorful
  document.body.style.backgroundColor = "#" + randomColor;
  hex.innerHTML = "#" + randomColor;
};

btn.addEventListener("click", generateColor);
//next line will generate color with resheshing the browser
generateColor();
