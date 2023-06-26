import { UserInterface } from 'interfaces/user';
import { AssignmentInterface } from 'interfaces/assignment';
import { GetQueryInterface } from 'interfaces';

export interface SubmissionInterface {
  id?: string;
  user_id?: string;
  assignment_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  assignment?: AssignmentInterface;
  _count?: {};
}

export interface SubmissionGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  assignment_id?: string;
}
