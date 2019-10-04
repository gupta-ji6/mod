import {User} from './user.model';
import { Skill } from './skill.model';
import { Technology } from './technology.model';
import { Payment } from './payment.model';
export class Training {
  createdAt: string;
  updatedAt: string;
  id: number;
  status: string;
  progress: number;
  fees: number;
  commisionAmount: number;
  rating: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  amountRecieved: number;
  razorPaymentId: string;
  mentor: User;
  user: User[];
  skill: Skill[];
  technology: Technology;
  payment: Payment[];
}
