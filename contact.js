const form = document.getElementById("form"); 
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");            
const phone = document.getElementById("phone");                          


function errorMsg(input, msg) { 
    const formc = input.parentElement; 
    formc.classList.add("error"); 
    const small = formc.querySelector("small");      
message
    small.style.visibility = "visible"; 
    if (!small) { 
        const small = document.createElement("small");
        small.innerText = msg; 
        formc.appendChild(small);     
    } else {
        small.innerText = msg;
    }
    input.classList.add("error-input");  
};

function removeErrorMsg(input) { 
    const form = input.parentElement;
    form.classList.remove("error"); 
    const small = form.querySelector("small");
    if (small === "") {
        small.remove();
    }
    input.classList.remove("error-input");
};


form.addEventListener("submit", function(e) {
    e.preventDefault();
        if (fullName.value === "") {
        
         errorMsg(fullName, "Name is required"); 
    } 
    else {
        removeErrorMsg(fullName); 
        
    }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (email.value === "") {
        errorMsg(email, "Email is required"); 
    } else {
        removeErrorMsg(email); 
        
    }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (phone.value === "") {
        errorMsg(phone, "Phone number is required");  
    } else {
        removeErrorMsg(phone); 
       
    }
});

form.addEventListener('submit', function(e) {
     e.preventDefault();
});

