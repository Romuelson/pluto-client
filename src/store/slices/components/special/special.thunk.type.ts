import { SpecialListInfo } from '@components/UI/organisms/special/special.type';
import { SpecialRecipient } from './special.enum';

export type SpecialInfoData = {
	info: SpecialListInfo;
};

export type GetSpecialInfoPayload = {
	data: SpecialListInfo;
};

export type GetSpecialInfoArgs = {
	recipient: SpecialRecipient;
};
