# Cloudflare Workers AI Test

This project demonstrates using AI within Cloudflare Workers. Follow the steps below to set up, run, and deploy the project.

## Requirements

1. **Cloudflare Account**: If you don't have one, sign up at [Cloudflare](https://www.cloudflare.com/).

2. **Node.js and npm**: Ensure you have Node.js and npm installed on your machine. You can download them from [Node.js official site](https://nodejs.org/).

## Setup Instructions

### 1. Sign into Cloudflare

Use `wrangler` to log in to your Cloudflare account. Open your terminal and run:

```bash
npx wrangler login
```

This command will open a browser window where you can log in and accept the terms.

### 2. Verify Login

After logging in, verify your login status with:

```bash
npx wrangler whoami
```

This command should display your Cloudflare account details.

### 3. Install Dependencies

Navigate to your project directory and install the necessary dependencies:

```bash
npm install
```

## Running the Project

### Locally

To run the project locally, use:

```bash
npm start
```

### Deploying to Cloudflare

To deploy the project to Cloudflare, use:

```bash
npm run deploy
```

This command will build and deploy your project to Cloudflare Workers.

## Additional Information

- **Cloudflare Workers Documentation**: [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- **Wrangler Documentation**: [Wrangler Docs](https://developers.cloudflare.com/workers/wrangler/)

## Contact

For any issues or questions, feel free to reach out via the repository's issue tracker or contact support.
