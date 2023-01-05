import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Band, CreateBandInput, UpdateBandInput } from 'src/graphql';

@Injectable()
export class BandsService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.URL_BAND,
    });
  }

  mapResponse(response): Band {
    return {
      id: response._id,
      ...response,
    };
  }

  // query
  async findOneById(id: string): Promise<Band> {
    const { data } = await this.client.get(id);
    return this.mapResponse(data);
  }

  async findAll({ limit = 10, offset = 0 }) {
    const { data } = await this.client.get(`?limit=${limit}&offset=${offset}`);
    return data.items.map((item) => this.mapResponse(item));
  }

  // mutation
  async create(jwt: string, input: CreateBandInput): Promise<Band> {
    const { data } = await this.client.post('', input, {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });

    return this.mapResponse(data);
  }

  async update(jwt: string, input: UpdateBandInput): Promise<Band> {
    const { data } = await this.client.put(
      input.id,
      { ...input },
      {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
    );
    return this.mapResponse(data);
  }

  async delete(jwt: string, id: string): Promise<Boolean> {
    await this.client.delete(id, {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });

    return true;
  }
}
