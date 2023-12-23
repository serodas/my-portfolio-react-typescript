import { certifications } from "../certifications";
import { CertificationRepository } from "../domain/CertificationRepository";

export class InMemoryCertificationRepository implements CertificationRepository {
	search(): typeof certifications {
		return certifications;
	}
}
