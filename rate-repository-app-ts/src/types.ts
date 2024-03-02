export interface Repository {
  id: string;
  fullName: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: string;
}

export interface APIRepository {
  edges: {
    node: Repository;
    cursor: string;
  }[];
}

export interface Credentials {
  username: string;
  password: string;
}

export interface AuthenticateInput {
  credentials: Credentials;
}

export interface AuthenticateResponse {
  authenticate: {
    accessToken: string;
  };
}

export interface MeResponse {
  me: {
    id: string;
    username: string;
  };
}
