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
  email: string;
}

export interface SignUpPayload {
  name: string;
  password1: string;
  studentId: string;
  kakaotalkId: string;
  email: string;
  photo1: FileList;
  photo2: FileList;
  photo3: FileList;
  train: 'fast' | 'slow';
}

export interface ChangeTrainPayload {
  train: 'fast' | 'slow';
}

export interface ChangeKakaotalkIdPayload {
  kakaotalkId: string;
}

export interface ChangePasswordPayload {
  password: string;
  new_password: string;
}

export interface ChangePhotoPayload {
  photo: FileList;
  photoNumber: number;
}

export interface ChangeUseTicketPayload {
  useTicket: boolean;
}

// ------------------------------

export interface SlowTrainTicketDeletePayload {
  ticketNumber: number;
}

export interface SlowTrainReportPayload {
  user: string;
  ticketNumber: number;
  report: string;
}

export interface SlowTrainDay1AnswerPayload {
  user: string;
  ticketNumber: number;
  answer: string;
}

export interface SlowTrainAfterDay1AnswerPayload {
  user: string;
  ticketNumber: number;
  answer1: string;
  answer2: string;
}

export interface SlowTrainCommentPayload {
  user: string;
  ticketNumber: number;
  comment: string;
}

export interface SlowtrainChoosePayload {
  user: string;
  ticketNumber: number;
  choose: boolean;
}

export interface FastTrainReportPayload {
  user: string;
  ticketNumber: number;
  report: string;
}

export interface FastTrainChoosePayload {
  user: string;
  ticketNumber: number;
  choose: boolean;
}
