import {
	faBootstrap,
	faDocker,
	faGithub,
	faJs,
	faPhp,
	faPython,
	faReact,
	faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DjangoLogo from "../../assets/icons/django.svg";
import jQueryIcon from "../../assets/icons/jquery-icon.svg";
import MySQLIcon from "../../assets/icons/mysql_official.svg";
import SymfonyIcon from "../../assets/icons/symfony_black.svg";
import TypeScriptLogo from "../../assets/icons/ts_logo.svg";
import { Language } from "../../domain/ProjectInterface";

type IconTypes = {
	[key in Language]: () => JSX.Element;
};

const iconTypes: IconTypes = {
	JavaScript: () => <FontAwesomeIcon icon={faJs} style={{ color: "#fbd725" }} size="xs" />,
	Docker: () => <FontAwesomeIcon icon={faDocker} style={{ color: "#1488c6" }} size="xs" />,
	GitHub: () => <FontAwesomeIcon icon={faGithub} size="xs" style={{ color: "#586069" }} />,
	Php: () => <FontAwesomeIcon icon={faPhp} style={{ color: "#7377ad" }} size="xs" />,
	Python: () => <FontAwesomeIcon icon={faPython} style={{ color: "#3776ab" }} size="xs" />,
	React: () => <FontAwesomeIcon icon={faReact} style={{ color: "#61dafb" }} size="xs" />,
	Demo: () => <FontAwesomeIcon icon={faGlobe} size="xs" style={{ color: "#586069" }} />,
	TypeScript: () => <img src={TypeScriptLogo} alt="typescript logo" width={31.5} height={36}></img>,
	Sass: () => <FontAwesomeIcon icon={faSass} size="xs" style={{ color: "#CF649A" }} />,
	Django: () => <img src={DjangoLogo} alt="django logo" width={31.5} height={36}></img>,
	MySQL: () => <img src={MySQLIcon} alt="mysql icon" width={31.5} height={36}></img>,
	Symfony: () => <img src={SymfonyIcon} alt="symfony icon" width={31.5} height={36}></img>,
	Bootstrap: () => <FontAwesomeIcon icon={faBootstrap} size="xs" style={{ color: "#7310f5" }} />,
	jQuery: () => <img src={jQueryIcon} alt="jquery icon" width={31.5} height={36}></img>,
};

export const ProjectIcon = ({ icon }: { icon: keyof IconTypes }) => {
	return <>{iconTypes[icon]()}</>;
};
