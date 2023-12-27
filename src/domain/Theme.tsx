export interface Theme {
	name: string;
	bodyColor: string;
	primaryTextColor: string;
	secondaryTextColor: string;
	ProjectCardColor: string;
}

export const lightTheme: Theme = {
	name: "light",
	bodyColor: "#FFFFFF",
	primaryTextColor: "#343434",
	secondaryTextColor: "#7F8DAA",
	ProjectCardColor: "#DCE4F2",
};

export const darkTheme: Theme = {
	name: "dark",
	bodyColor: "#1D1D1D",
	primaryTextColor: "#FFFFFF",
	secondaryTextColor: "#8D8D8D",
	ProjectCardColor: "#292A2D",
};
