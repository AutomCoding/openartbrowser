export interface Entity {
  id: string;
  label?: string;
  description?: string;
  abstract?: string;
  wikipediaLink?: string;
  image?: string;
  imageSmall?: string;
  imageMedium?: string;
  type: string;
  absoluteRank: number;
  relativeRank: number;
}

export interface Artist extends Entity {
  gender?: 'male' | 'female';
  date_of_birth?: number;
  date_of_death?: number;
  place_of_birth?: string;
  place_of_death?: string;
  citizenship?: string;
  movements: Partial<Movement>[];
  influenced_by: Partial<Artist>[];
  type: 'artist';
}

export interface Artwork extends Entity {
  artists: Partial<Artist>[];
  locations: Partial<Location>[];
  genres: Partial<Genre>[];
  movements: Partial<Movement>[];
  inception?: number;
  materials: Partial<Material>[];
  motifs: Partial<Motif>[];
  iconclasss: Partial<Iconclass>[];
  country?: string;
  height?: number;
  width?: number;
  type: 'artwork';
}

export interface Genre extends Entity {
  type: 'genre';
}

export interface Location extends Entity {
  country?: string;
  website?: string;
  part_of: Partial<Location>[];
  lat?: string;
  lon?: string;
  type: 'location';
}

export interface Material extends Entity {
  type: 'material';
}

export interface Movement extends Entity {
  influenced_by: Partial<Entity>[];
  type: 'movement';
}

export interface Motif extends Entity {
  type: 'motif';
}

export interface Iconclass extends Entity {
  type: 'iconclass';
}

export interface artSearch {
  motifs?: string[];
  artists?: string[];
  movements?: string[];
  genres?: string[];
  materials?: string[];
  locations?: string[];
  iconclasss?: string[];
}

export enum EntityType {
  ARTIST = 'artist',
  ARTWORK = 'artwork',
  GENRE = 'genre',
  LOCATION = 'location',
  MATERIAL = 'material',
  MOVEMENT = 'movement',
  MOTIF = 'motif',
  ICONCLASS = 'iconclass'
}

export interface TagItem {
  label: string;
  type?: string;
  id?: string;
}
