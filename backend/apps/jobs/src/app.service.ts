import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly http: HttpService) {}
}
