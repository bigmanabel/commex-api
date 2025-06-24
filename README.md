# 🛒 Commex API

<div align="center">

**A comprehensive e-commerce product management API**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

_Built with modern technologies for scalable e-commerce solutions_

</div>

## 📋 Description

Commex API is a robust e-commerce backend service that provides comprehensive product management capabilities. Built with modern technologies including NestJS, TypeScript, PostgreSQL, and TypeORM, it offers a scalable foundation for e-commerce applications.

## ✨ Features

- **Product Management**: Complete CRUD operations for products with image support
- **Category Management**: Organize products into categories
- **Region Management**: Support for geographical regions
- **Shopping Cart**: Add, update, and manage cart items
- **Stock Management**: Track product inventory
- **Advanced Filtering**: Search products by name, category, region, and price range
- **Pagination**: Efficient data loading with pagination support
- **API Documentation**: Interactive Swagger/OpenAPI documentation
- **Data Validation**: Comprehensive input validation using class-validator
- **Database Relations**: Well-structured entity relationships
- **File Upload**: Support for product image uploads

## 🛠️ Technology Stack

- **Backend Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Validation**: class-validator & class-transformer
- **Documentation**: Swagger/OpenAPI
- **File Upload**: Multer
- **Container**: Docker & Docker Compose

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker and Docker Compose (optional)
- PostgreSQL (if not using Docker)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd commex-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**

   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

4. **Start the database (using Docker)**

   ```bash
   docker-compose up -d db
   ```

5. **Run the application**

   ```bash
   # Development mode with auto-reload
   npm run start:dev

   # Production mode
   npm run start:prod
   ```

The API will be available at `http://localhost:3000`
Swagger documentation: `http://localhost:3000/api`

## 🐳 Docker Setup

### Using Docker Compose (Recommended)

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Manual Database Setup

If you prefer to run PostgreSQL manually:

```bash
# Create database
createdb commex_db

# Update .env with your database credentials
DB_HOST=localhost
DB_PORT=5432
DB_NAME=commex_db
DB_USER=your_username
DB_PASS=your_password
```

## 📚 API Documentation

### Interactive Documentation

Visit `http://localhost:3000/api` for the interactive Swagger documentation.

### Main Endpoints

#### Products

- `GET /products` - Get all products with filtering and pagination
- `GET /products/:id` - Get a specific product
- `POST /products` - Create a new product (with image upload)
- `PATCH /products/:id` - Update a product
- `DELETE /products/:id` - Delete a product

#### Categories

- `GET /categories` - Get all categories
- `GET /categories/:id` - Get a specific category
- `POST /categories` - Create a new category
- `PATCH /categories/:id` - Update a category
- `DELETE /categories/:id` - Delete a category

#### Regions

- `GET /regions` - Get all regions
- `POST /regions` - Create a new region
- `PATCH /regions/:id` - Update a region
- `DELETE /regions/:id` - Delete a region

#### Cart

- `GET /cart` - Get cart items
- `POST /cart` - Add item to cart
- `PATCH /cart/:id` - Update cart item quantity
- `DELETE /cart/:id` - Remove item from cart

#### Stock

- `GET /stock` - Get stock information for all products
- `GET /stock/:id` - Get stock for a specific product

### Query Parameters

#### Product Filtering

```bash
GET /products?name=laptop&category=1&region=2&min=100&max=1000&limit=10&offset=0
```

- `name`: Filter by product name (partial match)
- `category`: Filter by category ID
- `region`: Filter by region ID
- `min`: Minimum price filter
- `max`: Maximum price filter
- `limit`: Number of items to return (default: 10)
- `offset`: Number of items to skip (default: 0)

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Run tests with coverage
npm run test:cov

# Run tests in watch mode
npm run test:watch
```

## 🔧 Development

### Project Structure

```
src/
├── app.module.ts          # Main application module
├── main.ts               # Application entry point
├── cart/                 # Shopping cart module
├── categories/           # Categories module
├── products/            # Products module
├── regions/             # Regions module
├── stock/               # Stock management module
└── shared/              # Shared utilities and DTOs
```

### Code Style

The project uses ESLint and Prettier for code formatting:

```bash
# Format code
npm run format

# Lint code
npm run lint
```

### Building for Production

```bash
# Build the application
npm run build

# Start production server
npm run start:prod
```

## 🔒 Security Considerations

- **Environment Variables**: Never commit `.env` files to version control
- **Database**: Use strong passwords and limit database access
- **Validation**: All inputs are validated using class-validator
- **CORS**: Configured to allow cross-origin requests (configure for production)
- **Synchronize**: Database synchronization is disabled in production

## 🚦 Environment Variables

| Variable   | Description       | Default       |
| ---------- | ----------------- | ------------- |
| `DB_HOST`  | Database host     | `localhost`   |
| `DB_PORT`  | Database port     | `5432`        |
| `DB_NAME`  | Database name     | `commex_db`   |
| `DB_USER`  | Database username | `postgres`    |
| `DB_PASS`  | Database password | `pass123`     |
| `PORT`     | Application port  | `3000`        |
| `NODE_ENV` | Environment       | `development` |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔮 Future Enhancements

- [ ] Authentication and Authorization (JWT)
- [ ] User management system
- [ ] Order management
- [ ] Payment integration
- [ ] Advanced search with Elasticsearch
- [ ] Caching with Redis
- [ ] Rate limiting
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Multi-language support

## 📞 Support

If you have any questions or need help, please open an issue.
