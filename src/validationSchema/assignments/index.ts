import * as yup from 'yup';

export const assignmentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  course_id: yup.string().nullable(),
});
