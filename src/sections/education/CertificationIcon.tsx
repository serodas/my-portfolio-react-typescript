import MetaIcon from "../../assets/icons/meta_icon.svg";
import BadgeMetaBackendCertificate from "./meta-back-end-developer-certificate.png";

type IconTypes = {
	[key: string]: () => JSX.Element;
};

const iconTypes: IconTypes = {
	meta: () => <img src={MetaIcon} alt="meta icon" className="meta" width={160} height={160} />,
	meta_backend: () => <img src={BadgeMetaBackendCertificate} alt="meta icon" className="meta" />,
};

export const CertificationIcon = ({ icon }: { icon: keyof IconTypes }) => {
	return <>{iconTypes[icon]()}</>;
};
