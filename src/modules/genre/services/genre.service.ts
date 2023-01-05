import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateGenreInput, Genre, UpdateGenreInput } from 'src/graphql';

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
    // 1. после вызова метода (post, put, delete)
    // первым арнументом передаётся строка которая
    // приплюсовывается к основному baseURL который мы задаём в начале
    // 2. затем идут данные которые вы передаёте
    // 3. после этого передаём конфиг
    const { data } = await this.client.post('', genre, {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });
    return this.mapResponse(data);
  }

  async update(jwt: string, genre: UpdateGenreInput): Promise<Genre> {
    const { data } = await this.client.put(
      genre.id,
      {
        ...genre,
        // id: undefined,
      },
      {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
    );

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
