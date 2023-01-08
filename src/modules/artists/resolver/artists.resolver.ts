import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  Artist,
  Band,
  CreateArtistInput,
  UpdateArtistInput,
} from 'src/graphql';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { ArtistsService } from '../services/artists.service';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(
    private artistService: ArtistsService,
    private bandsService: BandsService,
  ) {}

  // query
  @Query()
  async artist(@Args('id') id: string) {
    const test = await this.artistService.findOneById(id);

    // const bandIds = artist.bandsIds;
    console.log(test);
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

  // this will be implementation function to inject band into Artist
  // function(){...}

  // @ResolveField(() => Band)
  // band(@Parent() artist: Artist) {
  //   // return this.artistService.getBand(artist.)
  // }
}
