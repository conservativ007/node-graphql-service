import { Module } from '@nestjs/common';
import { BandsModule } from '../bands/bands.module';
import { ArtistsResolver } from './resolver/artists.resolver';
import { ArtistsService } from './services/artists.service';

@Module({
  providers: [ArtistsResolver, ArtistsService],
  imports: [BandsModule],
})
export class ArtistsModule {}
