import {ApiProperty} from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString,MinLength, minLength } from 'class-validator';

export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty()
    password:string
}