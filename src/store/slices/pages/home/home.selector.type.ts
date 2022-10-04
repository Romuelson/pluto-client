import { Loading, SelectorState } from '@store/store.type';

import { SpecialListInfo } from '@components/UI/organisms/special/special.type';

export type TakeSpecialInfo = (...args: SelectorState<void>) => SpecialListInfo;
export type TakeSpecialInfoLoading = (...args: SelectorState<void>) => Loading;
