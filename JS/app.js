const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


  function downloadCV() {
    var pdfURL = "CV/Aymane_Maghouti.pdf";

    var link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);

    link.href = pdfURL;

    link.download = "AMG_CV.pdf";

    link.click();

    document.body.removeChild(link);
  }

  document.getElementById("downloadLink").addEventListener("click", function(event) {
    event.preventDefault();
    downloadCV();
  });



function senddEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // You can implement your logic to send an email using a service or server-side code here
    // For example, you can use the 'window.location' to create a mailto link
    var mailtoLink = `mailto:youcefg1a@gmail.com?subject=New Email from ${name}&body=${message}`;
    window.location.href = mailtoLink;
}


function sendEmail(){

	  var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;

	var messageBody = "Name => " + name + "<br/> email =>  " + email +
	"<br/> Message =>  " + message ;
	Email.send({
        SecureToken : "875ae71a-5735-462b-b840-24daa29a9f41",
        To : "youcefg1a@gmail.com",
        From : "youcefg1a@gmail.com",
        Subject : "[PORTFOLIO - DATA] Contact / Informations",
        Body : messageBody
    }).then(
        message => {
        	if(message=='OK'){
        		swal("Successful", "You clicked the button!", "success");
        	}
        	else{
        		swal("Error", "You clicked the button!", "error");
        	}
        }
      );
      }