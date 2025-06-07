import httpInstance from "@/shared/services/http.instance.js";

export class CertificationService {
    resourceEndpoint = import.meta.env.VITE_CERTIFICATIONS_ENDPOINT_PATH;

    getAll() {
        return httpInstance.get(this.resourceEndpoint);
    }

    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }

    // New method: Get certifications by user ID
    getByUserId(userId) {
        return httpInstance.get(`${this.resourceEndpoint}/user/${userId}`);
    }

    create(resource) {
        // Ensure isVerified is set to false for new certifications
        const payload = {
            ...resource,
            isVerified: false
        };
        return httpInstance.post(this.resourceEndpoint, payload);
    }

    update(id, resource) {
        return httpInstance.put(`${this.resourceEndpoint}/${id}`, resource);
    }

    delete(id) {
        return httpInstance.delete(`${this.resourceEndpoint}/${id}`);
    }

}