import { CourseInterface } from 'interfaces/course';
import { GetQueryInterface } from 'interfaces';

export interface ModuleInterface {
  id?: string;
  name: string;
  course_id?: string;
  created_at?: any;
  updated_at?: any;

  course?: CourseInterface;
  _count?: {};
}

export interface ModuleGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  course_id?: string;
}
