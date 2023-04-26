$(document).ready(function() {

    // checking name function
    var inputName = $("#inputName");
    var tbName = $("#tbName");

    function checkName() {
        var regex = /^[A-Z][a-z]+$/;
        if (inputName.val() == "") {
            tbName.html("* Required");
            return false;
        }
        if (!regex.test(inputName.val())) {
            tbName.html("* Error");
            return false;
        }
        tbName.html("");
        return true;
    }

    inputName.blur(checkName);

    // checking last name function
    var inputLastName = $("#inputLastName");
    var tbLastName = $("#tbLastName");

    function checkLastName() {
        var regex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;
        if (inputLastName.val() == "") {
            tbLastName.html("* Required");
            return false;
        }
        if (!regex.test(inputLastName.val())) {
            tbLastName.html("* Error!");
            return false;
        }
        tbLastName.html("");
        return true;
    }

    inputLastName.blur(checkLastName);

    //check Zip Code function
    var inputZipCode = $("#inputZipCode");
    var tbZipCode = $("#tbZipCode");
    function checkZipCode() {
        var regex = /^[0-9]{5,6}$/;
        if (inputZipCode.val() == "") {
            tbZipCode.html("* Required");
            return false;
        }
        if (!regex.test(inputZipCode.val())) {
            tbZipCode.html("* Error!");
            return false;
        }
        tbZipCode.html("");
        return true;
    }

    inputZipCode.blur(checkZipCode);

    // check cell phone function
    
    var inputCellPhone = $("#inputCellPhone");
    var tbCellPhone = $("#tbCellPhone");
    function checkCellPhone() {
        var regex = /^0\d{9}$/;
        if (inputCellPhone.val() == "") {
            tbCellPhone.html("* Required");
            return false;
        }
        if (!regex.test(inputCellPhone.val())) {
            tbCellPhone.html("* Error");
            return false;
        }
        tbCellPhone.html("");
        return true;
    }

    inputCellPhone.blur(checkCellPhone);

    // check email function 

    var inputEmail = $("#inputEmail");
    var tbEmail = $("#tbEmail");
    function checkEmail() {
        var regex = /^[A-Za-z0-9\.\_]+@[A-Za-z]+[A-Za-z\.]+$/;
        if (inputEmail.val() == "") {
            tbEmail.html("* Required");
            return false;
        }
        if (!regex.test(inputEmail.val())) {
            tbEmail.html("* Error");
            return false;
        }
        tbEmail.html("");
        return true;
    }

    inputEmail.blur(checkEmail);

    // check location function 

    var inputLocation = $("#inputLocation");
    var tbLocation = $("#tbLocation");
    function checkLocation() {
        var regex = /^[A-Za-z0-9\ ]+$/;
        if (inputLocation.val() == "") {
            tbLocation.html("* Required");
            return false;
        }
        if (!regex.test(inputLocation.val())) {
            tbLocation.html("* Error");
            return false;
        }
        tbLocation.html("");
        return true;
    }

    inputLocation.blur(checkLocation);

    $("#send").click(function() {
        if (!checkName())
            alert("Send failed!");
        else
            alert("Sent!");
    });
});