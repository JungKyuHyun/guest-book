export interface MessageDto {
  // id
  id: string;
  // 유저 string
  userId: string;
  // 제목
  title: string;
  // 본문
  description: string;
  // 작성 일시
  readonly timestamp: number;
}
