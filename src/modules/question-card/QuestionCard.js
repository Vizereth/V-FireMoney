class QuestionCard {
  constructor(el) {
    this.el = el;
    this.headerEl = this.el.querySelector(".question-card__header") || null;
    this.textEl = this.el.querySelector('.question-card__text') || null;
  }

  init() {
    if (!this.textEl || !this.headerEl) return;

    this.headerEl.addEventListener('click', () => this.onClickHandler());
  }

  onClickHandler() {
    if (!this.el.classList.contains('question-card--active')) {
      this.addActiveClass();
      this.addTextHeight();
    } else {
      this.removeActiveClass();
      this.removeTextHeight();
    }
  }

  addActiveClass() {
    this.el.classList.add('question-card--active');
  }

  removeActiveClass() {
    this.el.classList.remove('question-card--active');
  }

  addTextHeight() {
    this.textEl.style.maxHeight = `${this.textEl.scrollHeight}px`;
  }

  removeTextHeight() {
    this.textEl.style.maxHeight = `0`;
  }
}

export { QuestionCard };
