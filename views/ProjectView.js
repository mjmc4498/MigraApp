class ProjectView {
    constructor() {
        this.app = document.getElementById('app');
        this.projectList = document.getElementById('project-list');
    }

    renderProjects(projects) {
        this.projectList.innerHTML = '';
        projects.forEach(project => {
            const projectRow = document.createElement('tr');
            const statusClass = `status-${project.status.toLowerCase().replace(' ', '-')}`;
            projectRow.innerHTML = `
                <td>${project.name}</td>
                <td>${project.description}</td>
                <td>${project.migrationType}</td>
                <td>${project.startDate}</td>
                <td>${project.endDate}</td>
                <td>${project.owner}</td>
                <td>${project.priority}</td>
                <td><span class="badge ${statusClass}">${project.status}</span></td>
            `;
            this.projectList.appendChild(projectRow);
        });
    }
}
