# nestjs-demo

## Start Keycloak

```
docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:12.0.2
```

## Create Client

- Create client
- Confidential
- Direct Access Grants Enabled
- Service Accounts Enabled

## Guidelines

### Authentication and Authorization

- importing the AuthModule will enforce authentication
- importing the AuthModule will enforce authorization (no zero-scope endpoints)
- `@Scopes` decorator is to be used to protected a REST endpoint

## To Do

### Resource Servers

- ✅ REST
- Messaging using RabbitMQ
- Bulk APIs
- Input Validation
- Feign Client
- Database Versioning
- ABAC
- ✅ Authentication
- ✅ Authorization
- Rate Limiting
- Logging
- Error Handling
- Testing
- API Documentation
- Monitoring

### Frontends

- ✅ REST
- Logging
- Error Handling
- Testing
- ✅ Authentication
- ✅ Authorization
- API Documentation
- Monitoring
- Messaging using RabbitMQ
- Websockets
- Developing and serving UI fragments

### Client Servers

- Messaging using RabbitMQ
- Input Validation
- Feign Client
- Authentication
- Rate Limmiting
- Logging
- Error Handling
- Testing
- Websockets
- Developing and serving UI dashboards and/or pages
- API Documentation
- Monitoring

## Resources

- Keycloak on Docker: https://www.keycloak.org/getting-started/getting-started-docker
