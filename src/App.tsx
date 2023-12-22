import { InMemoryListItemRepository } from "./infrastructure/InMemoryListItemRepository";
import { Header } from "./sections/header/Header";

const repository = new InMemoryListItemRepository();
export const App = () => {
	return (
		<div className="main">
			<Header repository={repository} />
			<h1>Hola 👋.</h1>
		</div>
	);
};
