import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const initQuickFormSliders = () => {
  const initLoanSlider = (parent) => {
    const loanSlider = parent.querySelector('.quick-form__loan-slider');

    const sliderOptions = {
      start: 65000,
      step: 1000,
      connect: 'lower',
      tooltips: [wNumb({suffix: ' ₽', decimals: 0, thousand: " "})],
      range: {
        min: [1000],
        max: [100000],
      },
    };

    noUiSlider.create(loanSlider, sliderOptions);
  };

  const initTimeSlider = (parent) => {
    const timeSlider = parent.querySelector('.quick-form__time-slider');

    const sliderOptions = {
        start: 8,
        step: 1,
        connect: 'lower',
        tooltips: [wNumb({suffix: ' дней', decimals: 0})],
        range: {
          min: [3],
          max: [30],
        },
      };
  
      noUiSlider.create(timeSlider, sliderOptions);
  };

  const form = document.querySelector('.quick-form');

  if (!form) return;

  initLoanSlider(form);
  initTimeSlider(form);
};

export { initQuickFormSliders };
