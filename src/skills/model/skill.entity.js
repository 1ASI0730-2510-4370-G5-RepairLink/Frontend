export class Skill {
    constructor(id, name, description, category, createdAt) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.createdAt = createdAt || new Date().toISOString();  // Creation timestamp
    }
}


