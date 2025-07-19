class App {
    constructor() {
        this.projects = [];
        this.stages = [];
        this.tasks = [];
        this.risks = [];
        this.users = [];
    }

    // Métodos para gestionar el estado de la aplicación
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();

    const projectView = new ProjectView();
    const projectController = new ProjectController(app, projectView);

    const dashboardView = new DashboardView();
    const dashboardController = new DashboardController(app, dashboardView);

    const stageView = new StageView();
    const stageController = new StageController(app, stageView);

    const taskView = new TaskView();
    const taskController = new TaskController(app, taskView);

    const riskView = new RiskView();
    const riskController = new RiskController(app, riskView);

    // ... y así sucesivamente para los demás controladores
});
