import { setupWorker } from 'msw';
import { handlers } from '../handler/handler';

export const worker = setupWorker(...handlers);
