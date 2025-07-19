class ProjectController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.projects = [];

        this.projectForm = document.getElementById('project-form');
        this.projectForm.addEventListener('submit', this.handleFormSubmit.bind(this));
    }

    handleFormSubmit(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const migrationType = document.getElementById('migrationType').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const owner = document.getElementById('owner').value;
        const priority = document.getElementById('priority').value;
        const status = document.getElementById('status').value;

        const newProject = new this.model(
            Date.now(),
            name,
            description,
            migrationType,
            startDate,
            endDate,
            owner,
            priority,
            status
        );

        this.projects.push(newProject);
        this.view.renderProjects(this.projects);
        this.projectForm.reset();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const projectView = new ProjectView();
    const projectController = new ProjectController(Project, projectView);
});
