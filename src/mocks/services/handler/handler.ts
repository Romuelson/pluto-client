import { productCardRouter } from '../../data/product-card/product-card.router';
import { infoRouter } from '../../components/info/info.router';

export const handlers = [...productCardRouter, ...infoRouter];
