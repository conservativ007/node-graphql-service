import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateGenreInput, UpdateGenreInput } from 'src/graphql';
import { GenreService } from '../services/genre.service';

@Resolver('Genre')
export class GenresResolver {
  constructor(private genreService: GenreService) {}

  @Query()
  async genre(@Args('id') id: string) {
    return await this.genreService.findOneById(id);
  }

  @Query()
  async genres(@Args('limit') limit: number, @Args('offset') offset: number) {
    return await this.genreService.findAll({ limit, offset });
  }

  // mutations

  @Mutation()
  async createGenre(
    @Args('input') createGenreInput: CreateGenreInput,
    @Context('jwt') jwt: string,
  ) {
    return await this.genreService.create(jwt, createGenreInput);
  }

  @Mutation()
  async updateGenre(
    @Args('input') updateGenreInput: UpdateGenreInput,
    @Context('jwt') jwt: string,
  ) {
    return await this.genreService.update(jwt, updateGenreInput);
  }

  @Mutation()
  async deleteGenre(@Args('id') id: string, @Context('jwt') jwt: string) {
    return await this.genreService.delete(jwt, id);
  }
}
