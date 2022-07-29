import { nanoid } from '@reduxjs/toolkit';

import withComponent from '@hocs/component/with.component';

import { UseListProps } from './list.type';

function useList<T, K = undefined>(props: UseListProps<T, K>) {
	const { Component, data, config } = props;

	return data.map((item) =>
		item
			? withComponent<T, K>({
					Component,
					children: item,
					key: nanoid(),
					config,
			  })()
			: null
	);
}

export default useList;
