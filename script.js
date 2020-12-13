function LoginPanelVisible(){
  var loginPanel = document.getElementById("LoginPanel");
  var registerPanel = document.getElementById("RegisterPanel");

  loginPanel.style.visibility = "visible";
  registerPanel.style.visibility = "hidden";
}

function RegisterPanelVisible(){
  var loginPanel = document.getElementById("LoginPanel");
  var registerPanel = document.getElementById("RegisterPanel");

  loginPanel.style.visibility = "hidden";
  registerPanel.style.visibility = "visible";
}