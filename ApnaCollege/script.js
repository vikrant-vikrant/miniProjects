const newcourse = document.querySelector(".course");
const drop = document.querySelector(".courses-dropdown");
newcourse.addEventListener("mouseover", function () {
  drop.style.display = "block";
});
newcourse.addEventListener("mouseleave", function () {
  drop.style.display = "none";
});

consoleText(
  [
    "Sigma 8.0 : Complete Placement Preparation!",
    "Delta 7.0 : Complete Web Development!",
    "Alpha Plus 5.0 : Complete DSA!",
    "Sigma 7.0 : Complete Placement Preparation!",
  ],
  "text"
);
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#000"];
  var visible = true;
  var con = document.getElementById("text");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
}
