class TaskView {
    constructor() {
        this.pendingColumn = document.getElementById('task-pending');
        this.inProgressColumn = document.getElementById('task-in-progress');
        this.completedColumn = document.getElementById('task-completed');
    }

    renderTasks(tasks) {
        this.pendingColumn.innerHTML = '';
        this.inProgressColumn.innerHTML = '';
        this.completedColumn.innerHTML = '';

        tasks.forEach(task => {
            const taskCard = document.createElement('div');
            taskCard.className = 'card mb-2';
            taskCard.setAttribute('draggable', 'true');
            taskCard.setAttribute('data-id', task.id);
            taskCard.innerHTML = `
                <div class="card-body">
                    ${task.title}
                </div>
            `;

            if (task.status === 'pendiente') {
                this.pendingColumn.appendChild(taskCard);
            } else if (task.status === 'en-progreso') {
                this.inProgressColumn.appendChild(taskCard);
            } else {
                this.completedColumn.appendChild(taskCard);
            }
        });
    }
}
