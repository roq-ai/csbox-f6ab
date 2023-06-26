import axios from 'axios';
import queryString from 'query-string';
import { EnrollmentInterface, EnrollmentGetQueryInterface } from 'interfaces/enrollment';
import { GetQueryInterface } from '../../interfaces';

export const getEnrollments = async (query?: EnrollmentGetQueryInterface) => {
  const response = await axios.get(`/api/enrollments${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createEnrollment = async (enrollment: EnrollmentInterface) => {
  const response = await axios.post('/api/enrollments', enrollment);
  return response.data;
};

export const updateEnrollmentById = async (id: string, enrollment: EnrollmentInterface) => {
  const response = await axios.put(`/api/enrollments/${id}`, enrollment);
  return response.data;
};

export const getEnrollmentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/enrollments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEnrollmentById = async (id: string) => {
  const response = await axios.delete(`/api/enrollments/${id}`);
  return response.data;
};
