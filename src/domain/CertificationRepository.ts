import { Certification } from "./Certification";

export interface CertificationRepository {
	search(): Certification[];
}
