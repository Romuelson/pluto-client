import faker from '@faker-js/faker';

import {
	ECardColor,
	ECardSize,
	ELabelCurrent,
	ELabelSections,
} from '../../../../types/data/product-card/product-card.enum';

import { IProductCard } from '../../../../types/data/product-card/product-card.type';

export const getBrasCards: IProductCard[] = [
	{
		id: '42eceaee-2687-4488-bc9e-0e5ed8b11b9e',
		title: 'Бюстгальтер мягкий',
		description:
			'Комфортная коллекция белья из нежной микрофибры с эластичным кружевом, которое добавляет утонченности и легкости. Мягкий бюстгальтер подчеркнет естественную форму, обеспечит поддержку груди.',
		images: {
			mainFront: 'main-front',
			mainBack: 'main-back',
			front: 'front',
			back: 'back',
			productFront: 'product-front',
			productBack: 'product-back',
		},
		properties: {
			labelList: {
				current: ELabelCurrent.bras,
				sections: [ELabelSections.new],
			},
			priceList: {
				price: 1799,
				overPrice: 1999,
				discountPrice: 1399,
			},
			inStock: true,
			compound: {
				elastane: '19%',
				polyamide: '54%',
			},
			vendor: '2771F1327',
			collection: faker.commerce.productAdjective(),
			manufacturer: faker.address.country(),
			brand: faker.commerce.department(),
			productsFromKit: ['cf592b8b-0668-4304-8d89-419805ddeb30'],
			sizeList: {
				[ECardSize.XXS]: {
					barcode: 4680382923591,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.XS]: {
					barcode: 4680382923607,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.S]: {
					barcode: 4680382923621,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.SM]: {
					barcode: 4680382923607,
					amount: 0,
				},
				[ECardSize.SM]: {
					barcode: 4680382923638,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
			},
			colorList: {
				current: ECardColor.Mint,
				vendorList: ['0ccb4c6c-1f73-447f-9e98-0a4dc86c2ac4'],
			},
		},
		recommend: [],
	},
	{
		id: '0ccb4c6c-1f73-447f-9e98-0a4dc86c2ac4',
		title: 'Бюстгальтер мягкий',
		description:
			'Комфортная коллекция белья из нежной микрофибры с эластичным кружевом, которое добавляет утонченности и легкости. Мягкий бюстгальтер подчеркнет естественную форму, обеспечит поддержку груди.',
		images: {
			mainFront: 'main-front',
			mainBack: 'main-back',
			front: 'front',
			back: 'back',
			productFront: 'product-front',
			productBack: 'product-back',
		},
		properties: {
			labelList: {
				current: ELabelCurrent.bras,
				sections: [ELabelSections.collections],
			},
			priceList: {
				price: 1799,
				overPrice: 1999,
				discountPrice: 1399,
			},
			inStock: true,
			compound: {
				elastane: '19%',
				polyamide: '54%',
			},
			vendor: '2771F1327',
			collection: faker.commerce.productAdjective(),
			manufacturer: faker.address.country(),
			brand: faker.commerce.department(),
			productsFromKit: ['3d301ec4-52b6-42ea-ba63-67e132eeb256'],
			sizeList: {
				[ECardSize.XXS]: {
					barcode: 4680382923560,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.XS]: {
					barcode: 4680382923577,
					amount: 0,
				},
				[ECardSize.S]: {
					barcode: 4680382923584,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.SM]: {
					barcode: 4680382949959,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.SM]: {
					barcode: 4680382949966,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
			},
			colorList: {
				current: ECardColor.Pink,
				vendorList: ['0ccb4c6c-1f73-447f-9e98-0a4dc86c2ac4'],
			},
		},
		recommend: [],
	},
	{
		id: 'ee62588f-4c00-4c39-a1eb-00e25e097948',
		title: 'Бюстгальтер push-up',
		description:
			'Коллекция Gracie выполнена из мягкого эластичного кружева с цветочным узором природных оттенков. Широкий модельный ряд позволяет выбрать любимую комфортную модель на каждый день. Бюстгальтер push-up идеально подходит для небольшой груди, делая её визуально на один или два размера больше.',
		images: {
			mainFront: 'main-front',
			mainBack: 'main-back',
			front: 'front',
			back: 'back',
			productFront: 'product-front',
			productBack: 'product-back',
		},
		properties: {
			labelList: {
				current: ELabelCurrent.bras,
				sections: [ELabelSections.new],
			},
			priceList: {
				price: 1999,
				overPrice: 2199,
				discountPrice: 1599,
			},
			inStock: true,
			compound: {
				elastane: '7%',
				polyamide: '54%',
				polyester: '39%',
			},
			vendor: '2631F1125',
			collection: faker.commerce.productAdjective(),
			manufacturer: faker.address.country(),
			brand: faker.commerce.department(),
			productsFromKit: ['94d17faa-ae31-4a2c-9b54-d2f465d294ca'],
			sizeList: {
				[ECardSize.XXS]: {
					barcode: 4680382890671,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.XS]: {
					barcode: 4680382890688,
					amount: 0,
				},
				[ECardSize.S]: {
					barcode: 4680382890695,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.SM]: {
					barcode: 4680382890701,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.SM]: {
					barcode: 4680382890718,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.M]: {
					barcode: 4680382890558,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.ML]: {
					barcode: 4680382890732,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.L]: {
					barcode: 4680382890565,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.XL]: {
					barcode: 4680382890572,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.XXL]: {
					barcode: 4680382890589,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.XXL]: {
					barcode: 4680382890596,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.XXXL]: {
					barcode: 4680382890725,
					amount: 0,
				},
			},
			colorList: {
				current: ECardColor.Zephyr,
				vendorList: [
					'8042b7c6-9e71-402b-aaff-fb92faef3a25',
					'7346e703-9d18-4f59-b925-6669389c65c3',
				],
			},
		},
		recommend: [],
	},
	{
		id: '8042b7c6-9e71-402b-aaff-fb92faef3a25',
		title: 'Бюстгальтер push-up',
		description:
			'Коллекция Gracie выполнена из мягкого эластичного кружева с цветочным узором природных оттенков. Широкий модельный ряд позволяет выбрать любимую комфортную модель на каждый день. Бюстгальтер push-up идеально подходит для небольшой груди, делая её визуально на один или два размера больше.',
		images: {
			mainFront: 'main-front',
			mainBack: 'main-back',
			front: 'front',
			back: 'back',
			productFront: 'product-front',
			productBack: 'product-back',
		},
		properties: {
			labelList: {
				current: ELabelCurrent.bras,
				sections: [ELabelSections.collections],
			},
			priceList: {
				price: 1999,
				overPrice: 2199,
				discountPrice: 1599,
			},
			inStock: true,
			compound: {
				elastane: '7%',
				polyamide: '54%',
				polyester: '39%',
			},
			vendor: '2631F1125',
			collection: faker.commerce.productAdjective(),
			manufacturer: faker.address.country(),
			brand: faker.commerce.department(),
			productsFromKit: ['3175ec45-31ed-4745-8e68-a0587f0a8151'],
			sizeList: {
				[ECardSize.XXS]: {
					barcode: 4680382890664,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.XS]: {
					barcode: 4680382890510,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.S]: {
					barcode: 4680382890602,
					amount: 0,
				},
				[ECardSize.SM]: {
					barcode: 4680382890619,
					amount: 0,
				},
				[ECardSize.SM]: {
					barcode: 4680382890626,
					amount: 0,
				},
				[ECardSize.M]: {
					barcode: 4680382890633,
					amount: 0,
				},
				[ECardSize.ML]: {
					barcode: 4680382890640,
					amount: 0,
				},
				[ECardSize.L]: {
					barcode: 4680382890657,
					amount: 0,
				},
			},
			colorList: {
				current: ECardColor.Cherry,
				vendorList: [
					'ee62588f-4c00-4c39-a1eb-00e25e097948',
					'7346e703-9d18-4f59-b925-6669389c65c3',
				],
			},
		},
		recommend: [],
	},
	{
		id: '7346e703-9d18-4f59-b925-6669389c65c3',
		title: 'Бюстгальтер push-up',
		description:
			'Коллекция Gracie выполнена из мягкого эластичного кружева с цветочным узором природных оттенков. Широкий модельный ряд позволяет выбрать любимую комфортную модель на каждый день. Бюстгальтер push-up идеально подходит для небольшой груди, делая её визуально на один или два размера больше.',
		images: {
			mainFront: 'main-front',
			mainBack: 'main-back',
			front: 'front',
			back: 'back',
			productFront: 'product-front',
			productBack: 'product-back',
		},
		properties: {
			labelList: {
				current: ELabelCurrent.bras,
				sections: [ELabelSections.sale],
			},
			priceList: {
				price: 1999,
				overPrice: 2199,
				discountPrice: 1599,
			},
			inStock: true,
			compound: {
				elastane: '7%',
				polyamide: '54%',
				polyester: '39%',
			},
			vendor: '2631F1125',
			collection: faker.commerce.productAdjective(),
			manufacturer: faker.address.country(),
			brand: faker.commerce.department(),
			productsFromKit: [],
			sizeList: {
				[ECardSize.XXS]: {
					barcode: 4680382803114,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.XS]: {
					barcode: 4680382793590,
					amount: 0,
				},
				[ECardSize.S]: {
					barcode: 4680382793606,
					amount: 0,
				},
				[ECardSize.SM]: {
					barcode: 4680382793613,
					amount: 0,
				},
				[ECardSize.SM]: {
					barcode: 4680382793620,
					amount: 0,
				},
				[ECardSize.M]: {
					barcode: 4680382793637,
					amount: 0,
				},
				[ECardSize.ML]: {
					barcode: 4680382793644,
					amount: 0,
				},
			},
			colorList: {
				current: ECardColor.Blue,
				vendorList: [
					'ee62588f-4c00-4c39-a1eb-00e25e097948',
					'8042b7c6-9e71-402b-aaff-fb92faef3a25',
				],
			},
		},
		recommend: [],
	},
	{
		id: '650c69f0-eca4-4ac6-be73-1e551b622b55',
		title: 'Бюстгальтер t-shirt',
		description:
			'Бюстгальтер тишот с  выполнен из кружева с эффектом «макраме». В чашечке придает груди круглую анатомическую форму за счет  присутствия тонкого слоя поролона. Такой бюстгальтер подарит чувство комфорта на весь день!',
		images: {
			mainFront: 'main-front',
			mainBack: 'main-back',
			front: 'front',
			back: 'back',
			productFront: 'product-front',
			productBack: 'product-back',
		},
		properties: {
			labelList: {
				current: ELabelCurrent.bras,
				sections: [ELabelSections.collections],
			},
			priceList: {
				price: 1899,
				overPrice: 2099,
				discountPrice: 1499,
			},
			inStock: true,
			compound: {
				elastane: '6%',
				polyamide: '55%',
				polyester: '39%',
			},
			vendor: '2484F1446_2',
			collection: faker.commerce.productAdjective(),
			manufacturer: faker.address.country(),
			brand: faker.commerce.department(),
			productsFromKit: [],
			sizeList: {
				[ECardSize.XXS]: {
					barcode: 4680382804135,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.XS]: {
					barcode: 4680382804142,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.S]: {
					barcode: 4680382804159,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.SM]: {
					barcode: 4680382804166,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
			},
			colorList: {
				current: ECardColor.Black,
				vendorList: ['44022173-7159-430e-854c-c003db4baa7c'],
			},
		},
		recommend: [],
	},
	{
		id: '44022173-7159-430e-854c-c003db4baa7c',
		title: 'Бюстгальтер t-shirt',
		description:
			'Бюстгальтер тишот с  выполнен из кружева с эффектом «макраме». В чашечке придает груди круглую анатомическую форму за счет  присутствия тонкого слоя поролона. Такой бюстгальтер подарит чувство комфорта на весь день!',
		images: {
			mainFront: 'main-front',
			mainBack: 'main-back',
			front: 'front',
			back: 'back',
			productFront: 'product-front',
			productBack: 'product-back',
		},
		properties: {
			labelList: {
				current: ELabelCurrent.bras,
				sections: [ELabelSections.new],
			},
			priceList: {
				price: 1899,
				overPrice: 2099,
				discountPrice: 1499,
			},
			inStock: true,
			compound: {
				elastane: '6%',
				polyamide: '55%',
				polyester: '39%',
			},
			vendor: '2484F1446_2',
			collection: faker.commerce.productAdjective(),
			manufacturer: faker.address.country(),
			brand: faker.commerce.department(),
			productsFromKit: [],
			sizeList: {
				[ECardSize.XXS]: {
					barcode: 4680382804098,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.XS]: {
					barcode: 4680382804104,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.S]: {
					barcode: 4680382804111,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.SM]: {
					barcode: 4680382804128,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
			},
			colorList: {
				current: ECardColor.Black,
				vendorList: ['650c69f0-eca4-4ac6-be73-1e551b622b55'],
			},
		},
		recommend: [],
	},
	{
		id: 'fe731f15-8e61-4d84-916f-870fac7adbd0',
		title: 'Бюстгальтер izi-shirt',
		description:
			'Коллекция выполнена из микрофибры и декорирована кружевом. Абсолютно комфортное, универсальное белье из дышащего материала в классической цветовой гамме. Бюстгальтер изи с чашкой из ламината подойдёт обладательницам пышных форм.',
		images: {
			mainFront: 'main-front',
			mainBack: 'main-back',
			front: 'front',
			back: 'back',
			productFront: 'product-front',
			productBack: 'product-back',
		},
		properties: {
			labelList: {
				current: ELabelCurrent.bras,
				sections: [ELabelSections.sale],
			},
			priceList: {
				price: 2299,
				overPrice: 2499,
				discountPrice: 1899,
			},
			inStock: true,
			compound: {
				elastane: '19%',
				polyamide: '61%',
				polyester: '61%',
			},
			vendor: '2884F1475L',
			collection: faker.commerce.productAdjective(),
			manufacturer: faker.address.country(),
			brand: faker.commerce.department(),
			productsFromKit: [],
			sizeList: {
				[ECardSize.XXS]: {
					barcode: 4680382921160,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.XS]: {
					barcode: 4680382921177,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.S]: {
					barcode: 4680382921184,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.SM]: {
					barcode: 4680382921191,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.M]: {
					barcode: 4680382921207,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.ML]: {
					barcode: 4680382921214,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
			},
			colorList: {
				current: ECardColor.Black,
				vendorList: [],
			},
		},
		recommend: [],
	},
];
