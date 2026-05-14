const searchInput = document.getElementById('searchInput');
const tasks = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();

    tasks.forEach((task) => {
        const taskTitle = task.querySelector('h3')
        .textContent
        .toLowerCase();

        if(taskTitle.includes(searchValue)) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
});

