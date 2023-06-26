import { AssignmentInterface } from 'interfaces/assignment';
import { EnrollmentInterface } from 'interfaces/enrollment';
import { ModuleInterface } from 'interfaces/module';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  assignment?: AssignmentInterface[];
  enrollment?: EnrollmentInterface[];
  module?: ModuleInterface[];
  organization?: OrganizationInterface;
  _count?: {
    assignment?: number;
    enrollment?: number;
    module?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
