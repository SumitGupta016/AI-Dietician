import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UserService } from './user.service';
import { User } from 'models/user.model';

@Controller('api/users')
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Successful Response' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getUser(@Param('id') id: string): Promise<User> {
    return await this.userService.getUser(id);
  }

  @Post('add')
  @ApiResponse({ status: 201, description: 'User Successfully Added' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async addUser(@Body() payload: CreateUserDto): Promise<User> {
    return await this.userService.addUser(payload);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Put('update/:id')
  @ApiResponse({ status: 200, description: 'User Successfully Updated' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async updateUser(@Param('id') id: string, @Body() payload: UpdateUserDto): Promise<User> {
    return await this.userService.updateUser(id, payload);
  }
}
