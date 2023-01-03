import { Module } from '@nestjs/common';
import { GenresResolver } from './resolver/genre.resolver';
import { GenreService } from './services/genre.service';

@Module({
  providers: [GenresResolver, GenreService],
})
export class GenreModule {}
