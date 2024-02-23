import { FastTicket, Ticket } from './common';

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

// ------------------
// response 관련 api 로직 미구현

export interface SlowTrainResponse {
  tickets: Ticket[];
}

export interface FastTrainResponse {
  tickets: FastTicket[];
}

export interface SlowTrainCardResponse {
  userTicket: Ticket;
  OpponentTicket: Ticket;
}

export interface FastTrainCardResponse {
  OpponentPhoto: string;
}
