document.addEventListener("DOMContentLoaded", function(event) {
	// TODO: Anything you want to do when the page is loaded?
	console.log("hello");
});

function validateForm() {
	// TODO: Validate the user input
	var name = document.getElementById("name").value;
	var password = document.getElementById("pwd").value;
	var nameReg = /[0-9]/g;
	var found = name.match(nameReg);
	if(name != ""|| password != ""){
		if(found.length < name.length){
			alert("Invalid Employee ID!");
			return false;
		}
		return true;
	}
	alert("Employee ID or Password is empty!");
	return false;
}
