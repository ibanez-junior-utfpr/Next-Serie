import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser() {
    return this.userService.getUser();
  }

  @Get(':id')
  async getUserById(
    @Res() response: Response,
    @Req() request: Request,
  ): Promise<Response> {
    const idUser = request.params.id;
    return response.send(idUser || 0);
  }
}
