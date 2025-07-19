class StageController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.stages = [];

        this.stageForm = document.getElementById('stage-form');
        this.stageForm.addEventListener('submit', this.handleFormSubmit.bind(this));
        this.view.stageList.addEventListener('click', this.handleStageActions.bind(this));
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const stageName = document.getElementById('stage-name').value;
        const stageOwner = document.getElementById('stage-owner').value;
        const startDate = document.getElementById('stage-start-date').value;
        const endDate = document.getElementById('stage-end-date').value;
        const newStage = new this.model(Date.now(), stageName, stageOwner, startDate, endDate, 1); // projectId=1 (simulado)
        this.stages.push(newStage);
        this.view.renderStages(this.stages);
        this.stageForm.reset();
    }

    handleStageActions(event) {
        if (event.target.classList.contains('btn-danger')) {
            const stageId = parseInt(event.target.getAttribute('data-id'));
            this.deleteStage(stageId);
        } else if (event.target.classList.contains('btn-warning')) {
            const stageId = parseInt(event.target.getAttribute('data-id'));
            this.editStage(stageId);
        }
    }

    editStage(id) {
        const stage = this.stages.find(s => s.id === id);
        if (stage) {
            // Llenar el modal con la información de la etapa
            const modalBody = document.querySelector('#edit-modal .modal-body');
            modalBody.innerHTML = `
                <p>Editando la etapa: ${stage.name}</p>
                <!-- Aquí iría el formulario de edición -->
            `;
            const editModal = new bootstrap.Modal(document.getElementById('edit-modal'));
            editModal.show();
        }
    }

    deleteStage(id) {
        this.stages = this.stages.filter(stage => stage.id !== id);
        this.view.renderStages(this.stages);
    }
}
