links = document.getElementsByTagName("a");
if (links[0].href.endsWith("#")) {
  document.getElementById("breadcrumbs").innerHTML =
    "<span>Home</span> / <span>Artists</span>";
  console.log("executed");
} else if (links[1].href.endsWith("#")) {
  document.getElementById("breadcrumbs").innerHTML =
    "<span>Home</span> / <span>Gallery</span>";
  console.log("executed");
} else if (links[2].href.endsWith("#")) {
  document.getElementById("breadcrumbs").innerHTML =
    "<span>Home</span> / <span>About</span>";
  console.log("executed");
}