"use strict";

const outputDiv = document.getElementById("output");
const buttonDiv = document.getElementById("buttons");


const Greeter = require("./greeterMain");

buttonDiv.addEventListener("click", (event) => {
	const languageToShow = event.target.id;
	outputDiv.innerHTML = Greeter[languageToShow]();
});
