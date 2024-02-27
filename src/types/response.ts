import { FastTicket, Ticket } from './common';

export interface LoginResponse {
  studentId: string;
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
  photo1_url: string;
  photo2_url: string;
  photo3_url: string;
  ticket_count: number;
  use_ticket: boolean;
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
