function validate() {

	//TODO: all errors working except from address down

	var isValid = true;
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var phoneAreaCode = document.getElementById("phoneAreaCode");
	var phonePrefix = document.getElementById("phonePrefix");
	var phoneSuffix = document.getElementById("phoneSuffix");
	var address = document.getElementById("address");
	var city = document.getElementById("city");
	var state = document.getElementById("state");
	var zip = document.getElementById("zip");
	var gender = document.getElementById("gender");
	var courses = document.getElementById("courses");

	if (!validateField(name)) {

		isValid = false;
		createErrorMessage(name, "Name required.", document.getElementById("nameDiv"));

	}

	if (!validateField(email)) {

		isValid = false;
		createErrorMessage(email,"Email required.", document.getElementById("emailDiv"));

	}

	if (!validateField(phoneAreaCode) 
		|| !validateField(phonePrefix) 
		|| !validateField(phoneSuffix)) {

		isValid = false;
		createErrorMessage(phoneSuffix, "Full phone number required.", document.getElementById("phoneDiv"));

	}

	if (validateField(address)) {

		isValid = false;
		createErrorMessage(address, "Address required.", document.getElementById("addressDiv"));

	}

	if (validateField(city)) {

		isValid = false;
		createErrorMessage(city, "City required.", document.getElementById("cityDiv"));

	}

	if (validateField(state)) {

		isValid = false;
		createErrorMessage(state, "State required.", document.getElementById("stateDiv"));

	}

	if (validateField(zip)) {

		isValid = false;
		createErrorMessage(zip, "Zip required.", document.getElementById("zipDiv"));

	}

	if (validateField(courses)) {

		isValid = false;
		createErrorMessage(courses, "At least one course required.", document.getElementById("coursesDiv"));

	}


	// Output details if isValid flag still true
	if (isValid) {

		outputDetails();

	}

}

function outputDetails() {

	//<div></div>
	document.body.appendChild(document.createTextNode("NICE ONE!")); 
	//TODO: get rid of this.

}

// Is the field valid?
function validateField(element) {

	if (element.value.length > 0) {

		return true; //yes

	} else {

		return false; //no

	}

}

function createErrorMessage(element, error, div) {

	//<element></element><span>there was an error</span>
	var span = document.createElement("span");
	var text = document.createTextNode(error);

	span.setAttribute("class", "error"); //error styling
	span.setAttribute("id", element.id + "_error"); //id of element_error

	span.appendChild(text);
	div.appendChild(span);

}

function removeErrorMessage(element) {



}

