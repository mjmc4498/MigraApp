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
        const newStage = new this.model(Date.now(), stageName, null); // projectId es null por ahora
        this.stages.push(newStage);
        this.view.renderStages(this.stages);
        this.stageForm.reset();
    }

    handleStageActions(event) {
        if (event.target.classList.contains('btn-danger')) {
            const stageId = parseInt(event.target.getAttribute('data-id'));
            this.deleteStage(stageId);
        }
    }

    deleteStage(id) {
        this.stages = this.stages.filter(stage => stage.id !== id);
        this.view.renderStages(this.stages);
    }
}
