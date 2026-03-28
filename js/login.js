function switchTab(tabName) {
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName + '-form').classList.add('active');
}

const loginTab = document.getElementById('login');
const registerTab = document.getElementById('register');

function clearTabColor()
    {
        loginTab.style.color = "";
        loginTab.style.textDecoration = "";
        loginTab.style.textUnderlineOffset = "";


        registerTab.style.color = "";
        registerTab.style.textDecoration = "";
        registerTab.style.textUnderlineOffset = "";
    }

    loginTab.addEventListener('click', () => {
        clearTabColor();
        loginTab.style.color = "green";
        loginTab.style.textDecoration = "underline";
        loginTab.style.textUnderlineOffset = "10px";
    })

    registerTab.addEventListener('click', () => {
        clearTabColor();
        registerTab.style.color = "green";
        registerTab.style.textDecoration = "underline";
        registerTab.style.textUnderlineOffset = "10px";
    })


function checkSignup() {
    
}


function togglePassword() {
    let pass1 = document.getElementById("pass1");
    let pass2 = document.getElementById("pass2");
    let eye1 = document.getElementById("eye1");
    let eye2 = document.getElementById("eye2");

    
    
    if (pass1.type === "password") {
        pass1.type = "text"; 
        eye1.className = "bi bi-eye-fill"; 
    } 
    else {
        pass1.type = "password"; 
        eye1.className = "bi bi-eye-slash-fill";
    }

    if (pass2.type === "password") {
        pass2.type = "text"; 
        eye2.className = "bi bi-eye-fill"; 
    } 
    else {
        pass2.type = "password"; 
        eye2.className = "bi bi-eye-slash-fill";
    }
}

function onPage()
{
    window.location.href = "../home/home.html";
}

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    onPage();
})



