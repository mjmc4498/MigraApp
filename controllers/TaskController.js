class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.tasks = [
            new model(1, 'Diseñar la base de datos', 'pendiente', 1),
            new model(2, 'Crear la API', 'en-progreso', 1),
        ];

        this.addEventListeners();
        document.getElementById('save-task').addEventListener('click', this.handleFormSubmit.bind(this));
        this.view.renderTasks(this.tasks);
    }

    addEventListeners() {
        document.getElementById('add-column-btn').addEventListener('click', this.addColumn.bind(this));
        this.view.addDragAndDropListeners(this.handleDrop.bind(this));
        this.view.kanbanBoard.addEventListener('click', this.handleTaskActions.bind(this));
    }

    handleTaskActions(event) {
        if (event.target.classList.contains('btn-danger')) {
            const taskId = parseInt(event.target.getAttribute('data-id'));
            this.deleteTask(taskId);
        }
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.view.renderTasks(this.tasks);
    }

    addColumn() {
        const columnName = prompt("Introduce el nombre del nuevo hito:");
        if (columnName) {
            this.view.addColumn(columnName);
            this.view.addDragAndDropListeners(this.handleDrop.bind(this));
        }
    }

    handleDragOver(event) {
        event.preventDefault();
    }

    handleDrop(event, newStatus) {
        event.preventDefault();
        const taskId = parseInt(event.dataTransfer.getData('text/plain'));
        this.updateTaskStatus(taskId, newStatus);
    }

    updateTaskStatus(id, newStatus) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.status = newStatus;
            this.view.renderTasks(this.tasks);
        }
    }

    handleFormSubmit() {
        const title = document.getElementById('task-title').value;
        if (title) {
            this.addTask(title, null); // stageId es null por ahora
            document.getElementById('task-title').value = '';
            const taskModal = bootstrap.Modal.getInstance(document.getElementById('task-modal'));
            taskModal.hide();
        }
    }

    addTask(title, stageId) {
        const newTask = new this.model(Date.now(), title, 'pendiente', stageId);
        this.tasks.push(newTask);
        this.view.renderTasks(this.tasks);
    }
}
