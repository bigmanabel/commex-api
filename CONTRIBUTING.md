# Commex API Development Guidelines

## Code Standards

### TypeScript
- Use strict TypeScript configuration
- Always define return types for functions
- Use interfaces for object shapes
- Prefer `const` over `let` when possible

### NestJS
- Use dependency injection properly
- Keep controllers thin, move logic to services
- Use DTOs for all input/output
- Implement proper error handling with HTTP exceptions

### Database
- Always use transactions for multiple operations
- Use proper indexing for query performance
- Validate foreign key constraints
- Use migrations for schema changes

### Security
- Validate all inputs using class-validator
- Sanitize data before database operations
- Use environment variables for sensitive data
- Implement proper CORS configuration

### Testing
- Write unit tests for services
- Write integration tests for controllers
- Aim for at least 80% code coverage
- Use descriptive test names

## Git Workflow

1. Create feature branches from `main`
2. Use conventional commits (feat:, fix:, docs:, etc.)
3. Squash commits before merging
4. Ensure all tests pass before merging

## Performance

- Use pagination for large datasets
- Implement caching where appropriate
- Optimize database queries
- Use lazy loading for relationships

## Error Handling

- Use appropriate HTTP status codes
- Provide meaningful error messages
- Log errors for debugging
- Don't expose sensitive information in errors
