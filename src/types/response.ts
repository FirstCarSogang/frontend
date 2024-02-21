export interface LoginResponse {
  user: string;
  accessToken: string;
  refreshToken: string;
}

export interface MypageResponse {
  studentId: string;
  name: string;
  train: 'fast' | 'slow';
}

export interface ChangeTrainResponse {
  train: 'fast' | 'slow';
}

export interface MyKakaotalkIdResponse {
  kakaotalkId: string;
}

export interface MatchingPageResponse {
  photo1: string;
  photo2: string;
  photo3: string;
  numberOfTickets: number;
  useTicket: boolean;
}
