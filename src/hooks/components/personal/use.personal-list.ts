import { personalMock } from '../../../mocks/data/personal/personal.mock';

type SetRouterActive = {
	isActive: boolean;
};

export const usePersonalList = () => {
	const { data } = personalMock();

	const setRouterActive = ({ isActive }: SetRouterActive) =>
		isActive
			? 'personal__link personal__link--active link'
			: 'personal__link link';

	return { setRouterActive, data };
};
