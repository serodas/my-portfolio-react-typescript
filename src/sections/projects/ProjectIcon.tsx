import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faDocker, faGithub, faMeta } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Language } from "../../domain/ProjectInterface";

type IconTypes = {
	[key in Language]: () => JSX.Element;
};

const iconTypes: IconTypes = {
	Meta: () => (
		<FontAwesomeIcon icon={faMeta as IconDefinition} style={{ color: "#0080fa" }} size="xs" />
	),
	Docker: () => (
		<FontAwesomeIcon icon={faDocker as IconDefinition} style={{ color: "#1488c6" }} size="xs" />
	),
	GitHub: () => <FontAwesomeIcon icon={faGithub as IconDefinition} size="xs" />,
	Demo: () => <FontAwesomeIcon icon={faGlobe as IconDefinition} size="xs" />,
};

export const ProjectIcon = ({ icon }: { icon: keyof IconTypes }) => {
	return <>{iconTypes[icon]()}</>;
};
