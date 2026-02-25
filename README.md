# Wallet API (Node.js Backend)

Backend REST API for the Wallet Mobile Application.

## Features

-   CRUD Transactions
-   RESTful API structure
-   RateLimit

## Tech Stack

-   Node.js
-   Express.js
-   Postgres Database
-   JWT
-   dotenv
-   redis

## Installation

``` bash
git clone https://github.com/zachtix/wallet-api-rn.git
cd wallet-api-rn
npm install
npm run dev
```

## Environment Variables (.env)

    PORT=5000
    DATABASE_URL=postgresql_database_url
    JWT_SECRET=your_secret_key

    UPSTASH_REDIS_REST_URL=upstash_url
    UPSTASH_REDIS_REST_TOKEN=upstash_token

    API_URL=url_api_fot_cronjob

## API Endpoints (Example)

  Method  | Endpoint           |  Description
  --------| -------------------| -----------------------
  POST    | /api/auth/register |  Register user
  POST    | /api/auth/login    |  Login user
  GET     | /api/transactions  |  Get user transactions
  POST    | /api/transactions  |  Create transaction
