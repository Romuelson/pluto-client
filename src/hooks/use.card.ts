import { useAppSelector } from './use.redux';
import { takeCardsType } from '../store/slices/data/data.selectors';
import { ELabelSections } from '../types/data/product-card/product-card.enum';

export const useCardsType = (type: ELabelSections) =>
	useAppSelector((state) => takeCardsType(state, type));
