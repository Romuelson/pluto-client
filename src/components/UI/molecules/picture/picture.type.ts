import * as EPicture from './picture.enum';

export type TPictureSrc = string;
export type TPictureAlt = string;
export type TPictureMedia = string;
export type TPictureSrcSet = string;

export type TPictureImage = {
	src: TPictureSrc;
	alt: TPictureAlt;
};

export type TPictureSource = {
	media: TPictureMedia;
	srcSet: TPictureSrcSet;
};

export type TPictureProp = {
	img: TPictureImage;
	source: TPictureSource[];
};

export type TPictureConfig = {
	picture: TPictureProp;
};

export type TPictureDisplay = {
	size: string;
};

export type PictureTransferProps<TConfig> = {
	className: string;
	config: TConfig;
	display: TPictureDisplay;
};

export type PictureProps = PictureTransferProps<TPictureConfig>;
export type PictureListProps = PictureTransferProps<TPictureConfig[]>;

export type UsePictureReturn = {
	createPicture: (
		props: PictureProps
	) => React.FunctionComponentElement<PictureProps>;

	createPictureList: (
		props: PictureListProps
	) => React.FunctionComponentElement<PictureListProps>;
};

export type UsePicture = () => UsePictureReturn;
