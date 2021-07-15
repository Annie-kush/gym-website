function clearerrors() {
	errors = document.getElementByClassName('formerror');
	for (let item of errors) {
		item.innerHTML = " ";
	}
}
function seterror(id, error) {
	element = documet.getElementById(id);
	element.getElementByClassName('formerror')[0].innerHTML = error;
}
function validateform() {
	var returnval = true;
	clearerrors();
	var name = doucument.forms['myform']["fname"].value;
	if (name.length < 5) {
		seterror("name", "*Length of name is too short");
		returnval = false;
	}
	var phone = document.forms['myform']["fphone"].value;
	if (phone.length != 10) {
		seterror("phone", "*phone no should be of 10 digit");
		returnval = false;
	}
	var pass = doucument.forms['myform']["fpass"].value;
	if (pass.length < 6) {
		seterror('pass', "*password should be 6 character long");
		returnval = false;
	}
	var cpass = doucument.forms['myform']["fcpass"].value;
	if (cpass != pass) {
		seterror('pass', "*passwoed does not match");
		returnval = false;
	}

}