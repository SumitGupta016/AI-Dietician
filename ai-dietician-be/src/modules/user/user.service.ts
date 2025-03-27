import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../repositories/users.repository';
import { AddUserRequestDto } from './dtos/add-user-request.dto';
import { GetUserResponseDto } from './dtos/get-user-response.dto';
import { UpdateUserRequestDto } from './dtos/update-user-request.dto';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async getUser(id: string): Promise<GetUserResponseDto> {
        try {
            const user = await this.userRepository.findOne({ where: { id } });
            if (!user) {
                throw new NotFoundException('User not found');
            }
            return { success: true, user };
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async addUser(userData: AddUserRequestDto): Promise<{ success: boolean; message: string }> {
        try {
            const existingUser = await this.userRepository.findOne({ where: { email: userData.email } });
            if (existingUser) {
                throw new BadRequestException('Email already exists');
            }
            await this.userRepository.create(userData);
            return { success: true, message: 'User added successfully' };
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async updateUser(id: string, userData: UpdateUserRequestDto): Promise<{ success: boolean; message: string }> {
        try {
            const user = await this.userRepository.findOne({ where: { id } });
            if (!user) {
                throw new NotFoundException('User not found');
            }
            await this.userRepository.update({ id }, userData);
            return { success: true, message: 'User updated successfully' };
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
