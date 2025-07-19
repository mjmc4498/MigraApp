class DashboardController {
    constructor(projects, view) {
        this.projects = projects;
        this.view = view;
        this.migrationFilter = document.getElementById('migration-filter');

        this.updateDashboard();
        this.migrationFilter.addEventListener('change', this.filterProjects.bind(this));
    }

    updateDashboard() {
        const activeProjects = this.projects.filter(p => p.status !== 'completado').length;
        this.view.updateActiveProjects(activeProjects);
    }

    filterProjects() {
        const filterValue = this.migrationFilter.value;
        const filteredProjects = filterValue === 'all'
            ? this.projects
            : this.projects.filter(p => p.migrationType === filterValue);

        // Actualizar la vista de proyectos (requiere comunicación con ProjectController)
        // Por ahora, solo mostraremos el filtro en la consola.
        console.log(filteredProjects);
    }
}
