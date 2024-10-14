import { ThumbnailDto } from "./ThumbnailDto";

export interface ArtworkDto {
    id: number;
    title: string;
    is_boosted: boolean;
    api_model: string;
    thumbnail: ThumbnailDto;
  }