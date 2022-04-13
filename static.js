const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 80;

const app = express();
app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
	res.sendFile(
		path.join(
			__dirname, 'dist', 'index.754d54f8b0188402d25c.min.html'
		)
	);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
