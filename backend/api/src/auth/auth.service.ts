import { Injectable, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  private readonly saltRounds = 10;
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async register(data: RegisterDto) {
    if (data.password !== data.confirmPassword) {
      throw new BadRequestException(
        'Password and confirm password do not match',
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, this.saltRounds);

    const user = await this.usersService.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: 'user',
    });

    return {
      message: 'User registered successfully',
      data: user,
    };
  }

  async login(data: LoginDto) {
    if (!data.email || !data.password) {
      throw new BadRequestException('Email and password are required');
    }

    const user = await this.usersService.findByEmail(data.email);

    if (!user) {
      throw new BadRequestException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      throw new BadRequestException('Invalid password');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      message: 'Login successful',
      data: user,
      token,
    };
  }
}
