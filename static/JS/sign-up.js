document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup_form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form data
    const firstName = form.elements["firstname_signup"].value.trim();
    const lastName = form.elements["lastname_signup"].value.trim();
    const email = form.elements["signup_email"].value.trim();
    const password = form.elements["signup_password"].value.trim();
    const confirmPassword = form.elements["confirmsignup_password"].value.trim();

    // Validate the form
    const validationMessage = validateForm(firstName, lastName, email, password, confirmPassword);
    if (validationMessage) {
      displayOutput(validationMessage, false);
    } else {
      displayOutput("");
      console.log("All inputs are valid.");

      // Submit the form using Fetch API
      fetch("http://localhost:5000/auth/credentials/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      })
        .then(async (response) => {
          const data = await response.json();
          if (!response.ok) {
            throw data;
          }
          return data;
        })
        .then((data) => {
          displayOutput(data.message, true);
        })
        .catch((error) => {
          console.table(error);
          displayOutput(error.message, false);
        });
    }
  });

  function displayOutput(message, success) {
    const outputElement = document.getElementById("output");
    outputElement.innerText = message;
    outputElement.style.color = success ? "green" : "red";
  }

  // Validation Function
  function validateForm(firstName, lastName, email, password, confirmPassword) {
    if (!validateName(firstName)) {
      return "الرجاء ادخال الاسم الأول الصحيح.";
    }
    if (!validateName(lastName)) {
      return "الرجاء ادخال الاسم الأخير الصحيح.";
    }
    if (!validateEmail(email)) {
      return "تنسيق البريد الإلكتروني غير صالح.";
    }
    if (!validatePassword(password)) {
      return "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل ورقم واحد.";
    }
    if (password !== confirmPassword) {
      return "كلمتا المرور غير متطابقتين.";
    }
    return null;
  }

  // Email validation
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Password validation: Minimum 6 characters, at least 1 number
  function validatePassword(password) {
    const passwordRegex = /^(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  }

  // Name validation: Must not be empty or contain numbers
  function validateName(name) {
    const nameRegex = /^[a-zA-Z\u0600-\u06FF\s]+$/; // Allows Arabic and English letters
    return name.length > 0 && nameRegex.test(name);
  }
});
