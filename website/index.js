import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

app.get('/question', (req, res) => {
    const questionPath = path.join(__dirname, 'data/question.json');
    fs.readFile(questionPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier :', err);
            return res.status(500).json({ error: 'Erreur lors du chargement des questions.' });
        }

        const jsonData = JSON.parse(data);
        res.json(jsonData);
    });
});

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
