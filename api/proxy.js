const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const BASE_URL = 'https://pentaigen-877531618582.us-central1.run.app';

app.use(cors());
app.use(express.json());

// Proxy endpoint for creating sessions
app.post('/api/sessions', async (req, res) => {
    try {
        console.log('Creating session...');
        const response = await fetch(`${BASE_URL}/apps/app/users/web-user-01/sessions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        console.log('Session response status:', response.status);
        const text = await response.text();
        console.log('Session response:', text);
        
        if (!text) {
            res.json({ session_id: 'web-session-' + Date.now() });
            return;
        }
        
        const data = JSON.parse(text);
        res.json(data);
    } catch (error) {
        console.error('Session creation error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Proxy endpoint for running chat
app.post('/api/run', async (req, res) => {
    try {
        console.log('Running chat with body:', req.body);
        const response = await fetch(`${BASE_URL}/run`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body)
        });

        console.log('Run response status:', response.status);
        const text = await response.text();
        console.log('Run response length:', text.length);
        console.log('Run response (first 500 chars):', text.substring(0, 500));
        
        try {
            const data = JSON.parse(text);
            res.json(data);
        } catch (e) {
            console.error('Failed to parse response:', e);
            res.status(500).json({ error: 'Invalid JSON response from API', details: text.substring(0, 500) });
        }
    } catch (error) {
        console.error('Chat run error:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = app;
