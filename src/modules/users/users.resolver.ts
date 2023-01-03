import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from 'src/graphql';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query('jwt')
  async jwt(@Args('email') email: string, @Args('password') password: string) {
    return await this.userService.getJWT(email, password);
  }

  @Mutation('register')
  async register(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.userService.register(createUserInput);
  }
}
