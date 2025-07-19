class Task {
    constructor(id, title, status, stageId) {
        this.id = id;
        this.title = title;
        this.status = status; // pendiente, en-progreso, completado
        this.stageId = stageId;
    }
}
