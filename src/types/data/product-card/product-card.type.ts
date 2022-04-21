import { ELabelCurrent, ELabelSections } from './product-card.enum';

export type ProductCardId = string;

export type LabelList = {
	current: ELabelCurrent;
	sections: ELabelSections[];
};

export type CardPriceList = {
	price: number;
	overPrice: number;
	discountPrice: number;
};

export type CardCompound = {
	polyamide?: string;
	elastane?: string;
	polyester?: string;
	cotton?: string;
};

export type CardSizeList = {
	[key: string]: {
		barcode: number;
		amount: number;
	};
};

export type CardColorList = {
	current: string;
	vendorList: string[];
};

export type CardProperties = {
	labelList: LabelList;
	priceList: CardPriceList;
	inStock: boolean;
	compound?: CardCompound;
	vendor: string;
	collection: string;
	manufacturer: string;
	brand: string;
	productsFromKit: ProductCardId[];
	sizeList: CardSizeList;
	colorList: CardColorList;
};

export type ProductCardImages = {
	mainFront: string;
	mainBack: string;
	front: string;
	back: string;
	productFront: string;
	productBack: string;
};

export interface IProductCard {
	id: ProductCardId;
	title: string;
	description: string;
	images: ProductCardImages;
	properties: CardProperties;
	recommend: ProductCardId[];
}

export type ProductCardList = IProductCard[];

export type PayloadCardList = {
	data: ProductCardList;
};
