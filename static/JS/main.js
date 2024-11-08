/*================ Btn bages method ================*/

$(document).ready(function () {
  $("#login_btn, #discover_btn, #Allproducts_Btn, #anotherprod_btn").on(
    "click",
    function () {
      var page = "";
      switch ($(this).attr("id")) {
        case "login_btn":
          page = "Log In.html";
          break;
        case "discover_btn":
          page = "About Us.html";
          break;
        case "anotherprod_btn":
          page = "Other Products.html";
          break;
        default:
          page = "Contact Us.html";
      }
      window.location.href = page;
    }
  );
});

/*============== Dropdown menu products filter ==============*/

// Get all dropdowns from the document
const dropdowns = document.querySelectorAll(".dropdown");

// Loop through all dropdown elements
dropdowns.forEach((dropdown) => {
  // Get inner elements from each dropdown
  const caret = dropdown.querySelector(".dropdown_arrow");
  const menu = dropdown.querySelector(".dropdown_items");
  const headavtive = dropdown.querySelector(".dropdown a");

  // Add a click event to the dropdown anchor tag
  dropdown.addEventListener("click", () => {
    // Toggle the open class on the dropdown items
    caret.classList.toggle("dropdown_arrow_rotate");
    menu.classList.toggle("open");
    headavtive.classList.toggle("active");
  });
});

/*============== Track shipment container display ==============*/

document.addEventListener("DOMContentLoaded", function () {
  const trackButton = document.getElementById("track");
  const trackInputContainer = document.querySelector(".trackinput_container");

  // Add click event listener to the track button
  trackButton.addEventListener("click", function (e) {
    e.preventDefault();
    // Toggle the 'active' class on the track button
    trackButton.classList.toggle("active");
    // Toggle the 'active' class on the track input container
    trackInputContainer.classList.toggle("active");
  });

  // Add click event listener to the document
  document.addEventListener("click", function (e) {
    // Check if the clicked element is not the track button or track input container
    if (
      !e.target.matches("#track") &&
      !e.target.closest(".trackinput_container")
    ) {
      // Remove the 'active' class from the track button and track input container
      trackButton.classList.remove("active");
    }
  });
});

/*============== scroll reveal ==============*/

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(
    ".reveal , .reveal_right , .reveal_left , .reveal_top , .Nav_container"
  );
  /*

    for(var i=0; i<reveals.length; i++){

        var windowheigh = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheigh - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }        */

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint;

    // Adjust revealPoint for different screen sizes
    if (window.innerWidth <= 250) {
      revealPoint = 80; // For phone screens
    } else if (window.innerWidth >= 450 && window.innerWidth <= 1024) {
      revealPoint = 110; // For tablet screens
    } else {
      revealPoint = 150; // For larger screens
    }

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

/*============== scroll Up ==============*/

let span = document.querySelector(".up");

window.onscroll = function () {
  if (this.scrollY >= 400) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/*============== media nav ==============*/

function toggleMobileMenu(menu) {
  if (menu.classList.toggle("open")) {
    sidemenu.style.right = "0";
  } else {
    sidemenu.style.right = "-300px";
  }
}

//===================price calculater

const cities = {
  C: {
    en: "Cairo",
    ar: "القاهرة",
  },
  ALX: {
    en: "Alexandria",
    ar: "الإسكندرية",
  },
  PTS: {
    en: "Port Said",
    ar: "بورسعيد",
  },
  SUZ: {
    en: "Suez",
    ar: "السويس",
  },
  IS: {
    en: "Ismailia",
    ar: "الإسماعيلية",
  },
  DT: {
    en: "Damietta",
    ar: "دمياط",
  },
  DK: {
    en: "Dakahlia",
    ar: "الدقهلية",
  },
  SHR: {
    en: "Sharqia",
    ar: "الشرقية",
  },
  KB: {
    en: "Qalyubia",
    ar: "القليوبية",
  },
  GH: {
    en: "Gharbia",
    ar: "الغربية",
  },
  KFS: {
    en: "Kafr El Sheikh",
    ar: "كفر الشيخ",
  },
  MNF: {
    en: "Monufia",
    ar: "المنوفية",
  },
  BH: {
    en: "Beheira",
    ar: "البحيرة",
  },
  GZ: {
    en: "Giza",
    ar: "الجيزة",
  },
  BNS: {
    en: "Beni Suef",
    ar: "بني سويف",
  },
  FYM: {
    en: "Fayoum",
    ar: "الفيوم",
  },
  MN: {
    en: "Minya",
    ar: "المنيا",
  },
  AST: {
    en: "Assiut",
    ar: "أسيوط",
  },
  SHG: {
    en: "Sohag",
    ar: "سوهاج",
  },
  KN: {
    en: "Qena",
    ar: "قنا",
  },
  LX: {
    en: "Luxor",
    ar: "الأقصر",
  },
  ASN: {
    en: "Aswan",
    ar: "أسوان",
  },
  BA: {
    en: "Red Sea",
    ar: "البحر الأحمر",
  },
  WAD: {
    en: "New Valley",
    ar: "الوادي الجديد",
  },
  MT: {
    en: "Matrouh",
    ar: "مطروح",
  },
  JS: {
    en: "JS",
    ar: "جنوب سيناء",
  },
  MNS: {
    en: "Mansoura",
    ar: "المنصورة",
  },
  HLW: {
    en: "Helwan",
    ar: "حلوان",
  },
  OCT: {
    en: "6 October",
    ar: "6 أكتوبر",
  },
};
const selectElements = document.querySelectorAll('.city_select')

selectElements.forEach((selectElement, i) => {
  for (const key in cities) {
    if (cities.hasOwnProperty(key)) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = cities[key].ar; // Use Arabic names

      selectElement.appendChild(option);
    }
  }
});

// News swiper
const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 1,
  spaceBetween: 100,
  // Optional parameters
  direction: "horizontal",
  // If we need pagination
  pagination: {
    el: ".swiper-pagination2",
    dynamicBullets: true,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },

  // And if we need scrollbar

  breakpoints: {
    530: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: -20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});
