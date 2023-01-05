import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateBandInput, UpdateBandInput } from 'src/graphql';
import { BandsService } from '../services/bands.service';

@Resolver('Band')
export class BandsResolver {
  constructor(private bandService: BandsService) {}

  // name of the method MUST be the same
  // like graphql schema -> type Query
  @Query()
  async band(@Args('id') id: string) {
    return await this.bandService.findOneById(id);
  }

  @Query()
  async bands(@Args('limit') limit: number, @Args('offset') offset: number) {
    return await this.bandService.findAll({ limit, offset });
  }

  // mutation

  @Mutation()
  async createBand(
    @Args('input') input: CreateBandInput,
    @Context('jwt') jwt: string,
  ) {
    return await this.bandService.create(jwt, input);
  }

  @Mutation()
  async updateBand(
    @Args('input') input: UpdateBandInput,
    @Context('jwt') jwt: string,
  ) {
    return this.bandService.update(jwt, input);
  }

  @Mutation()
  async deleteBand(@Args('id') id: string, @Context('jwt') jwt: string) {
    return this.bandService.delete(jwt, id);
  }
}
