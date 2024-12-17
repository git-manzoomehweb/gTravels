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
// header-footer

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

    console.log(container)
    document.getElementById(container).classList.remove("hidden");
    element.classList.add("bg-primary-100");
    element.classList.add("text-primary-700");
}
// faq
