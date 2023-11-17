import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Update the import path

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [PrismaModule]
})
export class ArticlesModule {}
