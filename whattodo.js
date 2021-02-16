
let day = document.getElementById("days");
let but = document.getElementById("reset-button");
let display = document.getElementById("display");
let listItemOne = document.getElementById("listitemone");


class Day { //Day is a class name 
    constructor(elem) { // constructor accepts one argument- eleme
        this._elem = elem; // this refers to an instance of that class, setting the value of the Day instances element property to the element paramater;
        elem.onclick = this.onClick.bind(this);

    }
    monday() {
        document.getElementById("listitemone").innerHTML = " Walk the dog";
        document.getElementById("listitemtwo").innerHTML = "Go for a run";
        document.getElementById("listitemthree").innerHTML = "Meal prep for the week";
        style()
    }

    tuesday() {

        document.getElementById("listitemone").innerHTML = "Walk the dog";
        document.getElementById("listitemtwo").innerHTML = "Go to the gym";
        document.getElementById("listitemthree").innerHTML = "Study for at least 2 hours";
        style();
    }
    wednesday() {
        document.getElementById("listitemone").innerHTML = "Do some yoga";
        document.getElementById("listitemtwo").innerHTML = "Do some journaling";
        document.getElementById("listitemthree").innerHTML = "Relax in the evening, get over the mid week hump";
        style();
    }
    thursday() {
        document.getElementById("listitemone").innerHTML = "Walk and wash the dog";
        document.getElementById("listitemtwo").innerHTML = "Do some painting";
        document.getElementById("listitemthree").innerHTML = "Catch up o any outstanding work";
        style();
    }
    friday() {

        document.getElementById("listitemone").innerHTML = "Go food shopping";
        document.getElementById("listitemtwo").innerHTML = "Watch a movie";
        document.getElementById("listitemthree").innerHTML = "Have a bath";
        style()

    }
    saturday() {
        document.getElementById("listitemone").innerHTML = "Do the housework";
        document.getElementById("listitemtwo").innerHTML = "Wash and iron clothes";
        document.getElementById("listitemthree").innerHTML = "";
        style()
    }
    sunday() {

        document.getElementById("listitemone").innerHTML = "RELAX ITS A SUNDAY";
        document.getElementById("listitemtwo").innerHTML = "";
        document.getElementById("listitemthree").innerHTML = "";
        style()
    }



    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]()
        }
    }
};


new Day(day);



let style = () => {
    display.style.fontSize = '3rem';
    display.style.backgroundColor = 'white'
    display.style.display = 'block';
    listItemOne.style.listStyleType='circle';
    display.style.textAlign ="center";
}




let reset = () => {
    display.style.display = 'none';


};



but.addEventListener('click', reset);
