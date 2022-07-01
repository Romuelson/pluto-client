export type PromoListObject = {
	id: string;
	title: string;
	description: null;
	link: string;
	linkTitle: string;
};

export type PromoListData = PromoListObject[];

export type PromoListProps = {
	children: React.ReactNode;
};
