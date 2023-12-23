import { Certification } from "../../domain/Certification";
import styles from "./CertificationCard.module.scss";
import { CertificationIcon } from "./CertificationIcon";

export const CertificationCard = ({ certification }: { certification: Certification }) => {
	return (
		<article className={styles.certification_card}>
			<figure>
				<CertificationIcon icon={certification.icon} />
			</figure>
			<div className={styles.certification_text_container}>
				<h2 className={styles.certification_text__title}>
					<a href={certification.link}>{certification.title}</a>
				</h2>
				<p className={styles.certification_text__subtitle}>{certification.issued_by}</p>
				<p className={styles.certification_text__subtitle}>{certification.issued_on}</p>
				<p className={styles.certification_text__subtitle}>{certification.duration}</p>
			</div>
		</article>
	);
};
