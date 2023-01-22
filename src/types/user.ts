export type User = {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  securityQuestion?: {
    question: string;
    answer: string;
  };
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
