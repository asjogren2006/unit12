let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        run(e);
    }
})

userNum.focus();

let counter = 0;

function run() {
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    return ran;
}

function userNumber() {
    let user = document.getElementById("getNumber").value
    return user;
}

document.querySelector("body").style.backgroundColor = "#4b797a";

function compareNumbers() {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter");
    if (a != b) {
        z.innerHTML = "Numbers are not the same. Computer got " + b + ", and user got "  + a; 
        z.style.color = "white";
        z.style.backgroundColor = "#733b37";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter++
        c.innerHTML = "You have tried " + counter + " Times."
        c.style.color = "white";
        c.style.backgroundColor = "#6a8f9e";
        c.style.padding = "20px";
        c.style.textAlign = "center";
       document.querySelector("body").style.backgroundColor = "#945656";
    } else if (a == b) {
        z.innerHTML = "Numbers are the same. Computer got " + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "#3b5920";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        c.innerHTML = "You have tried " + counter + " times to get        it right."
        c.style.color = "white";
        c.style.backgroundColor = "#6a8f9e";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        counter == 0;
      document.querySelector("body").style.backgroundColor = "#4b797a";
    }
      resetimput();
}

function resetimput() {
  document.getElementById("getNumber").value = "";
}

