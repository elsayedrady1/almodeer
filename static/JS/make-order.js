// document.addEventListener("DOMContentLoaded", function() {
//     let currentStep = 1;
//     const totalSteps = 4;
//     const prevBtn = document.getElementById("prevBtn");
//     const nextBtn = document.getElementById("nextBtn");
//     const tabContents = document.querySelectorAll(".tab-content");

//     function showStep(step) {
//         tabContents.forEach(content => {
//             content.classList.remove("active");
//         });
//         document.getElementById("tab-" + step).classList.add("active");

//         prevBtn.disabled = step === 1;
//         if (step === totalSteps) {
//             nextBtn.textContent = "تاكيد الطلبية";
//         } else {
//             nextBtn.textContent = "التالي";
//             nextBtn.disabled = false;
//         }
//     }

//     prevBtn.addEventListener("click", () => {
//         if (currentStep > 1) {
//             currentStep--;
//             showStep(currentStep);
//         }
//     });

//     nextBtn.addEventListener("click", () => {
//         if (currentStep < totalSteps) {
//             currentStep++;
//             showStep(currentStep);
//         } else if (currentStep === totalSteps) {
//             alert("Order Confirmed!");
//             // You can also submit a form or perform other actions here
//         }
//     });

//     showStep(currentStep);
// });

document.addEventListener("DOMContentLoaded", function () {
  let currentStep = 1;
  const totalSteps = 4;
  const prevBtn = document. getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const packageDiv = document.getElementById("package");
  const documentDiv = document.getElementById("document");
  const tabContents = document.querySelectorAll(".tab-content");

  packageDiv.addEventListener("click", () => {
    packageDiv.classList.add("active")
    documentDiv.classList.remove("active")
  });

  documentDiv.addEventListener("click", () => {
    documentDiv.classList.add("active")
    packageDiv.classList.remove("active")
  });

  function showStep(step) {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    document.getElementById("tab-" + step).classList.add("active");

    prevBtn.disabled = step === 1;
    nextBtn.textContent = step === totalSteps ? "تأكيد الطلبية" : "التالي";
  }

  function getFormData() {
    const formData = new FormData(document.getElementById("multiStepForm"));
    const data = {
      sender: {},
      reciever: {},
      shipment: {},
    };

    formData.forEach((value, key) => {
      if (key.startsWith("sender_")) {
        data.sender[key.replace("sender_", "")] = value;
      } else if (key.startsWith("reciver_")) {
        data.reciever[key.replace("reciver_", "")] = value;
      } else {
        data.shipment[key] = value;
      }
    });

    return data;
  }

  nextBtn.addEventListener("click", function () {
    if (currentStep < totalSteps) {
      currentStep++;
      showStep(currentStep);
    } else {
      const data = getFormData();
      console.log("Form Data:", data);
      // Here you can handle form submission, e.g., sending data to a server
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  });

  showStep(currentStep);
});
