export class Certification {
    constructor(id, userId, title, organization, issueDate, expiryDate, credentialId, verificationUrl) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.organization = organization;
        this.issueDate = issueDate;
        this.expiryDate = expiryDate;
        this.credentialId = credentialId;
        this.verificationUrl = verificationUrl;
        this.isVerified = false;
    }
}