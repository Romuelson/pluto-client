type ObjType = {
	title: string;
	description: string;
	vendorCode: string;
	brand: string;
	manufacturer: string;
	color: string[];
	size: Record<string, unknown>;
	price: string;
};

const obj: ObjType = {
	title: 'Бюстгальтер мягкий',
	description:
		'Комфортная коллекция белья из нежной микрофибры с эластичным кружевом, которое добавляет утонченности и легкости. Мягкий бюстгальтер подчеркнет естественную форму, обеспечит поддержку груди.',
	vendorCode: '2771F1327',
	brand: 'Дефиле',
	manufacturer: 'Favirite',
	color: ['Мята', 'Розовый'],
	size: {
		'75/B': '4680382923591',
		'75/C': '4680382923607',
		'75/D': '4680382923614',
		'80/B': '4680382923621',
		'80/C': '4680382923638',
	},
	price: '1799',
};

const obj2: ObjType = {
	title: 'Бюстгальтер push-up',
	description:
		'Коллекция Gracie выполнена из мягкого эластичного кружева с цветочным узором природных оттенков. Широкий модельный ряд позволяет выбрать любимую комфортную модель на каждый день. Бюстгальтер push-up идеально подходит для небольшой груди, делая её визуально на один или два размера больше.',
	vendorCode: '2631F1125',
	brand: 'Дефиле',
	manufacturer: 'Gracie',
	color: ['Зефир'],
	size: {
		'70/A': {
			barcode: 4680382890671,
			amount: 12,
		},
		'70/B': {
			barcode: 4680382890688,
			amount: 12,
		},
		'75/A': {
			barcode: 4680382890695,
			amount: 12,
		},
		'75/B': {
			barcode: 4680382890701,
			amount: 12,
		},
		'75/C': {
			barcode: 4680382890718,
			amount: 12,
		},
		'75/D': {
			barcode: 4680382890558,
			amount: 12,
		},
		'80/B': {
			barcode: 4680382890732,
			amount: 12,
		},
		'80/C': {
			barcode: 4680382890565,
			amount: 12,
		},
		'80/D': {
			barcode: 4680382890572,
			amount: 12,
		},
		'85/C': {
			barcode: 4680382890589,
			amount: 12,
		},
		'85/D': {
			barcode: 4680382890596,
			amount: 12,
		},
		'80/A': {
			barcode: 4680382890725,
			amount: 0,
		},
	},
	price: '1999',
};

export default obj;
