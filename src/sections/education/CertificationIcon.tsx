import MetaIcon from "./meta_icon.svg";

type IconTypes = {
	[key: string]: (color: string) => JSX.Element;
};

const iconTypes: IconTypes = {
	meta: (color: string) => <img src={MetaIcon} alt="meta icon" className="meta" />,
};

export const CertificationIcon = ({ icon, color }: { icon: keyof IconTypes; color: string }) => {
	return <>{iconTypes[icon](color)}</>;
};
