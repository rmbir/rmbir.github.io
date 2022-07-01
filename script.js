/* .js files add interaction to your website */

// DEFINED VARIABLES

var factList = [ 
  "42% of people who are LGBT report living in an unwelcoming environment", // 0
  "80% of gay and lesbian youth report severe social isolation", // 1
  "The “Don’t Ask, Don’t Tell” policy, which restricted lesbians, gays, and bisexuals in the military from openly serving, was lifted in 2011. People who are transgender are not permitted to serve openly yet", // 2
  "6 in 10 LGBT students report feeling unsafe at school because of their sexual orientation", // 3
  "While non-LGBT students struggle most with school classes, exams, and work, their LGBT peers say the biggest problem they face is unaccepting families", // 4
];

/* facts directly from dosomething.org, link: https://www.dosomething.org/us/facts/11-facts-lgbt-life-america/ */

var fact = document.getElementById("fact");
var flagButton = document.getElementById("flagButton");
var count = 0;

// EVENT LISTENERS

if (flagButton) {
  flagButton.addEventListener("click", displayFact);
}

// FUNCTIONS

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
