import DockerIcon from "../../assets/icons/docker.svg";
import MetaIcon from "../../assets/icons/meta_icon.svg";
import { Language } from "../../domain/ProjectInterface";

type IconTypes = {
	[key in Language]: () => JSX.Element;
};

const iconTypes: IconTypes = {
	Meta: () => <img src={MetaIcon} alt="meta icon" height={48} width={48} />,
	Docker: () => <img src={DockerIcon} alt="docker icon" height={48} width={48} />,
};

export const ProjectIcon = ({ icon }: { icon: keyof IconTypes }) => {
	return <>{iconTypes[icon]()}</>;
};
