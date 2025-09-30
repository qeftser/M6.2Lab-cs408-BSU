
const alertButton = document.querySelector(".opt_display");

alertButton.onclick = function() {
   let optionSelect = document.querySelector('input[name="options"]:checked');
   alert(optionSelect.value)
}
