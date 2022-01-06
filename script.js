var a = document.querySelector("#btn-login");
var b = document.querySelector("#btn-registration");
// var z = document.querySelector("#btn");

b.addEventListener("click", () => {
    var x = document.querySelector("#login");
    var y = document.querySelector("#registration");
    var z = document.querySelector("#btn");

    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "140px";

})
a.addEventListener("click", () => {
    var x = document.querySelector("#login");
    var y = document.querySelector("#registration");
    var z = document.querySelector("#btn");

    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
})