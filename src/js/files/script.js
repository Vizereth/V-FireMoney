import { initMenu } from './menu.js';
import { initQuickFormSliders } from '../../modules/quick-form/initQuickFormSlider.js';
import { initQuestionCards } from './modules/initQuestionCards.js';

import './utilities.js';

window.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initQuickFormSliders();
  initQuestionCards();
});
