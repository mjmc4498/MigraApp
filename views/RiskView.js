class RiskView {
    constructor() {
        this.riskMatrix = document.getElementById('risk-matrix');
    }

    renderRisks(risks) {
        this.riskMatrix.innerHTML = '';
        risks.forEach(risk => {
            const riskRow = document.createElement('tr');
            const severity = risk.severity;
            let severityClass = '';

            if (severity === 'alta') severityClass = 'table-danger';
            if (severity === 'media') severityClass = 'table-warning';
            if (severity === 'baja') severityClass = 'table-success';

            riskRow.innerHTML = `
                <td>${risk.description}</td>
                <td>${risk.probability}</td>
                <td>${risk.impact}</td>
                <td class="${severityClass}">${severity}</td>
            `;
            this.riskMatrix.appendChild(riskRow);
        });
    }
}
