class Stage {
    constructor(id, name, owner, startDate, endDate, projectId) {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.startDate = startDate;
        this.endDate = endDate;
        this.projectId = projectId; // Para saber a qué proyecto pertenece
    }
}
