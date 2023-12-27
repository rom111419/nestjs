import { GoogleOAuthGuard } from './google-oauth.guard';
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { GoogleOauthService } from './google-oauth.service';

@Controller('auth')
export class GoogleOauthController {
  constructor(private readonly oauthService: GoogleOauthService) {}

  @Get()
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Request() req) {
    console.log(req);
  }

  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req) {
    return this.oauthService.googleLogin(req);
  }
}
