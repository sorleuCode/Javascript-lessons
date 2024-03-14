const form = document.getElementById("form");
const password1E1 = document.getElementById("password1");
const password2E1 = document.getElementById("password2");
const message = document.getElementById("message");
const messageContainer = document.querySelector(".message-container");



 let isValid = false;
 let passwordMatch = false;

 const validateForm = () => {
    isValid = form.checkVisibility()
    console.log(isValid);

    // style mainmessage for an error

   if(!isValid) {
    message.textContent = "Please fill out the field";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return
   }
    //check to see if password match

    if (password1E1.value === password2E1.value) {
        passwordMatch = true;
        password1E1.style.color = "green";
        password2E1.style.borderColor = "green !important";
    } else {
        passwordMatch= false;
        message.textContent = "Make sure password match.";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        password1E1.style.color = "red";
        password1E1.style.borderColor = "red";
        password2E1.style.borderColor = "red";
        return
    }

    if(isValid && (password1E1.value === password2E1.value)) {
        message.textContent = "Successfully registered!";
        messageContainer.style.borderColor = "green";
        message.style.color = "green";
        return
    }

 }


 const storeFormData = () => {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }

     console.log(user);
 }


// this preventDefault() The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
const processFormData = (e) => {
    e.preventDefault();
    validateForm();

    // submit data if valid
    if(isValid && passwordMatch) {
        storeFormData();
        form.reset();
    }
}


 // this allows the form to be submitable when the submit button is clicked
form.addEventListener("submit", processFormData);