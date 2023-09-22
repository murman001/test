// script.js
function toggleAdditionalInfo() {
    var additionalInfo = document.getElementById("additional-info");
    if (additionalInfo.classList.contains("show")) {
        additionalInfo.classList.remove("show");
    } else {
        additionalInfo.classList.add("show");
    }
}
