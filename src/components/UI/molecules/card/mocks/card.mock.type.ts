import { IMockServiceWorker } from '../../../../../types/services/msw/msw.type';
import {
	ECardColor,
	ECardColorRGB,
	ELabelCurrent,
	ELabelSections,
} from './card.mock.enum';

export type ProductCardId = string;

export type LabelList = {
	current: ELabelCurrent;
	sections: ELabelSections;
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

export type CardColorCurrent = {
	label: ECardColor;
	rgb: ECardColorRGB;
};

export type VendorList = {
	id: string;
	color: CardColorCurrent;
};

export type CardColorList = {
	current: CardColorCurrent;
	vendorList: VendorList[];
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

// ---

export type PayloadCardId = {
	// data: IProductCard[];
	data: IProductCard;
};

export type ProductCardList = IProductCard[];

export type PayloadCardList = {
	data: ProductCardList;
	type: ELabelSections;
};

export type ResponceCardList = {
	data: ProductCardList;
};

// ---

export type CardGetId = {
	// id: string[];
	id: string;
};

export type CardGetAll = {
	limit?: string | null;
};

export type CardGetSection = {
	section: string | null;
};

// ---

export type CardPostREQBodyId = {
	// id: string[];
	id: string;
};
