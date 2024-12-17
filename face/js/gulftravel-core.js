// header-footer
function OpenDropDown(element, type, dropdownlist,arrow) {
    const dropdown = element.querySelector(`.${dropdownlist}`);
    const dropdownarrow = element.querySelector(`.${arrow}`);
    if (dropdown) {
        dropdown.classList.toggle("hidden");
        dropdownarrow.classList.toggle("rotate-180");
    } else {
        console.error(`Dropdown with class '${dropdownlist}' not found inside element`, element);
    }
}
function HamburgerMenuAction(element , action){
    if(action == 'close'){
        element.closest(".hamburgermenu").classList.add("max-lg:-translate-x-full");
    }else if(action == 'open'){
        element.closest(".navbar").querySelector(".hamburgermenu").classList.remove("max-lg:-translate-x-full");
    }
}


document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault(); 
      const currentPath = window.location.pathname; 
      const defaultPage = '/'; 
      const defaultPageLang = '/EN'; 
      const targetId = this.getAttribute('data-target'); 

      if (currentPath !== defaultPage && currentPath !== defaultPageLang) {
        window.location.href = `${defaultPageLang}?scrollTo=${targetId}`;
      } else {
        scrollToSection(targetId);
      }
    });
  });
  
  function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'
      });
    }
  }
  const urlParams = new URLSearchParams(window.location.search);
  const scrollTo = urlParams.get('scrollTo');
  if (scrollTo) {
    scrollToSection(scrollTo);
  }

function handleNavigation(event ,{ defaultPage, targetId }) {
    event.preventDefault();
    const currentPath = window.location.pathname; 
      if (currentPath !== defaultPage) {
      window.location.href = `${defaultPage}?scrollTo=${targetId}`;
    } else {
      scrollToSection(targetId);
    }
  }
  

  function handleInitialScroll() {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get('scrollTo');
    if (scrollTo) {
      scrollToSection(scrollTo);
    }
  }
  
  
// header-footer
// default flight
document.addEventListener("DOMContentLoaded", function () {
    if(document.querySelector(".card-landing-flight")){
        document.querySelectorAll(".card-landing-flight").forEach(function (card) {
            card.addEventListener("click", function () {
              var departureId = card.querySelector("[name='departureid']");
              document.querySelector("#flightSearch .FCDid1").value = departureId ? departureId.value : "";
          
              var destinationId = card.querySelector("[name='destinationid']");
              document.querySelector("#flightSearch .FCDid2").value = destinationId ? destinationId.value : "";
          
              var departureNameCity = card.querySelector(".departure-name-city");
              document.querySelector("#flightSearch .FCD1").value = departureNameCity ? departureNameCity.textContent : "";
          
              var destinationNameCity = card.querySelector(".destination-name-city");
              document.querySelector("#flightSearch .FCD2").value = destinationNameCity ? destinationNameCity.textContent : "";
          
              // Scroll to the search box
              document.querySelector("#multi-flight").classList.add("hidden");
              document.querySelector("#flightSearch").classList.remove("hidden");
              var searchBox = document.querySelector("#searchbox");
              if (searchBox) {
                window.scrollTo({
                  top: searchBox.offsetTop,
                  behavior: "smooth",
                });
              }
            });
          });
    }
});
  
// default flight
// faq
function toggleFAQ(element) {
    element.closest("li").querySelector(".answer-box").classList.toggle("hidden")
    element.closest("li").querySelector(".arrow-faq").classList.toggle("rotate-45")
}
function loadfaqcategory( element , container){

    document.querySelectorAll('.faq-categories li').forEach(ele => {
        ele.classList.remove("bg-primary-100");
        ele.classList.remove("text-primary-700");
    });
    document.querySelectorAll('.faq-container .faq-list').forEach(ele => {
        ele.classList.add("hidden");
    });

    document.getElementById(container).classList.remove("hidden");
    element.classList.add("bg-primary-100");
    element.classList.add("text-primary-700");
}
// faq


/*------------------CURRENCY-----------------------*/
document.addEventListener("DOMContentLoaded", function () {
    localStorage_getCurrency();
 
    if (document.querySelector(".contain-currency-show")) {
        document.querySelector(".currency-selected").setAttribute("onclick", "");
    }
 
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.currency-selected,.currency-list')) {
            document.querySelector(".currency-list").classList.add("hidden");
        }
    });
 });
 
 function currency_selected(element) {
    if (!document.querySelector(".contain-currency")) {
        if (!document.querySelector(".contain-currency-show")) {
            let headerResize = element.closest("#header-resize");
            let currencySelected = headerResize.querySelector(".currency-selected");
 
            if (currencySelected.getAttribute("data-active") == 0) {
                headerResize.querySelector(".currency-loading").classList.toggle("hidden");
 
                fetch('/Client_Currency_Rate.bc')
                    .then(response => response.text())
                    .then(text => {
                        const data_currency = JSON.parse(text.replace(/\'/g, '"'));
                        let currencyList = headerResize.querySelector(".currency-list ul");
                        data_currency.rate.forEach(rate => {
                            let listItem = document.createElement("li");
                            listItem.setAttribute("data-cost", rate.rate_cost);
                            listItem.setAttribute("data-floatdigit", data_currency.floatdigit);
                            listItem.textContent = rate.rate_unit;
                            listItem.addEventListener("click", function () { select_currency(listItem); });
                            currencyList.appendChild(listItem);
                        });
 
                        headerResize.querySelector(".currency-loading").classList.toggle("hidden");
                        currencySelected.setAttribute("data-active", 1);
                        headerResize.querySelector(".currency-list").classList.toggle("hidden");
                    })
                    .catch(error => console.error(error));
            } else {
                headerResize.querySelector(".currency-list").classList.toggle("hidden");
            }
        }
    }
 }
 
 function select_currency(element) {
    let headerResize = element.closest("#header-resize");
    headerResize.querySelector(".currency-list").classList.toggle("hidden");
    headerResize.querySelector(".currency-selected").innerText = element.innerText;
    localStorage_setCurrency(
        element.innerText, 
        element.getAttribute("data-cost"), 
        element.getAttribute("data-floatdigit")
    );
 }
 
 function localStorage_setCurrency(currency_unit, currency_cost, floatdigit) {
    let currencyObject = {
        'currency_unit': currency_unit,
        'currency_cost': currency_cost,
        'floatdigit': floatdigit,
        'time': new Date().getTime(),
        'expire': 1200000,
    };
    localStorage.setItem('currencyObject', JSON.stringify(currencyObject));
    localStorage_getCurrency();
 }
 
 function localStorage_getCurrency() {
    let getCurrencyObject = localStorage.getItem('currencyObject');
    let jsonCurrency = JSON.parse(getCurrencyObject);
    
    if (jsonCurrency) {
        document.querySelector(".currency-selected").innerText = jsonCurrency.currency_unit;
 
        var timer = setInterval(function () {
            if (new Date().getTime() - jsonCurrency.time >= jsonCurrency.expire) {
                localStorage.removeItem('currencyObject');
                document.querySelector(".currency-selected").innerText = '--Select--';
                document.querySelector(".currency-selected").setAttribute("data-active", 0);
                clearInterval(timer);
                console.log('localStorage has expired');
            }
        }, 1000);
    }
 }
 /*------------------CURRENCY-----------------------*/

//  default js
function loadContentHomePage(){
    loadSearchEngine('search-engine.bc' , 'searchbox');
}

if(document.querySelector(".top-destinations")){
var swiper = new Swiper(".top-destinations", {
    slidesPerView: "auto",
        speed: 400,
      centeredSlides: true,
      spaceBetween: 10,
      grabCursor: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop:true,
      navigation: {
    nextEl: '.swiper-top-destinations-next',
    prevEl: '.swiper-top-destinations-prev',
  },
  });
const swiperContainer = document.querySelector('.top-destinations');
swiperContainer.addEventListener('mouseenter', () => {
swiper.autoplay.stop();
});
swiperContainer.addEventListener('mouseleave', () => {
swiper.autoplay.start();
});
}
// if(document.querySelector(".swiper-busy-cities")){
// const busycities = new Swiper('.swiper-busy-cities', {
// slidesPerView: 'auto',
// spaceBetween: 20,
// loop: true,
// allowTouchMove: false,
// centeredSlides: true,
// autoplay: {
// delay: 4000,
// disableOnInteraction: false,
// },
// navigation: {
//     nextEl: '.swiper-busy-cities-next',
//     prevEl: '.swiper-busy-cities-prev',
//   },
// });

// if (busycities.slides.length < 6) {
// busycities.params.loopAdditionalSlides = 6 - busycities.slides.length;
// busycities.update();
// }


// busycities.on('slideChange', () => {
// const activeIndex = busycities.realIndex; 
// const activeSlide = busycities.slides[activeIndex];


// const title = activeSlide.getAttribute('data-title');
// const text = activeSlide.getAttribute('data-text');
// const link = activeSlide.getAttribute('data-link');
// document.getElementById('title').innerText = title;
// document.getElementById('text').innerHTML = text;
// document.getElementById('bookinglink').setAttribute( "href" , link);
// });
// }

if (document.querySelector(".swiper-busy-cities")) {
    const busycities = new Swiper('.swiper-busy-cities', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      allowTouchMove: false,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-busy-cities-next',
        prevEl: '.swiper-busy-cities-prev',
      },
    });
  
    if (busycities.slides.length < 6) {
      busycities.params.loopAdditionalSlides = 6 - busycities.slides.length;
      busycities.update();
    }
  
    function updateSlideContent() {
      const activeSlide = busycities.slides[busycities.activeIndex];
      
      if (activeSlide) {
        const title = activeSlide.getAttribute('data-title') || '';
        const text = activeSlide.getAttribute('data-text') || '';
        const link = activeSlide.getAttribute('data-link') || '#';
  
        document.getElementById('title').innerText = title;
        document.getElementById('text').innerHTML = text;
        document.getElementById('bookinglink').setAttribute("href", link);
      }
    }
  
    busycities.on('slideChangeTransitionEnd', updateSlideContent);
    updateSlideContent();
  }
  

async function loadSearchEngine(url, sectionload) {
    try {
        var xhrobj = new XMLHttpRequest();
        xhrobj.open('GET', url);
        xhrobj.send();

        xhrobj.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var container = document.getElementById(sectionload);
                container.innerHTML = xhrobj.responseText;

                var scripts = container.getElementsByTagName("script");
                for (var i = 0; i < scripts.length; i++) {
                    var scriptTag = document.createElement("script");

                    if (scripts[i].src) {
                        scriptTag.src = scripts[i].src;
                        scriptTag.async = false; 
                    } else {
                        scriptTag.text = scripts[i].textContent;
                    }

                    document.head.appendChild(scriptTag).parentNode.removeChild(scriptTag);
                }
            }
        };
    } catch (error) {
    }

 }
//  default js
//  footer form
function uploadDocumentcontact(args) {
    const captcha = document.querySelector("#contact-form-footer").querySelector("#captchaContainercontact input[name='captcha']").value;
    const captchaid = document.querySelector("#contact-form-footer").querySelector("#captchaContainercontact input[name='captchaid']").value;
    const stringJson = JSON.stringify(args.source?.rows[0]);
    $bc.setSource("cms.uploadcontact", {
        value: stringJson,
        captcha: captcha,
        captchaid: captchaid,
        run: true
    });
};
function refreshCaptchacontact(e) {
    $bc.setSource("captcha2.refresh", true);
}

function captchaRenderedcontact() {
    document.getElementById("contact-form-footer").querySelector(".contactUsInput").placeholder = "Security Code";
}

async function OnProcessedEditObjectcontact(args) {
    var response = args.response;
    var json = await response.json();
    var errorid = json.errorid;
    if (errorid == "6") {
        document.getElementById("contact-form-footer").querySelector(".message-api").innerHTML = "Your request has been successfully registered";

        document.querySelector("#contact-form-footer .name-input > input").value = "";
        document.querySelector("#contact-form-footer .email-input > input").value = "";

        refreshCaptchacontact();

    } else {
        refreshCaptchacontact();

        document.querySelector("#contact-form-footer .name-input > input").value = "";
        document.querySelector("#contact-form-footer .email-input > input").value = "";

        setTimeout(() => {
            document.getElementById("contact-form-footer").querySelector(".message-api").innerHTML = "An error occurred, please try again";
        }, 2000);
    }

}

async function RenderFormContact() {
    document.querySelector("#contact-form-footer .name-input > input").placeholder = "Name";
    document.querySelector("#contact-form-footer .email-input > input").placeholder = "Email";
}
//  footer form
// about page
if(document.querySelector(".swiper-persons")){
    var swiper = new Swiper(".swiper-persons", {
        slidesPerView: "auto",
        speed: 400,
        spaceBetween: 7,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
    });
}
// about page



//  contact form
function uploadDocumentcontact2(args) {
    const captcha = document.querySelector("#contact-form-Contactpage").querySelector("#captchaContainercontact2 input[name='captcha']").value;
    const captchaid = document.querySelector("#contact-form-Contactpage").querySelector("#captchaContainercontact2 input[name='captchaid']").value;
    const stringJson = JSON.stringify(args.source?.rows[0]);
    $bc.setSource("cms.uploadcontact2", {
        value: stringJson,
        captcha: captcha,
        captchaid: captchaid,
        run: true
    });
};
function refreshCaptchacontact2(e) {
    $bc.setSource("captcha.refresh", true);
}

function captchaRenderedcontact2() {
    document.getElementById("contact-form-Contactpage").querySelector(".contactUsInput").placeholder = "Security Code";
}

async function OnProcessedEditObjectcontact2(args) {
    var response = args.response;
    var json = await response.json();
    var errorid = json.errorid;
    if (errorid == "6") {
        document.getElementById("contact-form-Contactpage").querySelector(".message-api").innerHTML = "Your request has been successfully registered";

        document.querySelector("#contact-form-Contactpage .name-input > input").value = "";
        document.querySelector("#contact-form-Contactpage .email-input > input").value = "";

        refreshCaptchacontact();

    } else {
        refreshCaptchacontact();

        document.querySelector("#contact-form-Contactpage .name-input > input").value = "";
        document.querySelector("#contact-form-Contactpage .email-input > input").value = "";

        setTimeout(() => {
            document.getElementById("contact-form-Contactpage").querySelector(".message-api").innerHTML = "An error occurred, please try again";
        }, 2000);
    }

}

async function RenderFormContact2() {
    document.querySelector("#contact-form-Contactpage .name-input > input").placeholder = "Name";
    document.querySelector("#contact-form-Contactpage .email-input > input").placeholder = "Email";
}
//  contact form


