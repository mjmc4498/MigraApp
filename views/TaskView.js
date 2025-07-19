class TaskView {
    constructor() {
        this.kanbanBoard = document.getElementById('kanban-board');
        this.pendingColumn = document.getElementById('task-pending');
        this.inProgressColumn = document.getElementById('task-in-progress');
        this.completedColumn = document.getElementById('task-completed');
    }

    addColumn(name) {
        const column = document.createElement('div');
        column.className = 'col';
        column.innerHTML = `
            <h4>${name}</h4>
            <div class="kanban-column" data-status="${name.toLowerCase()}"></div>
        `;
        this.kanbanBoard.appendChild(column);
    }

    addDragAndDropListeners(dropHandler) {
        const columns = document.querySelectorAll('.kanban-column');
        columns.forEach(col => {
            col.addEventListener('dragover', e => e.preventDefault());
            col.addEventListener('drop', e => {
                const status = col.getAttribute('data-status');
                dropHandler(e, status);
            });
        });
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
            taskCard.addEventListener('dragstart', this.handleDragStart);
            taskCard.innerHTML = `
                <div class="card-body">
                    <h6 class="card-title">${task.title}</h6>
                    <p class="card-text"><small>Prioridad: Alta</small></p>
                    <button class="btn btn-sm btn-danger float-end" data-id="${task.id}">X</button>
                </div>
            `;

            const column = document.querySelector(`.kanban-column[data-status="${task.status}"]`);
            if (column) {
                column.appendChild(taskCard);
            } else if (task.status === 'pendiente') {
                this.pendingColumn.appendChild(taskCard);
            } else if (task.status === 'en-progreso') {
                this.inProgressColumn.appendChild(taskCard);
            } else {
                this.completedColumn.appendChild(taskCard);
            }
        });
    }

    handleDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.getAttribute('data-id'));
    }
}
