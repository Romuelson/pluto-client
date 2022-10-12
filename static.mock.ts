import { createServer } from '@mswjs/http-middleware';
import { handlers } from './src/mocks/services/handler/handler';

const PORT = 1488;
const httpServer = createServer(...handlers);

httpServer.listen(PORT, () => console.log(`[MSW] on port ${PORT}`));
