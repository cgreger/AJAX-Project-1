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

	}

	if (!validateField(email)) {

		isValid = false;

	}

	if (!validateField(phoneAreaCode)) {

		isValid = false;

	}

	if (!validateField(phonePrefix)) {

		isValid = false;

	}

	if (validateField(phoneSuffix)) {

		isValid = false;

	}

	if (validateField(address)) {

		isValid = false;

	}

	if (validateField(city)) {

		isValid = false;

	}


	if (validateField(state)) {

		isValid = false;

	}

	if (validateField(zip)) {

		isValid = false;

	}

	if (validateField(courses)) {

		isValid = false;

	}


	// Output details if isValid flag still true
	if (isValid) {

		outputDetails();

	}


}

function outputDetails() {

	//<div></div>

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

	//<span>there was an error</span>

}

function removeErrorMessage(element) {



}

