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
                <td>
                    <button class="btn btn-sm btn-warning" data-id="${project.id}">Editar</button>
                    <button class="btn btn-sm btn-danger" data-id="${project.id}">Eliminar</button>
                </td>
            `;
            this.projectList.appendChild(projectRow);
        });
    }
}
