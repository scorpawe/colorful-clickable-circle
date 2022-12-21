// initializing the DOM elements as variables
const ball = document.querySelector("#ball");
const clicker = document.querySelector("#clicker");
const body = document.querySelector("body");

// creating the callback function to "activate" the "dissapear" class
const dissapear = () => {
	ball.classList.add("dissapear");
};

// creating the onclick event
clicker.addEventListener("click", () => {
	if (!ball.classList.contains("animationShrink")) {
		ball.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
		body.style.background = `linear-gradient(hsl(${
			Math.random() * 360
		}, 100%, 50%), hsl(${Math.random() * 360}, 100%, 50%))`;
		ball.style.animationDuration = "0.8s";
		ball.classList.add("animationShrink");
		ball.classList.remove("animationGrow");
		setTimeout(dissapear, 800);
	} else {
		ball.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
		body.style.background = `linear-gradient(hsl(${
			Math.random() * 360
		}, 100%, 50%), hsl(${Math.random() * 360}, 100%, 50%))`;
		ball.classList.remove("dissapear");
		ball.style.animationDuration = "0.8s";
		ball.classList.remove("animationShrink");
		ball.classList.add("animationGrow");
	}
});
