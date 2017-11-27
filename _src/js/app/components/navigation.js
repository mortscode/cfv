const SELECTORS = {
  TOGGLE_TRIGGER: '.js-toggle-nav',
};

export default class Navigation {
  constructor(navWrapper) {
    this.navWrapper = navWrapper;
    this.toggleTrigger = this.navWrapper.querySelector(
      SELECTORS.TOGGLE_TRIGGER,
    );
    this.navIsOpen = false;
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.toggleTrigger.addEventListener('click', this.handleToggle.bind(this));
  }

  handleToggle() {
    this.navIsOpen ? this.closeNav() : this.openNav();
  }

  openNav() {
    this.navWrapper.classList.add('-active');
    this.toggleTrigger.classList.add('-close');
    this.navIsOpen = true;
  }

  closeNav() {
    this.navWrapper.classList.remove('-active');
    this.toggleTrigger.classList.remove('-close');
    this.navIsOpen = false;
  }
}
