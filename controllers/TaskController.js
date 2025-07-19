class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.tasks = [];

        // Aquí se añadiría un formulario para crear tareas
    }

    addTask(title, stageId) {
        const newTask = new this.model(Date.now(), title, 'pendiente', stageId);
        this.tasks.push(newTask);
        this.view.renderTasks(this.tasks);
    }
}
