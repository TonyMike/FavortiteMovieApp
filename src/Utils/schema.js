import * as yup from 'yup'

export const MovieFormSchema = yup.object().shape({
  name: yup.string().required('please provie a movie name'),
  rating: yup
    .number()
    .positive('please provide a positive number')
    .integer('please provie a positive number')
    .min(1, 'rating cannot be less than 1')
    .max(100, 'rating cannot be greater than 100')
    .required()
    .typeError('rating is required'),
  duration: yup
    .number()
    .positive()
    .min(60)
    .required()
    .typeError('duration is  required')
})
