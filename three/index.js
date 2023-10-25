import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.get('/', (req, res) => {
	res.sendFile(join(__dirname, "index.html"));
});

const port = 8080;
const host = 'localhost';

app.listen(port, host, () => {
	console.log(`Running http://${host}:${port}`);
})