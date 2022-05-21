import { QuestionCard } from "../../../modules/question-card/QuestionCard.js";

const initQuestionCards = () => {
    const cards = document.querySelectorAll(".question-card");

    if (!cards) return;

    cards.forEach((item) => {
        const question = new QuestionCard(item);
        question.init();
    })
};

export { initQuestionCards };
