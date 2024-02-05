export interface LoginUser {
  studentId: string;
  password: string;
}

export interface SignUpForm {
  name: string;
  password1: string;
  password2: string;
  studentId: string;
  kakaotalkID: string;
  email: string;
  photo1: FileList;
  photo2: FileList;
  photo3: FileList;
  train: 'fast' | 'normal';
  date_joined: string;
  last_login: string;
}

//댓글
interface Comment {
  id: number;
  content: string;
  createdAt: string;
  from: string;
}

//첫날 질문: 자기소개
export interface Day1Question {
  question: string;
  placeholder: string;
  answer?: string;
  comment?: Comment[];
  isAnswered: boolean;
}
//첫날 이후 질문: 객관식, 주관식 각각 1개
export interface AfterDay1Question {
  question1: string;
  placeholder1: string;
  answer1?: string;
  comment1?: Comment[];
  question2: string;
  multipleChoiceAnswer1: string;
  multipleChoiceAnswer2: string;
  multipleChoiceAnswer3?: string;
  multipleChoiceAnswer4?: string;
  multipleChoiceAnswer5?: string;
  answer2?: number;
  comment2?: Comment[];
  isAnswered: boolean;
}

// 질문타입: 첫날 질문, 첫날 이후 질문
export type Question = Day1Question | AfterDay1Question;

export interface Ticket {
  ticketNumber: number; //티켓 번호
  progressingDay: number; //진행중인 날짜
  DayQuestion: Question[]; //날짜별 질문
  choose?: boolean; //선택 여부
  withWhom: string; //상대방 이름
  id: number; //티켓 고유번호/id -> 상대방 티켓과 같음
}
