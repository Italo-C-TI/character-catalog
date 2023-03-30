import { Character, GenderCharacterEnum, Paginated, StatusCharacterEnum } from 'models';
import { random } from 'utils';
import { makeList } from './makeList';
import { makePagination } from './makePagination';

const today = () => new Date().toString();

const makeCharacter = (index: number): Character => {
    const randomStatus = () =>
        random([
            StatusCharacterEnum.Alive,
            StatusCharacterEnum.Dead,
            StatusCharacterEnum.Unknown
        ]);

    const randomGender = () =>
        random([
            GenderCharacterEnum.Female,
            GenderCharacterEnum.Male,
            GenderCharacterEnum.Genderless,
            GenderCharacterEnum.Unknown
        ]);

    return {
        id: index,
        name: `name#${index}`,
        status: randomStatus(),
        species: `species#${index}`,
        created: today(),
        type: `type#${index}`,
        gender: randomGender(),
        url: `url#${index}`,
        episode: [`episode#${index}`],
        image: `image#${index}`,
    };
};

export function makeCharacterListResponse(
    paginatedCharacter: Partial<Paginated<Character>> = {}
): Paginated<Character> {
    const makeCharacters = makeList(makeCharacter, 5);

    return makePagination({ results: makeCharacters, ...paginatedCharacter });
}
