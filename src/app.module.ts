import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { GenreModule } from './modules/genre/genre.module';
import { ConfigModule } from '@nestjs/config';
import { BandsModule } from './modules/bands/bands.module';
import { ArtistsModule } from './modules/artists/artists.module';
import { TracksModule } from './modules/tracks/tracks.module';

@Module({
  imports: [
    TracksModule,
    GenreModule,
    BandsModule,
    ArtistsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      context: ({ req }) => ({
        jwt: req.headers.authorization,
      }),
    }),
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
