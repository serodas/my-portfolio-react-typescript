import BadgeMetaBackendCertificate from "./meta-back-end-developer-certificate.png";
import MetaIcon from "./meta_icon.svg";

type IconTypes = {
	[key: string]: () => JSX.Element;
};

const iconTypes: IconTypes = {
	meta: () => <img src={MetaIcon} alt="meta icon" className="meta" />,
	meta_backend: () => <img src={BadgeMetaBackendCertificate} alt="meta icon" className="meta" />,
};

export const CertificationIcon = ({ icon }: { icon: keyof IconTypes }) => {
	return <>{iconTypes[icon]()}</>;
};
