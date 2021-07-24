document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript Loaded');

    const form = document.querySelector('#new-adventurer-form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteAllButton = document.querySelector('#delete_all')
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
    
});

const handleFormSubmit = function (event) {
    event.preventDefault();

    const newAdventurer = document.createElement('li');
    const list = document.querySelector('#adventurer-roster');
    const adventurer_css_id = "adventurer_" + event.target.adventurer_class.value;
    newAdventurer.id = adventurer_css_id;
    newAdventurer.className = "adventurer";
    list.appendChild(newAdventurer);

    const name = document.createElement('h3');
    name.className = "adventurer_name"
    name.textContent = `Name: ${event.target.adventurer_name.value}`;
    newAdventurer.appendChild(name);

    const adventurer_class_details = document.createElement('div');
    adventurer_class_details.className = "adventurer_class_details"
    newAdventurer.appendChild(adventurer_class_details);

    const adventurer_class = document.createElement('h4');
    adventurer_class.textContent = event.target.adventurer_class.value;
    adventurer_class_details.appendChild(adventurer_class);

    const image = document.createElement('img');
    image.className = "adventurer_image";
    image.alt = adventurer_css_id;
    image.width = "55";
    image.height = "55";
    const image_source = "static/images/" + event.target.adventurer_class.value + ".jpeg";
    image.src = image_source;
    adventurer_class_details.appendChild(image);

    const fighting_style = document.createElement('p');
    fighting_style.textContent = `Figthing Style: ${event.target.fighting_style.value}`;
    newAdventurer.appendChild(fighting_style);

    const contract = document.createElement('p');
    contract.textContent = `Initiation Contract: ${event.target.contract.value}`;
    newAdventurer.appendChild(contract);
    
    event.target.reset();
}

const handleDeleteAllClick = function (event) {
    event.preventDefault();

    const adventurer_roster = document.querySelector('#adventurer-roster');
    adventurer_roster.innerHTML = '';
}