import { Controller, Get, Param, Post, Redirect } from '@nestjs/common';
import { log } from 'console';

@Controller('cats')
export class CatsController {
    @Post()
    create(): string {
        return 'This action adds a new cat';
    }
    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} cat`
    }
}
