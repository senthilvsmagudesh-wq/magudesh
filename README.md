# AI Chat App - Dark Mode with Gemini Style UI

A modern, dark-themed chat application with file upload support and Gemini-inspired UI design.

## 🚨 CORS Issue Solution

The API server is blocking direct browser requests due to CORS (Cross-Origin Resource Sharing) restrictions. Here are **three solutions**:

---

## Solution 1: Use the Proxy Server (Recommended) ⭐

This is the easiest and most reliable solution.

### Setup Instructions:

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `public` folder and move the HTML file:**
   ```bash
   mkdir public
   mv chat-app-proxy.html public/
   ```

4. **Start the proxy server:**
   ```bash
   npm start
   ```

5. **Open your browser:**
   - Navigate to: `http://localhost:3000/chat-app-proxy.html`

The proxy server will handle all API requests and bypass CORS restrictions.

---

## Solution 2: Use a CORS Proxy Service

Use a public CORS proxy (for testing only):

1. Open `chat-app.html`
2. Change the `BASE_URL` to:
   ```javascript
   const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://pentaigen-877531618582.us-central1.run.app';
   ```

**Note:** Public CORS proxies may be slow or unreliable. This is only for testing.

---

## Solution 3: Browser Extension

Install a CORS unblock extension:

### For Chrome:
- **CORS Unblock** or **Allow CORS**
- Install from Chrome Web Store
- Enable the extension
- Open `chat-app.html` directly in browser

### For Firefox:
- **CORS Everywhere**
- Install from Firefox Add-ons

**Warning:** Only use this for development. Never use in production.

---

## Solution 4: Contact API Administrator

Ask the API administrator to enable CORS by adding these headers to the API server:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

---

## 📁 Files Included

1. **chat-app.html** - Standalone version (requires CORS solution)
2. **chat-app-proxy.html** - Version for use with proxy server
3. **proxy-server.js** - Node.js proxy server
4. **package.json** - Dependencies for proxy server

---

## 🎨 Features

- ✨ Dark mode with violet/purple accents
- 🎯 Gemini-style modern UI
- 📎 File upload support (images, PDFs, text files)
- 💬 Markdown rendering in responses
- 🔄 Auto-scroll to latest message
- ⚡ Thinking animation during API calls
- 🔄 Session reset functionality
- 📱 Responsive design

---

## 🚀 Quick Start (Proxy Method)

```bash
# 1. Install dependencies
npm install

# 2. Create public folder
mkdir public

# 3. Move the proxy version to public folder
mv chat-app-proxy.html public/

# 4. Start server
npm start

# 5. Open browser
# Navigate to: http://localhost:3000/chat-app-proxy.html
```

---

## 📝 How It Works

### Direct API (chat-app.html):
```
Browser → API Server (❌ CORS Error)
```

### With Proxy (chat-app-proxy.html):
```
Browser → Proxy Server → API Server (✅ Works!)
```

---

## 🔧 Troubleshooting

### "Session not initialized" Error
- Make sure the proxy server is running
- Check console for error messages
- Verify the API URL is correct

### "Failed to fetch" Error
- Check your internet connection
- Verify the API server is online
- Try using the proxy server method

### Files not uploading
- Check file size (should be < 10MB)
- Verify file type is supported
- Check browser console for errors

---

## 🎯 Supported File Types

- **Images:** .jpg, .jpeg, .png, .gif, .webp
- **Documents:** .txt, .pdf, .doc, .docx
- **Other:** Most text-based files

---

## 💡 Tips

1. **For Development:** Use the proxy server method
2. **For Production:** Contact API admin to enable CORS
3. **File Upload:** Works best with images (preview available)
4. **Performance:** API requests take ~20 seconds (normal)

---

## 📞 Support

If you continue to experience issues:

1. Check the browser console (F12) for error messages
2. Verify the API server is accessible
3. Try the proxy server method first
4. Contact the API administrator for CORS configuration

---

## 🔒 Security Note

The proxy server is for **development only**. For production:
- Use proper CORS configuration on the API server
- Implement authentication
- Use HTTPS
- Add rate limiting

---

## License

MIT License - Free to use and modify
