import { InMemoryListItemRepository } from "../../infrastructure/InMemoryListItemRepository";
import { Header } from "./header/Header";

const repository = new InMemoryListItemRepository();
export const Layout = () => {
	return (
		<>
			<Header repository={repository}></Header>
		</>
	);
};
