//let links = document.querySelectorAll("a");

//links.forEach((link) => console.log(link));
/*links.forEach(function(link) {
  console.log(link);
});*/

//let tds = document.querySelectorAll("td");

//tds.forEach((td) => td.addEventListener("click", () => console.log("Click")));
/*tds.forEach(function(td) {
  td.addEventListener("click", function() {
    console.log("Click");
  });
});*/

let btnX = document.querySelectorAll(".close");

//console.log(btnX);

//btnX.forEach((b) => b.addEventListener("click", () => alert("Has apretado el boton X, hasta luego.")));

/*btnX.forEach(function(b) {
  b.addEventListener("click", function() {
    alert("Has apretado el boton X.");
  })
})*/

/* PREVENTDEFAULT */

//btnX.forEach((b) => b.addEventListener("click", (ev) => ev.preventDefault()));
btnX.forEach((b) => b.addEventListener("click", (ev) => {
  ev.preventDefault();
  
  let content = document.querySelector(".content");

  //Remove classes of content.
  content.classList.remove("fadeInDownBig");
  content.classList.remove("animated");

  //Adding new classes for content.
  content.classList.add("animated");
  content.classList.add("fadeOutUp");

  //once.
  setTimeout(function() {
    //location.href = "/wamp64/www/desarrollo-web/codigofacilito-courses/web-development-professional-course/bulletin/index.html";
    location.href = "./../index.html";
  }, 600);

  //Every time.
  //setInterval
  

}));
