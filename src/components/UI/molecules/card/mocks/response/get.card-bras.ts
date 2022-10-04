import faker from '@faker-js/faker';

import {
	ECardColor,
	ECardColorRGB,
	ECardSize,
	ELabelCurrent,
	ELabelSections,
} from '../card.mock.enum';

import { IProductCard } from '../card.mock.type';

export const getCardBras: IProductCard[] = [
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
				section: ELabelSections.collections,
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
					barcode: '4680382923591',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.XS]: {
					barcode: '4680382923607',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.S]: {
					barcode: '4680382923621',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.SM]: {
					barcode: '4680382923607',
					amount: '0',
				},
				[ECardSize.SM]: {
					barcode: '4680382923638',
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
						id: '0ccb4c6c-1f73-447f-9e98-0a4dc86c2ac4',
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
				section: ELabelSections.novelties,
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
						id: '42eceaee-2687-4488-bc9e-0e5ed8b11b9e',
						color: {
							label: ECardColor.Mint,
							rgb: ECardColorRGB.Mint,
						},
						section: ELabelSections.collections,
					},
				],
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
				section: ELabelSections.novelties,
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
					barcode: '4680382890671',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.XS]: {
					barcode: '4680382890688',
					amount: '0',
				},
				[ECardSize.S]: {
					barcode: '4680382890695',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.SM]: {
					barcode: '4680382890701',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.SM]: {
					barcode: '4680382890718',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.M]: {
					barcode: '4680382890558',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.ML]: {
					barcode: '4680382890732',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.L]: {
					barcode: '4680382890565',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.XL]: {
					barcode: '4680382890572',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.XXL]: {
					barcode: '4680382890589',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.XXL]: {
					barcode: '4680382890596',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.XXXL]: {
					barcode: '4680382890725',
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
						id: '8042b7c6-9e71-402b-aaff-fb92faef3a25',
						color: {
							label: ECardColor.Cherry,
							rgb: ECardColorRGB.Cherry,
						},
						section: ELabelSections.collections,
					},
					{
						id: '7346e703-9d18-4f59-b925-6669389c65c3',
						color: {
							label: ECardColor.Blue,
							rgb: ECardColorRGB.Blue,
						},
						section: ELabelSections.sale,
					},
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
				section: ELabelSections.collections,
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
					barcode: '4680382890664',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.XS]: {
					barcode: '4680382890510',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.S]: {
					barcode: '4680382890602',
					amount: '0',
				},
				[ECardSize.SM]: {
					barcode: '4680382890619',
					amount: '0',
				},
				[ECardSize.SM]: {
					barcode: '4680382890626',
					amount: '0',
				},
				[ECardSize.M]: {
					barcode: '4680382890633',
					amount: '0',
				},
				[ECardSize.ML]: {
					barcode: '4680382890640',
					amount: '0',
				},
				[ECardSize.L]: {
					barcode: '4680382890657',
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
						id: 'ee62588f-4c00-4c39-a1eb-00e25e097948',
						color: {
							label: ECardColor.Zephyr,
							rgb: ECardColorRGB.Zephyr,
						},
						section: ELabelSections.novelties,
					},
					{
						id: '7346e703-9d18-4f59-b925-6669389c65c3',
						color: {
							label: ECardColor.Blue,
							rgb: ECardColorRGB.Blue,
						},
						section: ELabelSections.sale,
					},
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
				section: ELabelSections.sale,
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
					barcode: '4680382803114',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.XS]: {
					barcode: '4680382793590',
					amount: '0',
				},
				[ECardSize.S]: {
					barcode: '4680382793606',
					amount: '0',
				},
				[ECardSize.SM]: {
					barcode: '4680382793613',
					amount: '0',
				},
				[ECardSize.SM]: {
					barcode: '4680382793620',
					amount: '0',
				},
				[ECardSize.M]: {
					barcode: '4680382793637',
					amount: '0',
				},
				[ECardSize.ML]: {
					barcode: '4680382793644',
					amount: '0',
				},
			},
			colorList: {
				activeColor: '0',
				current: {
					label: ECardColor.Blue,
					rgb: ECardColorRGB.Blue,
				},
				vendorList: [
					{
						id: 'ee62588f-4c00-4c39-a1eb-00e25e097948',
						color: {
							label: ECardColor.Zephyr,
							rgb: ECardColorRGB.Zephyr,
						},
						section: ELabelSections.novelties,
					},
					{
						id: '8042b7c6-9e71-402b-aaff-fb92faef3a25',
						color: {
							label: ECardColor.Cherry,
							rgb: ECardColorRGB.Cherry,
						},
						section: ELabelSections.collections,
					},
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
				section: ELabelSections.collections,
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
					barcode: '4680382804135',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.XS]: {
					barcode: '4680382804142',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.S]: {
					barcode: '4680382804159',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.SM]: {
					barcode: '4680382804166',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
			},
			colorList: {
				activeColor: '0',
				current: {
					label: ECardColor.Black,
					rgb: ECardColorRGB.Black,
				},
				vendorList: [
					{
						id: '44022173-7159-430e-854c-c003db4baa7c',
						color: {
							label: ECardColor.White,
							rgb: ECardColorRGB.White,
						},
						section: ELabelSections.novelties,
					},
				],
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
				section: ELabelSections.novelties,
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
					barcode: '4680382804098',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.XS]: {
					barcode: '4680382804104',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.S]: {
					barcode: '4680382804111',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.SM]: {
					barcode: '4680382804128',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
			},
			colorList: {
				activeColor: '0',
				current: {
					label: ECardColor.White,
					rgb: ECardColorRGB.White,
				},
				vendorList: [
					{
						id: '650c69f0-eca4-4ac6-be73-1e551b622b55',
						color: {
							label: ECardColor.Black,
							rgb: ECardColorRGB.Black,
						},
						section: ELabelSections.collections,
					},
				],
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
				section: ELabelSections.sale,
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
					barcode: '4680382921160',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.XS]: {
					barcode: '4680382921177',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.S]: {
					barcode: '4680382921184',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.SM]: {
					barcode: '4680382921191',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.M]: {
					barcode: '4680382921207',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
				[ECardSize.ML]: {
					barcode: '4680382921214',
					amount: String(faker.datatype.number({ min: 1, max: 300 })),
				},
			},
			colorList: {
				activeColor: '0',
				current: {
					label: ECardColor.Black,
					rgb: ECardColorRGB.Black,
				},
				vendorList: [],
			},
		},
		recommend: [],
	},
];
