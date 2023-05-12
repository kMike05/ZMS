// theme change by button
const backgroundBtn = document.querySelector(".background-btn");
const homeBanner = document.querySelector(".home-banner");

backgroundBtn.onclick = function () {
  homeBanner.classList.toggle("active");
};
function checkPasswordStrength(password){
    //set of criterea for a strong password
    var strongRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    if(strongRegex.test(password)){
        return 'strong';
    }
    var mediumRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(mediumRegex.test(password)){
        return 'medium';
    }
    return 'weak';
}
document.getElementById('submit-btn').addEventListener('click', function() {
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;

    if(email===''|| password===''){
        alert('Please fill all fields');
    }else{
    window.location.href = 'Home.html';
}
});


//username check valid or not
const usernameInput = document.getElementById("username-input");
const validUsernameMark = document.getElementById("valid-username-mark");
const invalidUsernameMark = document.getElementById("invalid-username-mark");
const signupBtn = document.getElementById("signup-btn");

usernameInput.addEventListener("keyup", async () => {
     if (usernameInput.value.length >= 3) {
    const res = await fetch("/username/validation", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernameInput.value,
      }),
    });
    const isValid = await res.text();
    if (isValid==='false') {
      invalidUsernameMark.style.display = "block";
      validUsernameMark.style.display = "none";
    } else {
      validUsernameMark.style.display = "block";
      invalidUsernameMark.style.display = "none";
    }
   }
   else{
      invalidUsernameMark.style.display = "block";
      validUsernameMark.style.display = "none";

   }
  });
  var button = document.getElementById("submit-btn");

// Add event listener for mouseover (cursor above button)
button.addEventListener("mouseover", function() {
  button.style.backgroundColor = "white";
});