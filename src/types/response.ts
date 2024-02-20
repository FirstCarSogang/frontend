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
