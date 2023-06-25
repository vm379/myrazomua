import { el, els, ev } from "./functions.js";

const mobileMenuBtn = el('.mobile-menu-btn');
const mobileMenuNav = el('.mobile-menu-nav');

ev(mobileMenuBtn, 'click', mobileMenuSwitcher);

function mobileMenuSwitcher() {

    if (mobileMenuBtn.classList.contains('opened')) {
        mobileMenuBtn.classList.remove('opened');
    } else {
        mobileMenuBtn.classList.add('opened');
    }

    if (mobileMenuNav.classList.contains('opened')) {
        mobileMenuNav.classList.remove('opened');

    } else {
        mobileMenuNav.classList.add('opened');
    }
}