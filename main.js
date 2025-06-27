
        function validateLogin() 
        {
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const confirmPassword = document.getElementById("confirmPassword").value.trim();
            const error = document.getElementById("error-message");

            const validUser = "karim";
            const validPass = "12345";                           // الباسورد غير وجرب

            if (!username || !password || !confirmPassword) {
                error.textContent = "All fields are required!";
                return;
            }
            if (password !== confirmPassword) {
                error.textContent = "Passwords do not match!";
                return;
            }
            if (username === validUser && password === validPass) {
                document.getElementById("login-section").style.display = "none";
                document.getElementById("cv-section").style.display = "block";
                typeWriter();
            } else {
                error.textContent = "Invalid username or password!";
            }
        }

        const text = "Computer Engineering Department | MODERN ACADEMY FOR ENGINEERING AND TECHNOLOGY";
        let index = 0;
        const speed = 60;


        function typeWriter() 
        {

            if (index < text.length) {
                document.getElementById("typedText").innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            }
        }
        function togglePassword() {
            const password = document.getElementById("password");
            const confirm = document.getElementById("confirmPassword");
            const fields = [password, confirm];
            fields.forEach(field => {
                field.type = field.type === "password" ? "text" : "password";
            });
        }

    typeWriterEffect()
    {
    
    const text = "👨‍💻 Coming Computer Engineering Student | Passionate about AI, Programming & Design";
    let index = 0;
    const speed = 60;

    function typeWriterEffect() 
    {
    const typedElement = document.getElementById("typedText");
    if(index === 0) typedElement.innerHTML = ""; 
    if (index < text.length) {
        typedElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriterEffect, speed);
    }
    }

}