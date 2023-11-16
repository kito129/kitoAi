
export interface MenuItem {
	id?: number;
	label?: string;
	icon?: string;
	link?: string;
	expanded?: boolean;
	subItems?: any;
	isTitle?: boolean;
	badge?: any;
	parentId?: number;
}

export const MENU: MenuItem[] = [
	{
		label: 'Main',
		isTitle: true
	},
	{
		label: 'Dashboard',
		icon: 'layout',
		link: '/dashboard'
	},
];
