const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('#list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const task = input.value;
  if (task) {
    const li = document.createElement('li');
    li.textContent = task;
    li.addEventListener('click', function() {
      li.classList.toggle('completed');
    });
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function(event) {
      event.stopPropagation();
      list.removeChild(li);
    });
    li.appendChild(deleteButton);
    list.appendChild(li);
    input.value = '';
  }
});