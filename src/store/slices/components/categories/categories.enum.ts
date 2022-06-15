export enum CategoriesAxiosAPI {
	requestCategories = '/api/data/categories',
	requestCategoriesHeader = 'api/data/categories/?section=header',
	requestCategoriesFooter = 'api/data/categories/?section=footer',
}

export enum CategoriesPrefixThunk {
	getHeaderList = 'categories/getHeaderListThunk',
	getFooterList = 'categories/getFooterListThunk',
}
