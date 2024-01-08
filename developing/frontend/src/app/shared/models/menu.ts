
export interface MenuItem {
	id?: number;
	label: string;
	icon: string;
	link: string;
}

export const MENU: MenuItem[] = [
	{
		label: 'Home',
		icon: 'home',
		link: 'home'
	},
	{
		label: 'Dashboard',
		icon: 'layout',
		link: 'home/dashboard'
	},
	{
		label: 'Projects',
		icon: 'layout',
		link: 'projects'
	},
    {
        label: 'Finance',
        icon: 'finance',
        link: 'finance'
    },
];
