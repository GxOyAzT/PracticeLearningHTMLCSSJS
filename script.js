function HideOrShowNavigationBar(){
  var navBar = document.getElementById("NavigationBar");

  if (navBar.style.top == "140px")
  {
    navBar.style.top = "-100px";
    return;
  }

  navBar.style.top = "140px";
}