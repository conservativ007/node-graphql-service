import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CreateUserInput } from 'src/graphql';

@Injectable()
export class UsersService {
  async register(createUserInput: CreateUserInput) {
    const config: AxiosRequestConfig = {
      method: 'POST',
      data: createUserInput,
      url: process.env.URL_USER,
      headers: {
        'Content-type': 'application/json ; charset=UTF-8',
      },
    };

    const response: AxiosResponse = await axios(config);
    return response.data;
  }

  async getJWT(email: string, password: string) {
    const config: AxiosRequestConfig = {
      method: 'POST',
      data: {
        email,
        password,
      },
      url: process.env.URL_USER + '/login',
      headers: {
        'Content-type': 'application/json ; charset=UTF-8',
      },
    };

    const response: AxiosResponse = await axios(config);
    return response.data;
  }
}
