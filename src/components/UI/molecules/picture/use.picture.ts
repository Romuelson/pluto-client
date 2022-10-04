import { createElement } from 'react';

import Picture from './picture.comp';
import PictureList from './elements/picture-list/picture-list.comp';

import { UsePicture } from './picture.type';

export const usePicture: UsePicture = () => ({
	createPicture: (props) => createElement(Picture, props),
	createPictureList: (props) => createElement(PictureList, props),
});
