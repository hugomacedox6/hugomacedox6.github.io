function copyclipboard() {
   //
   var textcopied = document.getElementById("cssvalue");
   //
   textcopied.select();
   //
   navigator.clipboard.writeText(textcopied.value);
}

function bordercss() {
   //
   var width = document.getElementById("width").value + "px";
   var heigth = document.getElementById("heigth").value + "px";
   //
   var topleft = document.getElementById("topleft").value + "%";
   var toprigth = document.getElementById("toprigth").value + "%";
   var bottomrigth = document.getElementById("bottomrigth").value + "%";
   var bottomleft = document.getElementById("bottomleft").value + "%";
   //
   document.getElementById("bordercss").style.height = heigth;
   document.getElementById("bordercss").style.width = width;
   //
   document.getElementById("bordercss").style.borderTopLeftRadius = topleft;
   document.getElementById("bordercss").style.borderTopRightRadius = toprigth;
   document.getElementById("bordercss").style.borderBottomRightRadius = bottomrigth;
   document.getElementById("bordercss").style.borderBottomLeftRadius = bottomleft;
   //
   document.getElementById("cssvalue").value = "border-top-left-radius: " + topleft + "\n" + "border-top-right-radius: " + toprigth+"\n"+"border-bottom-right-radius:"+bottomrigth+"\n"+"border-bottom-left-radius:"+bottomleft;
}
