import faker from '@faker-js/faker';

import {
	ECardColor,
	ECardColorRGB,
	ECardSize,
	ELabelCurrent,
	ELabelSections,
} from '../card.mock.enum';

import { IProductCard } from '../card.mock.type';

export const getCardUnderpants: IProductCard[] = [
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
				section: ELabelSections.sale,
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
					barcode: '4680382924291',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.XS]: {
					barcode: '4680382924307',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.S]: {
					barcode: '4680382924314',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.SM]: {
					barcode: '4680382924406',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.SM]: {
					barcode: '4680382924413',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
			},
			colorList: {
				activeColor: '0',
				current: {
					label: ECardColor.Mint,
					rgb: ECardColorRGB.Mint,
				},
				vendorList: [
					{
						id: '3d301ec4-52b6-42ea-ba63-67e132eeb256',
						color: {
							label: ECardColor.Pink,
							rgb: ECardColorRGB.Pink,
						},
						section: ELabelSections.novelties,
					},
				],
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
				section: ELabelSections.novelties,
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
					barcode: '4680382923560',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.XS]: {
					barcode: '4680382923577',
					amount: '0',
				},
				[ECardSize.S]: {
					barcode: '4680382923584',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.SM]: {
					barcode: '4680382949959',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.SM]: {
					barcode: '4680382949966',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
			},
			colorList: {
				activeColor: '0',
				current: {
					label: ECardColor.Pink,
					rgb: ECardColorRGB.Pink,
				},
				vendorList: [
					{
						id: 'cf592b8b-0668-4304-8d89-419805ddeb30',
						color: {
							label: ECardColor.Mint,
							rgb: ECardColorRGB.Mint,
						},
						section: ELabelSections.sale,
					},
				],
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
				section: ELabelSections.collections,
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
					barcode: '4680382891159',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.XS]: {
					barcode: '4680382891166',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.S]: {
					barcode: '4680382891173',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.SM]: {
					barcode: '4680382891180',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.SM]: {
					barcode: '4680382891197',
					amount: '0',
				},
			},
			colorList: {
				activeColor: '0',
				current: {
					label: ECardColor.Zephyr,
					rgb: ECardColorRGB.Zephyr,
				},
				vendorList: [
					{
						id: '3175ec45-31ed-4745-8e68-a0587f0a8151',
						color: {
							label: ECardColor.Cherry,
							rgb: ECardColorRGB.Cherry,
						},
						section: ELabelSections.sale,
					},
				],
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
			productBack: 'product-back',
		},
		properties: {
			labelList: {
				current: ELabelCurrent.bras,
				section: ELabelSections.sale,
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
					barcode: '46803828911591',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.XS]: {
					barcode: '46803828911661',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.S]: {
					barcode: '46803828911731',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.SM]: {
					barcode: '46803828911801',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.SM]: {
					barcode: '46803828911971',
					amount: '0',
				},
			},
			colorList: {
				activeColor: '0',
				current: {
					label: ECardColor.Cherry,
					rgb: ECardColorRGB.Cherry,
				},
				vendorList: [
					{
						id: '94d17faa-ae31-4a2c-9b54-d2f465d294ca',
						color: {
							label: ECardColor.Zephyr,
							rgb: ECardColorRGB.Zephyr,
						},
						section: ELabelSections.collections,
					},
				],
			},
		},
		recommend: [],
	},
];
