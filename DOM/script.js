const tagE1 = document.getElementsByTagName("h1");
console.log(tagE1);

const testE1 = document.getElementsByClassName("testing");
console.log(testE1);

const  checkId = document.getElementById("boxText");
console.log(checkId);

const  allE1 = document.querySelectorAll(".selectE1");
console.log(allE1);

const oneE1 = document.querySelector(".selectOneE1");
console.log(oneE1);

const ell = document.querySelector("#peleZainab");
console.log(ell);

const submitBtn = document.querySelector('button');

submitBtn.addEventListener('mouseover', () => {
    alert("It is closing time already")
})



