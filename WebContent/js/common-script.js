function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function resizeIFrameToFitContent( myFrame ) {
	myContent = document.getElementById("myContent");
	iFrame = document.getElementById(myFrame);
    //iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
    iFrame.width  = myContent.offsetWidth;
}
/*
window.addEventListener('DOMContentLoaded', function(e) {
    var iFrame = document.getElementById('myFrame');
    resizeIFrameToFitContent( iFrame );
} );
*/
function ddlFunc(dropdownlist) {
    var x = document.getElementById(dropdownlist);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-green";
    } else { 
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-green", "");
    }
}