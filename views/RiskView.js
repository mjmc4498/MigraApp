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
                <td>
                    <button class="btn btn-sm btn-warning" data-id="${risk.id}">Editar</button>
                    <button class="btn btn-sm btn-danger" data-id="${risk.id}">Eliminar</button>
                </td>
            `;
            this.riskMatrix.appendChild(riskRow);
        });
    }
}
