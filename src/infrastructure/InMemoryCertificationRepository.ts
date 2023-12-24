import { certifications } from "../certifications";
import { Certification } from "../domain/Certification";
import { CertificationRepository } from "../domain/CertificationRepository";

export class InMemoryCertificationRepository implements CertificationRepository {
	search(): Certification[] {
		return certifications;
	}
}
