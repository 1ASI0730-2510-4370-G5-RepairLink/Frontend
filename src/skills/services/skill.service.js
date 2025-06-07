import httpInstance from "@/shared/services/http.instance.js";

export class SkillService {
    resourceEndpoint = import.meta.env.VITE_SKILLS_ENDPOINT_PATH;

    getAll() {
        return httpInstance.get(this.resourceEndpoint);
    }

    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }

    // Get skills by category (e.g., "Electronics", "Appliances")
    getByCategory(category) {
        return httpInstance.get(`${this.resourceEndpoint}/category/${encodeURIComponent(category)}`);
    }

    create(resource) {
        // Automatically add creation timestamp if not provided
        const payload = {
            ...resource,
            createdAt: resource.createdAt || new Date().toISOString()
        };
        return httpInstance.post(this.resourceEndpoint, payload);
    }

    update(id, resource) {
        return httpInstance.put(`${this.resourceEndpoint}/${id}`, resource);
    }

    delete(id) {
        return httpInstance.delete(`${this.resourceEndpoint}/${id}`);
    }

    // Search by skill name
    getByName(name) {
        return httpInstance.get(`${this.resourceEndpoint}/?name=${encodeURIComponent(name)}`);
    }
}