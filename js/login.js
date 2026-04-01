function switchTab(tabName) {
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName + '-form').classList.add('active');
}

const loginTab = document.getElementById('login');
const registerTab = document.getElementById('register');

function clearTabColor()
{
    [loginTab, registerTab].forEach(p => {
        p.style.color = "";
        p.style.textDecoration = "";
        p.style.textUnderlineOffset = "";
    })
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

/*
    id = fullname
    id = email
    id = pass2
    tên tối đa 2 chữ cái, viết hoa chữ cái đầu
    ví dụ: Nguyễn Văn A

    email  tối đa 10 chữ cái sau @
 */

function checkRegexTrue(p) {
    p.innerText = "Nhập đúng";
    p.style.color = "green"
    setTimeout(() => {
        p.innerText = "";
    }, 400);
}

function checkRegexFalse(p)
{
    p.innerText = "Nhập sai, vui lòng kiểm tra kĩ";
    p.style.color = "red";
}

function checkSignUp() {
    const fullName = document.querySelector('#fullname');
    const regexFullName = /^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/;
    const email = document.querySelector('#email');
    const regexEmail = /^[A-Za-z0-9_]+@[a-z]{2,8}[.][a-z]{2,8}$/
    const password = document.querySelector('#pass2');
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z_@#$%0-9]{3,16}$/;
    const newRegis = document.querySelector('#new-register');


    const helpTextName = document.getElementById('help-text-name');
    const helpTextEmail = document.getElementById('help-text-email');
    const helpTextPass = document.getElementById('help-text-pass');
    const helpTextRegis = document.getElementById('help-text-regis');

    let checkName = false;
    let checkEmail = false;
    let checkPass = false;


    fullName.addEventListener('input', () => {
        if(regexFullName.test(fullName.value))
        {
            checkRegexTrue(helpTextName);
            checkName = true;
        }
        else
        {
            checkRegexFalse(helpTextName);
            checkName = false;
        }
    })

    email.addEventListener('input', () => {
        if(regexEmail.test(email.value))
        {
            checkRegexTrue(helpTextEmail);
            checkEmail = true;
        }
        else
        {
            checkRegexFalse(helpTextEmail);
            checkEmail = false;
        }
    });

    password.addEventListener('input', () => {
        if(regexPassword.test(password.value))
        {
            checkRegexTrue(helpTextPass);
            checkPass = true;
        }
        else
        {
            checkRegexFalse(helpTextPass);
            checkPass = false;
        }
    })

    newRegis.addEventListener('click', () => {
        if(checkName && checkEmail && checkPass)
        {
            helpTextRegis.innerText = "Đăng kí thành công";
            helpTextRegis.style.color = "green";
            switchTab('login');
            clearTabColor();
            const loginTab = document.getElementById('login');
            loginTab.style.color = "green";
            loginTab.style.textDecoration = "underline";
            loginTab.style.textUnderlineOffset = "10px";
        }
        else
        {
            helpTextRegis.innerText = "Đăng kí thất bại, mời xem lại tên, email hoặc mật khẩu";
            helpTextRegis.style.color = "red";
        }
    });
}

checkSignUp();

function onPage()
{
    window.location.href = "home/home.html";
}

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    onPage();
})