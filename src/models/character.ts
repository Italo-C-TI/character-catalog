
export type Character = {
    id: number;
    name: string;
    status: StatusCharacter;
    species: string;
    type: string;
    gender: GenderCharacter;
    origin?: Origin;
    location?: Location;
    image: string;
    episode: string[]
    url: string;
    created: string;
};

type Origin = {
    name: string;
    url: string;
};

type Location = Origin;


export type CharacterFilterParams = {
    name: string;
    species: string;
    type: string;
    status: StatusCharacter;
    gender: GenderCharacter;
}

export enum GenderCharacterEnum {
    Male = 'Male',
    Female = 'Female',
    Genderless = 'Genderless',
    Unknown = 'Unknown'
}

type GenderCharacter = keyof typeof GenderCharacterEnum;

export enum StatusCharacterEnum {
    Alive = 'Alive',
    Dead = 'Dead',
    Unknown = 'Unknown'
}

type StatusCharacter = keyof typeof StatusCharacterEnum;

export interface ICharacterLikeId {
    id: number;
}