import { CharacterListItem } from './CharacterListItem';

export interface TeamDetail {
    TeamId: number;
    UserId: string;
    TeamName: string;
    TotalPoints?: number;
    Characters: Array<CharacterListItem>;
}