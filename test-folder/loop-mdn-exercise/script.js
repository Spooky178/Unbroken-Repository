const unorderedList = document.querySelector('ul');
const inputElement = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function(event){
    event.preventDefault();
    let inputValue = inputElement.value;
    if (inputValue === '') {
        alert('Please enter a value');
        inputElement.focus();
        return;
    }
    inputElement.value = '';
    
    let listItem = document.createElement(`li`);
    let span = document.createElement(`span`)
    let deleteBtn = document.createElement(`button`);
    deleteBtn.textContent = `Delete`
    span.textContent =inputValue;
    // add the span and button as children of the list item
    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);

    unorderedList.appendChild(listItem);
    // remove the list item when the delete button is clicked
    deleteBtn.addEventListener('click', function(){
        unorderedList.removeChild(listItem);
        
    })
    inputElement.focus();
})
