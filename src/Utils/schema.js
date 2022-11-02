import * as yup from 'yup'

export const MovieFormSchema = yup.object().shape({
  name: yup.string().required(),
  rating: yup
    .number()
    .positive()
    .integer()
    .required(),
  duration: yup
    .number()
    .positive()
    .integer()
    .required()
})
