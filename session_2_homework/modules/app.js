import { Card } from "./card.js"

class App {
    $container;
    $title_container;
    $card_container;
    
    cards = [];

    constructor(app_title, data) {
        /*
            data structure : array<struct<question, answer>>
        */ 
        this.$container = document.createElement("div");
        this.$container.classList.add("app_container");

        this.$title_container = document.createElement("div");
        this.$title_container.classList.add("app__titlediv");

        let title = document.createElement("span");
        title.classList.add("app__titlespan")

        title.innerText = app_title;
        this.$title_container.appendChild(title);


        // card container
        this.$card_container = document.createElement("div");
        this.$card_container.classList.add("app__cardContainer");


        // Populate app with data
        for (let entry of data){
            let card = new Card(entry.question, entry.answer);
            this.cards.push(card);
            this.$card_container.appendChild(card.render());
        }
    }

    render = () => {
        this.$container.appendChild(this.$title_container);
        this.$container.appendChild(this.$card_container);

        return this.$container;
    }
}

export {
    App
}