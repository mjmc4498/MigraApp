class ProjectController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.projects = [];

        this.projectForm = document.getElementById('project-form');
        this.projectForm.addEventListener('submit', this.handleFormSubmit.bind(this));
        this.view.projectList.addEventListener('click', this.handleProjectActions.bind(this));
    }

    handleProjectActions(event) {
        if (event.target.classList.contains('btn-danger')) {
            const projectId = parseInt(event.target.getAttribute('data-id'));
            this.deleteProject(projectId);
        }
    }

    deleteProject(id) {
        this.projects = this.projects.filter(project => project.id !== id);
        this.view.renderProjects(this.projects);
        if (this.deleteProjectCallback) {
            this.deleteProjectCallback();
        }
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

        if (this.addProjectCallback) {
            this.addProjectCallback();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const projectView = new ProjectView();
    const projectController = new ProjectController(Project, projectView);
    const dashboardView = new DashboardView();
    const dashboardController = new DashboardController(projectController.projects, dashboardView);
    const stageView = new StageView();
    const stageController = new StageController(Stage, stageView);
    const taskView = new TaskView();
    const taskController = new TaskController(Task, taskView);
    const riskView = new RiskView();
    const riskController = new RiskController(Risk, riskView);

    // Conectar controladores para que el dashboard pueda actualizar la lista de proyectos
    projectController.addProjectCallback = () => dashboardController.updateDashboard();
    projectController.deleteProjectCallback = () => dashboardController.updateDashboard();
});
