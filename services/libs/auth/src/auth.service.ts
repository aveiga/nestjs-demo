import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  tokenValidationURL: string = `${process.env.AUTH_URL}/realms/${
    process.env.REALM || process.env.DEFAULT_REALM
  }/protocol/openid-connect/token/introspect`;

  constructor(private httpService: HttpService) {}

  validate(
    request: any,
    validator: any,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const headers = request.headers;
    const authHeader = headers.authorization?.split(' ');

    if (authHeader && authHeader[0] === 'Bearer' && authHeader[1].length > 0) {
      const params = new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        token: authHeader[1],
      });

      return this.httpService
        .post(this.tokenValidationURL, params)
        .pipe(map(validator));
    } else {
      return false;
    }
  }
}
