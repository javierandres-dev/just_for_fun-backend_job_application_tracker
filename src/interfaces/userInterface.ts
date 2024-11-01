export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image: string;
  phone: string;
  profile: number;
  enable: boolean;
  birthDay: Date;
}

export interface IUserList {
  id: string;
  nickname: string;
  image: string;
}
