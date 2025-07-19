class RiskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.risks = [];

        // Aquí se añadiría un formulario para crear riesgos
    }

    addRisk(description, probability, impact) {
        const newRisk = new this.model(Date.now(), description, probability, impact);
        this.risks.push(newRisk);
        this.view.renderRisks(this.risks);
    }
}
