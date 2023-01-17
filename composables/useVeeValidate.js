import { useForm } from 'vee-validate'
import * as yup from 'yup'

export default function () {
    const { handleSubmit, isSubmitting } = useForm()
    // Define a validation schema
    const schema = yup.object({
        email: yup.string('必須為字串').required('必填').email('錯誤的email格式'),
        name: yup.string('必須為字串').required('必填'),
        password: yup.string('必須為字串').required('必填').min(8, '密碼長度至少8個字元'),
    })

    const { errors, useFieldModel } = useForm({
        validationSchema: schema,
    })
    return {
        errors,
        useFieldModel,
    }
}
