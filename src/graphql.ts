
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateGenreInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export class UpdateGenreInput {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export class DeleteGenreInput {
    id: string;
}

export class CreateUserInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

export class UpdateUserInput {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

export class Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export abstract class IQuery {
    abstract genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createGenre(input?: Nullable<CreateGenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract updateGenre(input?: Nullable<UpdateGenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract deleteGenre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract register(input?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

type Nullable<T> = T | null;
