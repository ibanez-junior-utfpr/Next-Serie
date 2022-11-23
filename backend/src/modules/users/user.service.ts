import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): string {
    return 'rota pra usuario';
  }
  getUserById(id: string): string {
    return id;
  }
}
