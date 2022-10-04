import { createElement } from 'react';

import CardPicture from '../elements/card-picture/card-picture.comp';
import CardPictureList from '../elements/card-picture-list/card-picture-list.comp';

import { UseCardPicture } from '../card.type';

export const useCardPicture = (props: UseCardPicture) =>
	createElement(props.display.page ? CardPictureList : CardPicture, props);
