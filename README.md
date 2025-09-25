 Features (highlights)

Blazing-fast React frontend with modern UI components

 Robust Node/Express API with clean routing

 MongoDB for products, users, orders, carts

 JWT authentication, role-based access (user/admin)

 Payment gateway–ready (Stripe/Razorpay placeholder)

 Image hosting–ready (Cloudinary placeholder)

 Developer-friendly DX (env-driven configs, API wrappers)

 Project Structure
forever-full-stack/
├─ backend/        # Express + MongoDB API
├─ frontend/       # React app
└─ How_To_Run_Project.pdf  # Existing quick guide (PDF)


Repo shows frontend/ and backend/ directories and the PDF in root. Languages: ~98.6% JavaScript. 
GitHub

🚀 Quick Start (Local)

Prereqs: Node 18+, npm (or pnpm/yarn), MongoDB (local or Atlas).

1) Clone
git clone https://github.com/Ayu1932/forever-full-stack.git
cd forever-full-stack

2) Backend setup
cd backend
npm install


Create backend/.env:

# --- Core ---
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority

# --- Auth ---
JWT_SECRET=super_secret_jwt_string
JWT_EXPIRES_IN=7d

# --- CORS ---
CLIENT_URL=http://localhost:5173

# --- (Optional) Payments ---
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# --- (Optional) Cloudinary ---
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx


Run backend:

npm run dev   # nodemon dev server (or: npm start)


If your scripts are named differently, use npm run to list them and swap in the right command.

3) Frontend setup

In a new terminal:

cd frontend
npm install


Create frontend/.env (Vite style shown; if CRA, use REACT_APP_ vars):

VITE_API_URL=http://localhost:5000/api


Run frontend:

npm run dev    # starts Vite dev server (or: npm start)


Visit: http://localhost:5173 (or whatever your frontend dev port is)

🔌 API Endpoints (typical examples)

Adjust names to match your routes; these are common patterns for an e-com MERN API.

POST /api/auth/register — create account

POST /api/auth/login — login + JWT

GET /api/products — list products

GET /api/products/:id — product details

POST /api/cart — add to cart

POST /api/orders — create order

GET /api/orders/me — my orders (auth)

POST /api/payments/create-intent — Stripe intent (if enabled)

🧪 Test Users (optional)

If you seed users/products, document it here:

Admin: admin@example.com / Admin@123
User : user@example.com  / User@1234


If you don’t have seed scripts yet, add one in backend/scripts/seed.js and a package script:
"seed": "node scripts/seed.js"

Screenshots

Create a folder assets/screenshots/ at repo root (or inside frontend/public/screenshots/) and drop images there. Then reference them here:

Home	Product	Cart	Checkout

	
	
	

Tip: In GitHub Issues/PRs you can drag-drop images and copy the generated Markdown here.

Environment Variables (recap)

Frontend

VITE_API_URL — base URL of your backend API (Vite)
If using CRA: REACT_APP_API_URL

Backend

PORT — API port

MONGO_URI — MongoDB connection string

JWT_SECRET, JWT_EXPIRES_IN

CLIENT_URL — allowed origin for CORS

Optional: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET

Optional: CLOUDINARY_* keys

🔁 Concurrency (optional)

If you add a root package.json with concurrently:

{
  "scripts": {
    "dev": "concurrently -n api,web -c green,cyan \"npm:dev -w backend\" \"npm:dev -w frontend\""
  },
  "workspaces": ["backend", "frontend"]
}


Then just run from the repo root:

npm run dev

☁️ Deployment (two easy paths)
Option A — Backend on Render, Frontend on Vercel

Backend (Render)

Create a new Web Service from your GitHub repo → backend/.

Environment → Node 18+.

Build command: npm install

Start command: npm start (or node server.js / npm run prod)

Add env vars from backend/.env.

Note the public URL, e.g. https://your-api.onrender.com.

Frontend (Vercel)

Import project, pick the frontend/ directory.

Framework preset: Vite (or React).

Env var: VITE_API_URL=https://your-api.onrender.com/api.

Deploy → get your site link.

Option B — All-in on Railway/Render (monorepo)

Deploy backend first → get API URL.

Deploy frontend separately, pointing to the API URL.

Make sure CORS in backend allows your frontend domain.

You already keep a How_To_Run_Project.pdf in the repo root — keep that as a quick offline guide, and link back to this README for full details. 
GitHub

🧰 Scripts (typical)

backend/package.json

{
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js",
    "lint": "eslint ."
  }
}


frontend/package.json

{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}


If your filenames differ (e.g., index.js), update the scripts accordingly.

🧱 Tech Stack

Frontend: React, Vite/CRA, React Router, Context/Redux (as implemented)

Backend: Node.js, Express

DB: MongoDB (Atlas/local)

Auth: JWT

Payments/Images: Stripe/Razorpay, Cloudinary (optional)

Language: JavaScript (dominant in repo). 
GitHub

🧨 Roadmap (ideas)

✅ Product catalog, cart, checkout

 Order history, wishlists, coupons

 Admin dashboard: products, orders, users

 CI/CD with GitHub Actions

 E2E tests (Playwright/Cypress)

 Contributing

Fork the repo

Create a feature branch: git checkout -b feat/awesome-thing

Commit: git commit -m "feat: add awesome thing"

Push: git push origin feat/awesome-thing

Open a Pull Request

📄 License

MIT — do whatever, just don’t remove credits.

🙌 Credits

Built by Ayush Pandav — forever shipping.
