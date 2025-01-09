// Array to hold data
let data = [];

// Function to create a new item
function createData() {
    const nameInput = document.getElementById('inputName');
    const name = nameInput.value;

    if (name) {
        // Add a new item to the array
        const newItem = { id: Date.now(), name: name };
        data.push(newItem);

        // Update the display
        displayData();

        // Clear the input field
        nameInput.value = '';
    }
}

// Function to display the list of items
function displayData() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Clear the current list

    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;

        // Create Update and Delete buttons
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.onclick = () => updateData(item.id);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteData(item.id);

        // Append buttons to the list item
        li.appendChild(updateButton);
        li.appendChild(deleteButton);

        // Append the list item to the list
        itemList.appendChild(li);
    });
}

// Function to update an item
function updateData(id) {
    const newName = prompt('Enter the new name:');
    if (newName) {
        const item = data.find(item => item.id === id);
        if (item) {
            item.name = newName;
            displayData();  // Re-render the list with updated data
        }
    }
}

// Function to delete an item
function deleteData(id) {
    data = data.filter(item => item.id !== id);
    displayData();  // Re-render the list without the deleted item
}
