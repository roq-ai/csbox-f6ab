import * as yup from 'yup';

export const moduleValidationSchema = yup.object().shape({
  name: yup.string().required(),
  course_id: yup.string().nullable(),
});
