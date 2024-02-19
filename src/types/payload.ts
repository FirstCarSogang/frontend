export interface LoginPayload {
  studentId: string;
  password: string;
}

export interface ForgetPassword1Payload {
  email: string;
}

export interface ForgetPassword2Payload {
  otp: string;
}
