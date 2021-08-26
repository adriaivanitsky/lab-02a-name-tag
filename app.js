//get element that holds the nametag name
const nameElement = document.getElementById('name');
//get the button
const updateButton = document.getElementById('update-button');
//get the input
const nameInput = document.getElementById('name-input');


//user clicks on the button
updateButton.addEventListener('click', () => {

    //get the text in the input

    const name = nameInput.value;
    //update the name element with the text
    nameElement.textContent = name;

    const greenButton = document.getElementById('green');

    greenButton.addEventListener('click', () => {
        document.getElementById('id').style.backgroundColor = 'green';

    });
   
});