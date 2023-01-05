import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTrackInput, UpdateTrackInput } from 'src/graphql';
import { TracksService } from '../services/tracks.service';

@Resolver('Track')
export class TracksResolver {
  constructor(private tracksService: TracksService) {}

  // query
  @Query()
  async track(@Args('id') id: string) {
    return this.tracksService.getOneById(id);
  }

  @Query()
  async tracks(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.tracksService.getAll({ limit, offset });
  }

  // mutation
  @Mutation()
  async createTrack(
    @Args('input') input: CreateTrackInput,
    @Context('jwt') jwt: string,
  ) {
    return this.tracksService.create(jwt, input);
  }

  @Mutation()
  async updateTrack(
    @Args('input') input: UpdateTrackInput,
    @Context('jwt') jwt: string,
  ) {
    return this.tracksService.update(jwt, input);
  }

  @Mutation()
  async deleteTrack(@Args('id') id: string, @Context('jwt') jwt: string) {
    return this.tracksService.delete(id, jwt);
  }
}
