import {
  CanActivate,
  ExecutionContext,
  HttpService,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  tokenValidationURL: string = `${process.env.AUTH_URL}/realms/${
    process.env.REALM || process.env.DEFAULT_REAL
  }/protocol/openid-connect/token/introspect`;

  constructor(
    private httpService: HttpService,
    private readonly authService: AuthService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.authService.validate(request, (response) => {
      const { data } = response;
      return data?.active === true;
    });
  }
}
