import app from './app';
import 'dotenv/config';

const PORT = process.env.API_PORT || 3001;

app.get('/', (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))