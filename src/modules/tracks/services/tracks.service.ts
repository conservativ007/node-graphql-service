import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateTrackInput, Track, UpdateTrackInput } from 'src/graphql';

@Injectable()
export class TracksService {
  private axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.URL_TRACK,
    });
  }

  removeUnderscoreInId(response) {
    return {
      id: response._id,
      ...response,
    };
  }

  // query
  async getOneById(id: string): Promise<Track> {
    const { data } = await this.axiosInstance.get(id);
    return this.removeUnderscoreInId(data);
  }

  async getAll({ limit = 10, offset = 0 }): Promise<Track[]> {
    const { data } = await this.axiosInstance.get(
      `?limit=${limit}&offset=${offset}`,
    );
    return data.items.map((i) => this.removeUnderscoreInId(i));
  }

  // mutation
  async create(jwt: string, input: CreateTrackInput): Promise<Track> {
    const { data } = await this.axiosInstance.post('', input, {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });

    return this.removeUnderscoreInId(data);
  }

  async update(jwt: string, input: UpdateTrackInput): Promise<Track> {
    const { data } = await this.axiosInstance.put(input.id, input, {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });

    return this.removeUnderscoreInId(data);
  }

  async delete(id: string, jwt: string): Promise<Boolean> {
    await this.axiosInstance.delete(id, {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });
    return true;
  }
}
