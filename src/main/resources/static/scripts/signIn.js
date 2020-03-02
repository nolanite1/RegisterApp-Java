document.addEventListener("DOMContentLoaded", function(event) {
	
});

function validateForm() {
	//Validate the user input
	var name = document.getElementById("name").value;
	var password = document.getElementById("pwd").value;
	var nameReg = /[0-9]/g;
	var found = name.match(nameReg);
	//Check if empty username and password
	if(name != "" && password != ""){ 			// IF NOT EMPTY
		if(found.length < name.length){			  // Check if username has letters
			//Invalid username
			alert("Invalid Username!");
			return false;
		}
			//Valid username and password
			return true;
	}
	//Empty username or password
	alert("Empty Username or Password!");
	return false;
}
