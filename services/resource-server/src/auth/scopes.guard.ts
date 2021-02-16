import {
  CanActivate,
  ExecutionContext,
  HttpService,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SCOPES_KEY } from './scopes.decorator';
import { AuthService } from './auth.service';

@Injectable()
export class ScopesGuard implements CanActivate {
  tokenValidationURL: string = `${process.env.AUTH_URL}/realms/${
    process.env.REALM || process.env.DEFAULT_REAL
  }/protocol/openid-connect/token/introspect`;

  constructor(
    private httpService: HttpService,
    private reflector: Reflector,
    private readonly authService: AuthService,
  ) {}

  canActivate(context: ExecutionContext) {
    const requiredScopes = this.reflector.getAllAndOverride<String[]>(
      SCOPES_KEY,
      [context.getHandler(), context.getClass()],
    );

    const request = context.switchToHttp().getRequest();
    return this.authService.validate(request, (response) => {
      const { data } = response;
      const scopesInJwtToken = data.scope.split(' ');

      return scopesInJwtToken.some((s) => requiredScopes.indexOf(s) !== -1);
    });
  }
}
