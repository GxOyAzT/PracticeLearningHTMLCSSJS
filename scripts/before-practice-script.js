function SetModeAsLearnNew(){
  document.getElementById("ModePracticeLearnId").value = 1;
  document.getElementById("PracticeOrLearnWrapperId").style.display = "none";
  document.getElementById("HowManyFlashcardsWrapperId").style.display = "block";
}

function SetModeAsPractice(){
  document.getElementById("ModePracticeLearnId").value = 2;
  document.getElementById("PracticeOrLearnWrapperId").style.display = "none";
  document.getElementById("HowManyFlashcardsWrapperId").style.display = "block";
}

function SetQuantity(n){
  document.getElementById("HowManyFlashcardsId").value = n;
  document.getElementById("HowManyFlashcardsWrapperId").style.display = "none";
  document.getElementById("StartWrapperId").style.display = "block";
}