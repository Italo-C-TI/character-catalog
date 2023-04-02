import { Character, Pagination, PaginationParams } from "models";

export interface CharacterCardListProps {
    characters: Character[];
    title: string;
    showPagination: boolean;
    pagination?: PaginationParams;
}