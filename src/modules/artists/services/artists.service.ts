import { Injectable } from '@nestjs/common';
import { Artist, CreateArtistInput, UpdateArtistInput } from 'src/graphql';
import axios from 'axios';

@Injectable()
export class ArtistsService {
  private axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.URL_ARTIST,
    });
  }

  removeUnderscoreInId(response) {
    return {
      id: response._id,
      ...response,
    };
  }

  // query
  async findOneById(id: string): Promise<Artist> {
    const { data } = await this.axiosInstance.get(id);
    return this.removeUnderscoreInId(data);
  }

  async findAll({ offset = 10, limit = 0 }): Promise<Artist[]> {
    const { data } = await this.axiosInstance.get(
      `?limit=${limit}&offset=${offset}`,
    );
    console.log(data);
    return data.items.map((item) => this.removeUnderscoreInId(item));
  }

  // mutation
  async create(jwt: string, input: CreateArtistInput): Promise<Artist> {
    const { data } = await this.axiosInstance.post('', input, {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });

    return this.removeUnderscoreInId(data);
  }

  async update(jwt: string, input: UpdateArtistInput): Promise<Artist> {
    const { data } = await this.axiosInstance.put(input.id, input, {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });

    return this.removeUnderscoreInId(data);
  }

  async delete(jwt: string, id: string): Promise<Boolean> {
    await this.axiosInstance.delete(id, {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });

    return true;
  }
}
