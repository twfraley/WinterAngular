import { Character } from './Character';

export interface PointValue {
    PointValueId: number;
    CharacterId: number;
    Character: Character;
    SurvivedEpisode: boolean;
    EpisodeAppearance: boolean;
    GetKill: boolean;
    Death: boolean;
    BigKill: boolean;
}