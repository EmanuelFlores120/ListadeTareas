document.getElementById('formTarea').addEventListener('submit', function(e) {
    e.preventDefault();
    const tareaInput = document.getElementById('tareaInput');
    const tarea = tareaInput.value.trim();
    if (tarea !== '') {
        const listaTareas = document.getElementById('listaTareas');
        const nuevaTarea = document.createElement('li');
        nuevaTarea.className = 'list-group-item d-flex justify-content-between align-items-center';
        nuevaTarea.innerHTML = `${tarea}<button class="btn btn-danger btn-sm ml-2"><i class="fas fa-trash"></i></button>`;
        listaTareas.appendChild(nuevaTarea);
        tareaInput.value = '';
    }
});

document.getElementById('listaTareas').addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-danger')) {
        e.target.parentElement.remove();
    }
});
