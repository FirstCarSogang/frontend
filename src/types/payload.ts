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

export interface SignUpSendEmailPayload {
  email: string;
}

export interface SignUpVerifyEmailPayload {
  input_otp: string;
}

export interface SignUpPayload {
  name: string;
  password1: string;
  studentId: string;
  kakaotalkID: string;
  email: string;
  photo1: FileList;
  photo2: FileList;
  photo3: FileList;
  train: 'fast' | 'slow';
}
