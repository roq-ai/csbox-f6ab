import { SubmissionInterface } from 'interfaces/submission';
import { CourseInterface } from 'interfaces/course';
import { GetQueryInterface } from 'interfaces';

export interface AssignmentInterface {
  id?: string;
  name: string;
  course_id?: string;
  created_at?: any;
  updated_at?: any;
  submission?: SubmissionInterface[];
  course?: CourseInterface;
  _count?: {
    submission?: number;
  };
}

export interface AssignmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  course_id?: string;
}
