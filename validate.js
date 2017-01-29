function validate() {

	var isValid = true;
	var name = getElementById("name");
	var email = getElementById("email");
	var phoneAreaCode = getElementById("phoneAreaCode");
	var phonePrefix = getElementById("phonePrefix");
	var phoneSuffix = getElementById("phoneSuffix");
	var address = getElementById("address");
	var city = getElementById("city");
	var state = getElementById("state");
	var zip = getElementById("zip");
	var gender = getElementById("gender");
	var courses = getElementById("courses");

	if (!validateField(name)) {

		isValid = false;
		createErrorMessage(name, "Name required.");

	}

	if (!validateField(email)) {

		isValid = false;
		createErrorMessage(,"Email required.");

	}

	if (!validateField(phoneAreaCode) 
		|| !validateField(phonePrefix) 
		|| !validateField(phoneSuffix)) {

		isValid = false;
		createErrorMessage(phoneSuffix, "Full phone number required.");

	}

	if (validateField(address)) {

		isValid = false;
		createErrorMessage(address, "Address required.");

	}

	if (validateField(city)) {

		isValid = false;
		createErrorMessage(city, "City required.");

	}


	if (validateField(state)) {

		isValid = false;
		createErrorMessage(state, "State required.");

	}

	if (validateField(zip)) {

		isValid = false;
		createErrorMessage(zip, "Zip required.");

	}

	if (validateField(courses)) {

		isValid = false;
		createErrorMessage(courses, "At least one course required.");

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

function createErrorMessage(element, error) {

	//<element></element><span>there was an error</span>
	var span = document.createElement("span");
	var text = document.createTextNode(error);
	var div = document.getElementById(element.id + "Div");

	span.setAttribute("class", "error"); //error styling
	span.setAttribute("id", element.id + "_error"); //id of element_error

	span.appendChild(text);
	div.appendChild(span);

}

function removeErrorMessage(element) {



}

