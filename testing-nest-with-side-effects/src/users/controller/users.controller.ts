import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersDto, User } from '../models.ts/user';


@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers()
    }

    @Post()
    insertUser(@Body() user: User) {
        return this.usersService.insertUser(user)
    }


}
