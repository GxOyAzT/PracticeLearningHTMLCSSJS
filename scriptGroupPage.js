function ShowCreateNewGroupPanel(){
  var shader = document.getElementById("Shader");
  var createNewGroupPanel = document.getElementById("CreateNewGroupPanel");

  shader.style.visibility = "visible";
  createNewGroupPanel.style.visibility = "visible";
}

function HideCreateNewGroupPanel(){
  var shader = document.getElementById("Shader");
  var createNewGroupPanel = document.getElementById("CreateNewGroupPanel");
  var cNGPName = document.getElementById("CNGPName");
  var cNGPDescription = document.getElementById("CNGPDescription");

  shader.style.visibility = "hidden";
  createNewGroupPanel.style.visibility = "hidden";

  cNGPName.value = "";
  cNGPDescription.value = "";
}