
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateArtistInput {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bandsIds?: Nullable<string[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class UpdateArtistInput {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bandsIds?: Nullable<string[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class CreateBandInput {
    name: string;
    origin: string;
    website: string;
    genresIds?: Nullable<string[]>;
}

export class UpdateBandInput {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    website?: Nullable<string>;
    genresIds?: Nullable<string[]>;
}

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

export class CreateTrackInput {
    title: string;
    artistsIds?: Nullable<string[]>;
    bandsIds?: Nullable<string[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<string[]>;
}

export class UpdateTrackInput {
    id: string;
    title: string;
    artistsIds?: Nullable<string[]>;
    bandsIds?: Nullable<string[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<string[]>;
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

export class Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export abstract class IQuery {
    abstract artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;

    abstract band(id: string): Nullable<Band> | Promise<Nullable<Band>>;

    abstract bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;

    abstract genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;

    abstract track(id: string): Nullable<Track> | Promise<Nullable<Track>>;

    abstract tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createArtist(input: CreateArtistInput): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract updateArtist(input: UpdateArtistInput): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract deleteArtist(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createBand(input: CreateBandInput): Nullable<Band> | Promise<Nullable<Band>>;

    abstract updateBand(input: UpdateBandInput): Nullable<Band> | Promise<Nullable<Band>>;

    abstract deleteBand(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createGenre(input?: Nullable<CreateGenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract updateGenre(input?: Nullable<UpdateGenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract deleteGenre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract createTrack(input?: Nullable<CreateTrackInput>): Nullable<Track> | Promise<Nullable<Track>>;

    abstract updateTrack(input?: Nullable<UpdateTrackInput>): Nullable<Track> | Promise<Nullable<Track>>;

    abstract deleteTrack(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract register(input?: Nullable<CreateUserInput>): Nullable<User> | Promise<Nullable<User>>;
}

export class Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export class Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export class Track {
    id: string;
    title: string;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export class User {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

type Nullable<T> = T | null;
