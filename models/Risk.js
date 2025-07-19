class Risk {
    constructor(id, description, probability, impact) {
        this.id = id;
        this.description = description;
        this.probability = probability; // baja, media, alta
        this.impact = impact; // bajo, medio, alto
    }

    get severity() {
        const p = this.probability === 'alta' ? 3 : this.probability === 'media' ? 2 : 1;
        const i = this.impact === 'alto' ? 3 : this.impact === 'medio' ? 2 : 1;
        const s = p * i;

        if (s >= 6) return 'alta';
        if (s >= 3) return 'media';
        return 'baja';
    }
}
