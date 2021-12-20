class Card {
    $container;
    $question;
    $btn;
    $answer;

    status; // collapsed or expanded

    constructor(question, answer) {
        this.$container = document.createElement("div");
        this.$container.classList.add("card");

        // Question part : includes 2 div, question__text and question__btn (to show the answer)
        this.$question = document.createElement("div");
        this.$question.classList.add("card__question");
        
        // text div
        let question__text = document.createElement("div");
        question__text.classList.add("question__text");

        let question_span = document.createElement("span");
        question_span.innerText = question;
        question__text.appendChild(question_span);

        this.$question.appendChild(question__text);

        // btn div
        let question__btn = document.createElement("div");
        question__btn.classList.add("question__btn");

        this.$btn = document.createElement("button");
        this.$btn.classList.add("question__btnShow")
        this.$btn.innerText = "+"
        
        question__btn.appendChild(this.$btn);
        this.$question.appendChild(question__btn);


        // Answer
        this.$answer = document.createElement("div");
        this.$answer.classList.add("card__answer");
        let answer_span = document.createElement("span");
        answer_span.innerText = answer;
        this.$answer.appendChild(answer_span);
        this.$answer.style.display = "none"

        // Set default
        this.status = 0; // collapsed

        // Event handler for btn
        this.$btn.onclick = this.toggle_answer;
        
        
    }

    render = ()=>{
        this.$container.appendChild(this.$question);
        this.$container.appendChild(this.$answer);

        return this.$container;
    }

    toggle_answer = () => {
        
        if (this.$answer.style.display == "none") {
            this.$answer.style.setProperty("display", "flex");
            this.$btn.innerText = "-";
        } else {
            this.$answer.style.setProperty("display", "none");
            this.$btn.innerText = "+"

        }
            
    }

}


export { Card }