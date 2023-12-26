import {
	faDocker,
	faGithub,
	faJs,
	faPhp,
	faPython,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Language } from "../../domain/ProjectInterface";

type IconTypes = {
	[key in Language]: () => JSX.Element;
};

const iconTypes: IconTypes = {
	JavaScript: () => <FontAwesomeIcon icon={faJs} style={{ color: "#f7df1e" }} size="xs" />,
	Docker: () => <FontAwesomeIcon icon={faDocker} style={{ color: "#1488c6" }} size="xs" />,
	GitHub: () => <FontAwesomeIcon icon={faGithub} size="xs" style={{ color: "#586069" }} />,
	Php: () => <FontAwesomeIcon icon={faPhp} style={{ color: "#7377ad" }} size="xs" />,
	Python: () => <FontAwesomeIcon icon={faPython} style={{ color: "#3776ab" }} size="xs" />,
	React: () => <FontAwesomeIcon icon={faReact} style={{ color: "#61dafb" }} size="xs" />,
	Demo: () => <FontAwesomeIcon icon={faGlobe} size="xs" style={{ color: "#586069" }} />,
};

export const ProjectIcon = ({ icon }: { icon: keyof IconTypes }) => {
	return <>{iconTypes[icon]()}</>;
};
