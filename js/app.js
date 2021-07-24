document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript Loaded');

    const form = document.querySelector('#new-adventurer-form');
    form.addEventListener('submit', handleFormSubmit);
});

const handleFormSubmit = function (event) {
    event.preventDefault();

    const newAdventurer = document.createElement('li');
    const list = document.querySelector('#adventurer-roster');
    newAdventurer.className = "adventurer";
    list.appendChild(newAdventurer);
    
    const name = document.createElement('h3');
    name.textContent = event.target.adventurer_name.value;
    newAdventurer.appendChild(name);

    const adventurer_class = document.createElement('h4');
    adventurer_class.textContent = event.target.adventurer_class.value;
    newAdventurer.appendChild(adventurer_class);

    const contract = document.createElement('p');
    contract.textContent = event.target.contract.value;
    newAdventurer.appendChild(contract);
    
    event.target.reset();
}