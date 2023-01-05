import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateArtistInput, UpdateArtistInput } from 'src/graphql';
import { ArtistsService } from '../services/artists.service';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(private artistService: ArtistsService) {}

  // query
  @Query()
  async artist(@Args('id') id: string) {
    return this.artistService.findOneById(id);
  }

  @Query()
  async artists(@Args('offset') offset: number, @Args('limit') limit: number) {
    return this.artistService.findAll({ offset, limit });
  }

  // mutation
  @Mutation()
  async createArtist(
    @Args('input') input: CreateArtistInput,
    @Context('jwt') jwt: string,
  ) {
    // console.log(input);
    return await this.artistService.create(jwt, input);
  }

  @Mutation()
  async updateArtist(
    @Args('input') input: UpdateArtistInput,
    @Context('jwt') jwt: string,
  ) {
    return this.artistService.update(jwt, input);
  }

  @Mutation()
  async deleteArtist(@Args('id') id: string, @Context('jwt') jwt: string) {
    return this.artistService.delete(jwt, id);
  }
}
