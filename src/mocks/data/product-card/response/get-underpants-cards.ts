import faker from '@faker-js/faker';

import {
	ECardColor,
	ECardSize,
	ELabelCurrent,
	ELabelSections,
} from '../../../../types/data/product-card/product-card.enum';

import { IProductCard } from '../../../../types/data/product-card/product-card.type';

export const getUnderpantsCards: IProductCard[] = [
	{
		id: 'cf592b8b-0668-4304-8d89-419805ddeb30',
		title: 'Трусы слип',
		description:
			'Комфортная коллекция белья из нежной микрофибры с эластичным кружевом, которое добавляет утонченности и легкости. Гладкие трусы с кружевными вставками – это универсальное решение под облегающую одежду.',
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
				current: ELabelCurrent.underpants,
				sections: [ELabelSections.new],
			},
			priceList: {
				price: 799,
				overPrice: 999,
				discountPrice: 599,
			},
			inStock: true,
			compound: {
				elastane: '18%',
				polyamide: '73%',
				cotton: '9%',
			},
			vendor: '2771F2201',
			collection: faker.commerce.productAdjective(),
			manufacturer: faker.address.country(),
			brand: faker.commerce.department(),
			productsFromKit: ['42eceaee-2687-4488-bc9e-0e5ed8b11b9e'],
			sizeList: {
				[ECardSize.XXS]: {
					barcode: 4680382924291,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.XS]: {
					barcode: 4680382924307,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.S]: {
					barcode: 4680382924314,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.SM]: {
					barcode: 4680382924406,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.SM]: {
					barcode: 4680382924413,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
			},
			colorList: {
				current: ECardColor.Mint,
				vendorList: ['3d301ec4-52b6-42ea-ba63-67e132eeb256'],
			},
		},
		recommend: [],
	},
	{
		id: '3d301ec4-52b6-42ea-ba63-67e132eeb256',
		title: 'Трусы слип',
		description:
			'Комфортная коллекция белья из нежной микрофибры с эластичным кружевом, которое добавляет утонченности и легкости. Гладкие трусы с кружевными вставками – это универсальное решение под облегающую одежду.',
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
				price: 799,
				overPrice: 999,
				discountPrice: 599,
			},
			inStock: true,
			compound: {
				elastane: '18%',
				polyamide: '73%',
				cotton: '9%',
			},
			vendor: '2771F2201',
			collection: faker.commerce.productAdjective(),
			manufacturer: faker.address.country(),
			brand: faker.commerce.department(),
			productsFromKit: ['0ccb4c6c-1f73-447f-9e98-0a4dc86c2ac4'],
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
				vendorList: ['cf592b8b-0668-4304-8d89-419805ddeb30'],
			},
		},
		recommend: [],
	},
	{
		id: '94d17faa-ae31-4a2c-9b54-d2f465d294ca',
		title: 'Трусы стринг',
		description:
			'Коллекция Gracie выполнена из мягкого эластичного кружева с цветочным узором природных оттенков. Широкий модельный ряд позволяет выбрать любимую комфортную модель на каждый день. Трусы стринг - самая открытая модель из предствленных в данной коллекции. Они совершенно незаметны под обтягивающей одеждой, ластовица выполнена из 100% хлопка.',
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
				price: 799,
				overPrice: 999,
				discountPrice: 599,
			},
			inStock: true,
			compound: {
				elastane: '10%',
				polyamide: '75%',
				cotton: '15%',
			},
			vendor: '2631F2101',
			collection: faker.commerce.productAdjective(),
			manufacturer: faker.address.country(),
			brand: faker.commerce.department(),
			productsFromKit: ['ee62588f-4c00-4c39-a1eb-00e25e097948'],
			sizeList: {
				[ECardSize.XXS]: {
					barcode: 4680382891159,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.XS]: {
					barcode: 4680382891166,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.S]: {
					barcode: 4680382891173,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.SM]: {
					barcode: 4680382891180,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.SM]: {
					barcode: 4680382891197,
					amount: 0,
				},
			},
			colorList: {
				current: ECardColor.Zephyr,
				vendorList: ['3175ec45-31ed-4745-8e68-a0587f0a8151'],
			},
		},
		recommend: [],
	},
	{
		id: '3175ec45-31ed-4745-8e68-a0587f0a8151',
		title: 'Трусы стринг',
		description:
			'Коллекция Gracie выполнена из мягкого эластичного кружева с цветочным узором природных оттенков. Широкий модельный ряд позволяет выбрать любимую комфортную модель на каждый день. Трусы стринг - самая открытая модель из предствленных в данной коллекции. Они совершенно незаметны под обтягивающей одеждой, ластовица выполнена из 100% хлопка.',
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
				price: 799,
				overPrice: 999,
				discountPrice: 599,
			},
			inStock: true,
			compound: {
				elastane: '10%',
				polyamide: '75%',
				cotton: '15%',
			},
			vendor: '2631F2101',
			collection: faker.commerce.productAdjective(),
			manufacturer: faker.address.country(),
			brand: faker.commerce.department(),
			productsFromKit: ['8042b7c6-9e71-402b-aaff-fb92faef3a25'],
			sizeList: {
				[ECardSize.XXS]: {
					barcode: 46803828911591,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.XS]: {
					barcode: 46803828911661,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.S]: {
					barcode: 46803828911731,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.SM]: {
					barcode: 46803828911801,
					amount: faker.datatype.number({ min: 1, max: 300 }),
				},
				[ECardSize.SM]: {
					barcode: 46803828911971,
					amount: 0,
				},
			},
			colorList: {
				current: ECardColor.Cherry,
				vendorList: ['94d17faa-ae31-4a2c-9b54-d2f465d294ca'],
			},
		},
		recommend: [],
	},
];
