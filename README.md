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

### Error Handling

- Import the HttpExceptionFilter from the @app/error-handler module

```
...
import { HttpExceptionFilter } from '@app/error-handler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT);
}
bootstrap();
```

- If you need to access the filter via Dependency Injection, add it to the App Module imports

```
...
import { HttpExceptionFilter } from '@app/error-handler';

@Module({
  imports: [GuitarModule, AuthModule, HttpExceptionFilter],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## To Do

###

- NPM Workspaces

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
- ✅ Logging
- ✅ REST Error Handling
- Service Discovery with Eureka
- Testing
- API Documentation
- Monitoring

### Frontends

- REST
- Logging
- REST Error Handling
- Testing
- Authentication
- Authorization
- API Documentation
- Monitoring
- Service Discovery with Eureka
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
- REST Error Handling
- Testing
- Service Discovery with Eureka
- Websockets
- Developing and serving UI dashboards and/or pages
- API Documentation
- Monitoring

## Resources

- Keycloak on Docker: https://www.keycloak.org/getting-started/getting-started-docker
