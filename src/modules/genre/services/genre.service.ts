import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateGenreInput, Genre } from 'src/graphql';

@Injectable()
export class GenreService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.URL_GENRE,
    });
  }

  mapResponse(response): Genre {
    return {
      id: response._id,
      ...response,
    };
  }

  // methods

  async findOneById(id): Promise<Genre> {
    const { data } = await this.client.get(id);

    return this.mapResponse(data);
  }

  async findAll({ limit = 10, offset = 0 }) {
    const { data } = await this.client.get(`?limit=${limit}&offset=${offset}`);

    return data.items.map((item) => {
      return {
        id: item._id,
        ...item,
      };
    });
  }

  async create(jwt: string, genre: CreateGenreInput): Promise<Genre> {
    const { data } = await this.client.post('', genre, {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });
    return this.mapResponse(data);
  }

  async delete(jwt: string, id: string) {
    const { data } = await this.client.delete(id, {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });

    return this.mapResponse(data);
  }
}
