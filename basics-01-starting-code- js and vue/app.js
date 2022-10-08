Vue.createApp({
    data(){
        return{
            goals: [],
            enteredValue: ''
        };
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app')  // Where it should be upload;


// Imperative version 

// const butElem = document.querySelector('button');
// const input = document.querySelector('input');
// const listElem = document.querySelector('ul');



// function addGoal(){
//     const enteredValue = input.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listElem.appendChild(listItemEl);
//     input.value = '';
// }

// butElem.addEventListener('click', addGoal);