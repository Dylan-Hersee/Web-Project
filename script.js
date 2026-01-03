//Contact us Info//
function Submit() {
  event.preventDefault(); 

  let valid = true;

  //Variables for ids//
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const form = document.getElementById("jscontact");
  // Variables for class//
  const fnameLabel = document.querySelector("label[for='fname']");
  const lnameLabel = document.querySelector("label[for='lname']");
  const emailLabel = document.querySelector("label[for='email']");
  const subjectLabel = document.querySelector("label[for='subject']");

  //Adding in new classes for CSS while false//
  function markInvalid(input, label) {
    input.classList.add("invalid-input");
    label.classList.add("invalid-label");
    valid = false;
  }
//Removing when True//
  function clearInvalid(input, label) {
    input.classList.remove("invalid-input");
    label.classList.remove("invalid-label");
  }

  // First name//
    if(fname.value.trim() === ""){ 
        markInvalid(fname, fnameLabel)
        alert("invalid first name")

 
    }
      
    else{
      clearInvalid(fname, fnameLabel)
    }

  // Last name//
     if(lname.value.trim() === ""){ 
       markInvalid(lname, lnameLabel)
        alert("Invalid last name")
    }
      
    else{
      clearInvalid(lname, lnameLabel);
    }
  // Email//
  
if (!email.value.includes("@") || !email.value.includes(".")) {
  markInvalid(email, emailLabel)
  alert("Email not Recognised");
 
}
  else {
   clearInvalid(email, emailLabel);
  }

  // Subject//
  if(subject.value.trim() === ""){
     markInvalid(subject, subjectLabel)
     alert("Please leave a Comment")
  }
  else{
     clearInvalid(subject, subjectLabel);
  }
  // If all valid → submit form
  if (valid) {
   alert("Thank you for your feedback we will be in touch shortly")
  form.reset();
  }
}
//Services Cards//
function Floral(){
  //Removing button//
  document.getElementById("button-2").style.display='none';
  //Showing hidden text//
  const extra = document.querySelector(".floral")
extra.classList.remove("hidden");

}
 //Event Card//
function Events(){
  document.getElementById("read").style.display='none';
  const events = document.querySelector(".events")
events.classList.remove("hidden");

}
 //Removing button//
const toggle = document.getElementById('nav-toggle');
//Showing hidden text//
const links = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  links.classList.toggle('show');
});
