# AI Dietician

An AI-powered diet and nutrition management system that helps users create personalized meal plans and track their nutrition intake.

## Project Structure

The project is split into two main components:
- `ai-dietician-be`: Backend API built with NestJS
- `ai-dietician-fe`: Frontend application built with Next.js

## Backend Setup (ai-dietician-be)

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- Docker and Docker Compose
- Yarn (recommended)

### Installation

1. Navigate to the backend directory:
   ```bash
   cd ai-dietician-be
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Copy environment files:
   ```bash
   cp .env.example .env
   cp .env.local.example .env.local
   ```

4. Start the development environment:
   ```bash
   docker-compose up -d
   ```

   This will:
   - Start PostgreSQL database
   - Run database migrations
   - Start the NestJS server

5. Access the API:
   - API: http://localhost:3000
   - Swagger UI: http://localhost:3000/api

### Backend Features
- RESTful API endpoints
- PostgreSQL database with Sequelize ORM
- Docker containerization
- Jest for testing
- ESLint and Prettier for code quality
- TypeScript support

## Frontend Setup (ai-dietician-fe)

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd ai-dietician-fe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the application:
   - Open http://localhost:3001 in your browser

### Frontend Features
- Next.js 14+ with TypeScript
- Tailwind CSS for styling
- ESLint for code quality
- Modern UI components
- Responsive design
- API integration with backend

## Development Workflow

1. Start both backend and frontend servers:
   ```bash
   # In one terminal (backend)
   cd ai-dietician-be
   docker-compose up -d

   # In another terminal (frontend)
   cd ai-dietician-fe
   npm run dev
   ```

2. Make API calls from frontend to backend:
   - Backend API: http://localhost:3000
   - Frontend: http://localhost:3001

## Environment Variables

### Backend (.env)
- `PORT`: API server port (default: 3000)
- `POSTGRES_USER`: Database username
- `POSTGRES_PASSWORD`: Database password
- `POSTGRES_DB`: Database name
- `JWT_SECRET`: JWT secret key

### Frontend (.env)
- `NEXT_PUBLIC_API_URL`: Backend API URL
- `NEXT_PUBLIC_APP_NAME`: Application name

## Testing

### Backend Tests
```bash
cd ai-dietician-be
yarn test
```

### Frontend Tests
```bash
cd ai-dietician-fe
npm run test
```

## Deployment

The project is containerized using Docker and Docker Compose. For production deployment:

1. Build production images:
   ```bash
   docker-compose -f docker-compose.prod.yml build
   ```

2. Start production containers:
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
