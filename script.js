// ===========================================
// Home Page Dynamic Text & Features
// ===========================================
(function() {
    const homeSection = document.querySelector(".home-section");
    if (!homeSection) return; // Exit if not home page

    // Dynamic Text
    const textEl = homeSection.querySelector(".section-desc");
    const texts = [
        "Welcome to Pixel Studio!",
        "Explore curated pixel art collections.",
        "Join our digital art community."
    ];
    let index = 0;
    if (textEl) {
        setInterval(() => {
            textEl.textContent = texts[index % texts.length];
            index++;
        }, 4000);
    }

    // Dynamic Feature Tags
    const featureTags = homeSection.querySelector(".collection-tags");
    if (featureTags) {
        featureTags.innerHTML = ""; // Clear existing tags
        ["Sprites", "Backgrounds", "Animations", "Wallpapers"].forEach(f => {
            const span = document.createElement("span");
            span.textContent = `• ${f}`;
            featureTags.appendChild(span);
        });
    }

    // Join Button Alert
    const joinBtn = homeSection.querySelector(".join-btn");
    if (joinBtn) {
        joinBtn.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Thank you for joining Pixel Studio!");
        });
    }
})();

// ===========================================
// Login Form Validation
// ===========================================
(function() {
    const loginForm = document.querySelector("body.login-bg form");
    if (!loginForm) return; // Exit if not login page

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const username = loginForm.querySelector("input[type='text']").value.trim();
        const password = loginForm.querySelector("input[type='password']").value.trim();
        const msg = loginForm.querySelector(".signup-text");

        if (!username || !password) {
            msg.textContent = "All fields are required!";
            msg.style.color = "red";
        } else {
            msg.textContent = "Login successful!";
            msg.style.color = "green";
        }
    });
})();

// ===========================================
// Signup Form Validation with Email & Password Rules
// ===========================================
(function() {
    const signupForm = document.querySelector("body:not(.login-bg) form");
    if (!signupForm) return; // Exit if not signup page

    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // All required fields
        const inputs = signupForm.querySelectorAll("input[required]");
        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value.trim()) allFilled = false;
        });

        // Email
        const emailInput = signupForm.querySelector("input[type='email']");
        const email = emailInput ? emailInput.value.trim() : "";

        // Password & Confirm Password
        const passwordInput = signupForm.querySelector("input[type='password']");
        const confirmPasswordInput = signupForm.querySelectorAll("input[type='password']")[1];
        const password = passwordInput ? passwordInput.value : "";
        const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : "";

        // Message paragraph
        let msg = signupForm.querySelector(".form-message");
        if (!msg) {
            msg = document.createElement("p");
            msg.classList.add("form-message");
            signupForm.appendChild(msg);
        }

        // Regex for uppercase and symbol
        const hasUppercase = /[A-Z]/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        // Allowed email domains
        const allowedDomains = ["gmail.com", "hotmail.com", "yahoo.com"];
        const emailDomain = email.split("@")[1];
        const validDomain = allowedDomains.includes(emailDomain);

        if (!allFilled) {
            msg.textContent = "Please fill out all required fields!";
            msg.style.color = "red";
        } else if (!email.includes("@") || !validDomain) {
            msg.textContent = "Email must be a valid domain (gmail.com, hotmail.com, yahoo.com)!";
            msg.style.color = "red";
        } else if (password.length < 6) {
            msg.textContent = "Password must be at least 6 characters!";
            msg.style.color = "red";
        } else if (!hasUppercase) {
            msg.textContent = "Password must contain at least one uppercase letter!";
            msg.style.color = "red";
        } else if (!hasSymbol) {
            msg.textContent = "Password must contain at least one symbol!";
            msg.style.color = "red";
        } else if (password !== confirmPassword) {
            msg.textContent = "Passwords do not match!";
            msg.style.color = "red";
        } else {
            msg.textContent = "Registration successful!";
            msg.style.color = "green";
        }
    });
})();