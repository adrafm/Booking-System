import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrnetUser } from './current-user.decorator';
import { UserDocument } from './users/models/user.schema';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@CurrnetUser() user: UserDocument, @Res({ passthrough: true }) response: Response) {
    await this.authService.login(user, response);
    response.send(user);
  }

}
