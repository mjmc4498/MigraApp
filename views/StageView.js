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
                ${stage.name}
                <button class="btn btn-sm btn-danger float-end" data-id="${stage.id}">Eliminar</button>
            `;
            this.stageList.appendChild(stageItem);
        });
    }
}
