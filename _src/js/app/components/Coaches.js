import $ from 'properjs-hobo';
import emitter from '../utils/emitter';

const SELECTORS = {
  COACH: '.js-coach',
  MODAL: '.js-modal',
  MODAL_CLOSE: '.js-modal-close',
  MODAL_LOADER: '.js-modal-loader',
  MODAL_CONTENT: '.js-modal-content',
  MODAL_HIDE: '-hide',
  ACTIVE: '-active',
};

export default class Coaches {
  constructor(coachWrapper) {
    this.coachArr = Array.from(document.querySelectorAll(SELECTORS.COACH));
    this.modal = document.querySelector(SELECTORS.MODAL);
    this.modalClose = document.querySelector(SELECTORS.MODAL_CLOSE);
    this.modalLoader = this.modal.querySelector(SELECTORS.MODAL_LOADER);
    this.modalContent = this.modal.querySelector(SELECTORS.MODAL_CONTENT);
    this.modalIsOpen = false;
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.coachArr.forEach(coach => {
      coach.addEventListener('click', event => {
        this.handleCoachClick(coach, event);
      });
    });
    this.modalClose.addEventListener('click', this.hideModal.bind(this));
  }

  handleCoachClick(coach, event) {
    const coachSlug = $(coach).data('coach');
    event.preventDefault();
    this.showModal();
    this.emptyModal();
    this.getXhr(coachSlug);
  }

  getXhr(coach) {
    $.ajax({
      url: `/coaches/${coach}`,
      dataType: 'html',
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
      .then(response => {
        this.fillModal(response);
      })
      .then(() => {
        emitter.fire('get-instances');
      })
      .catch(error => {
        console.warn('error', error);
      });
  }

  fillModal(data) {
    this.modalLoader.classList.remove(SELECTORS.ACTIVE);
    this.modalContent.innerHTML = data;
    this.modalContent.classList.add(SELECTORS.ACTIVE);
  }

  emptyModal() {
    this.modalContent.classList.remove(SELECTORS.ACTIVE);
    this.modalContent.innerHTML = '';
    this.modalLoader.classList.add(SELECTORS.ACTIVE);
  }

  showModal() {
    this.modal.classList.add(SELECTORS.ACTIVE);
    this.modalLoader.classList.add(SELECTORS.ACTIVE);
    this.modalIsOpen = true;
  }

  hideModal() {
    this.emptyModal();
    this.modal.classList.remove(SELECTORS.ACTIVE);
    this.modalLoader.classList.remove(SELECTORS.ACTIVE);
  }
}
