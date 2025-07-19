class RiskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.risks = [];

        this.riskForm = document.getElementById('risk-form');
        this.riskForm.addEventListener('submit', this.handleFormSubmit.bind(this));
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const description = document.getElementById('risk-description').value;
        const probability = document.getElementById('risk-probability').value;
        const impact = document.getElementById('risk-impact').value;
        this.addRisk(description, probability, impact);
        this.riskForm.reset();
    }

    addRisk(description, probability, impact) {
        const newRisk = new this.model(Date.now(), description, probability, impact);
        this.risks.push(newRisk);
        this.view.renderRisks(this.risks);
    }
}
