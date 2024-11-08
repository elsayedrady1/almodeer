// // Google Sign-in callback
// function onGoogleSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
//     // You can add more code here to handle Google login success
// }

// // Facebook login callback
// function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//         statusChangeCallback(response);
//     });
// }

// function statusChangeCallback(response) {
//     if (response.status === 'connected') {
//         // Logged into your webpage and Facebook.
//         console.log('Logged in with Facebook');
//         FB.api('/me', {fields: 'name,email'}, function(response) {
//             console.log('Name: ' + response.name);
//             console.log('Email: ' + response.email);
//             // You can add more code here to handle Facebook login success
//         });
//     } else {
//         // The person is not logged into your webpage or we are unable to tell.
//         console.log('Please log into this webpage and Facebook.');
//     }
// }

// // Add click event listeners to Google and Facebook login buttons
// document.getElementById('googleLogin').addEventListener('click', function() {
//     // Trigger Google login flow
//     gapi.auth2.getAuthInstance().signIn();
// });

// document.getElementById('facebookLogin').addEventListener('click', function() {
//     // Trigger Facebook login flow
//     FB.login(checkLoginState, {scope: 'email'});
// });

document
  .getElementById("login_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // استبدل هذه البيانات ببيانات تسجيل الدخول الحقيقية
    const user = {
      email: document.getElementById("login_email").value,
      password: document.getElementById("Login_password").value,
    };

    // إجراء طلب إلى الخادم للتحقق من بيانات المستخدم (محاكاة)
    fetch("http://localhost:5000/auth/credentials/signin", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // افترض أن البيانات المستلمة تحتوي على تفاصيل المستخدم بعد تسجيل الدخول بنجاح
        if (data.success) {
          // تخزين بيانات المستخدم في localStorage أو sessionStorage
          localStorage.setItem("loggedInUser", JSON.stringify(data.user));
          console.log(data);

          // إعادة توجيه المستخدم إلى الصفحة الرئيسية أو أي صفحة أخرى
          window.location.href = "./index.html";
        } else {
          // عرض رسالة خطأ
          alert("تسجيل الدخول فشل");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

// لاسترجاع بيانات المستخدم في أي صفحة أخرى

// window.addEventListener("DOMContentLoaded", function() {
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

//     if (loggedInUser) {
//         // استخدم بيانات المستخدم في الصفحة
//         console.log("المستخدم المسجل دخوله:", loggedInUser);
//         document.getElementById("userName").innerText = loggedInUser.name; // مثال
//     } else {
//         // إعادة توجيه إلى صفحة تسجيل الدخول إذا لم يتم تسجيل الدخول
//         window.location.href = "./Log In.html";
//     }
// })
