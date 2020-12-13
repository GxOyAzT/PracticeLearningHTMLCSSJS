var PanelAIsVisible = true;

function ManipulatePanelA(){
  var panelA = document.getElementById("PanelA");

  if (PanelAIsVisible){
    panelA.style.visibility = "hidden"
    PanelAIsVisible = false;
    return;
  }
  
  panelA.style.visibility = "visible"
  PanelAIsVisible = true;
}