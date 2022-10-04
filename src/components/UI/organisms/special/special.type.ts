import {
	SpecialInfoProps,
	SpecialInfoView,
} from './elements/special-info/special-info.type';

export type SpecialListInfo = Omit<SpecialInfoProps, 'view'>[];

export type SpecialDataInfo = {
	listInfo: SpecialListInfo;
	view: SpecialInfoView;
};

export type SpecialData = {
	info: SpecialDataInfo;
};

export type SpecialProps = {
	className?: string;
	data: SpecialData;
};
