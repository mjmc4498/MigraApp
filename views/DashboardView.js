class DashboardView {
    constructor() {
        this.activeProjects = document.getElementById('active-projects');
    }

    updateActiveProjects(count) {
        this.activeProjects.textContent = count;
    }
}
