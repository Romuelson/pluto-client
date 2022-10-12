/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */

import url from 'url';
import path from 'path';

import express from 'express';

import { createMiddleware } from '@mswjs/http-middleware';
import { handlers } from './src/mocks/services/handler/handler';

const PORT = process.env.PORT || 80;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(__dirname));
app.use(createMiddleware(...handlers));
app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
	res.sendFile(
		path.join(__dirname, 'dist', 'index.9fea96d3bf87850de329.min.html')
	);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
