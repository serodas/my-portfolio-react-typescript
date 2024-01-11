import AwsIcon from "../../assets/icons/aws.svg";
import MetaIcon from "../../assets/icons/meta_icon.svg";
import PlatziIcon from "../../assets/icons/platzi.svg";
import SymfonyIcon from "../../assets/icons/symfony_black.svg";
import BadgeMetaBackendCertificate from "./meta-back-end-developer-certificate.png";

type IconTypes = {
	[key: string]: () => JSX.Element;
};

const iconTypes: IconTypes = {
	meta: () => <img src={MetaIcon} alt="meta icon" className="meta" width={160} height={160} />,
	meta_backend: () => <img src={BadgeMetaBackendCertificate} alt="meta icon" className="meta" />,
	aws: () => <img src={AwsIcon} alt="meta icon" className="meta" width={160} height={160} />,
	symfony: () => <img src={SymfonyIcon} alt="symfony icon" width={160} height={160}></img>,
	platzi: () => <img src={PlatziIcon} alt="platzi icon" width={160} height={160}></img>,
};

export const CertificationIcon = ({ icon }: { icon: keyof IconTypes }) => {
	return <>{iconTypes[icon]()}</>;
};
