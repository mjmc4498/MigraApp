class StageView {
    constructor() {
        this.stageList = document.getElementById('stage-list');
    }

    renderStages(stages) {
        this.stageList.innerHTML = '';
        stages.forEach(stage => {
            const stageItem = document.createElement('li');
            stageItem.className = 'list-group-item';
            stageItem.innerHTML = `
                <div>
                    <strong>${stage.name}</strong>
                    <small class="d-block">Responsable: ${stage.owner}</small>
                    <small class="d-block">Fechas: ${stage.startDate} - ${stage.endDate}</small>
                </div>
                <div class="float-end">
                    <button class="btn btn-sm btn-warning" data-id="${stage.id}">Editar</button>
                    <button class="btn btn-sm btn-danger" data-id="${stage.id}">Eliminar</button>
                </div>
            `;
            this.stageList.appendChild(stageItem);
        });
    }
}
