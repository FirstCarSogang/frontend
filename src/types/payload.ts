export interface LoginPayload {
  studentId: string;
  password: string;
}

export interface ForgetPassword1Payload {
  email: string;
}

export interface ForgetPassword2Payload {
  email: string;
  otp: string;
}

export interface ForgetPassword3Payload {
  email: string;
  new_password: string;
  new_confirm_password: string;
}
