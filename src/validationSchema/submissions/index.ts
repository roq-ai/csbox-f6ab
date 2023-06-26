import * as yup from 'yup';

export const submissionValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  assignment_id: yup.string().nullable(),
});
