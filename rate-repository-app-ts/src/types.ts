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
  edges: [
    {
      node: Repository;
      current: string;
    },
  ];
}

export interface AuthenticateInput {
  credentials: {
    username: string;
    password: string;
  };
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
