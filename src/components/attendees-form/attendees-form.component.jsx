import { useFormik } from 'formik';
import * as Yup from 'yup';
import './attendees-form.styles.css'


function AttendeesForm(props) {

        const formik = useFormik({
            initialValues: {
                name: '',
                color: ''
            },
            validationSchema: Yup.object({
                name: Yup.string().required(),
                color: Yup.string().required()
            }),
            onSubmit: function (values) {
                props.newAttendees(values)
            }
        })
        return (
            <div className='form__attendees'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='container-register'>
                        <label htmlFor='name'>Name</label>
                        <input type="text" name="name" id="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name} />
                        {formik.touched.name && formik.errors.name && (
                            <span className='error'>{formik.errors.name}</span>
                        )}
                    </div>
                    <div className='container-register'>
                        <label htmlFor='color'>Color</label>
                        <input type="text" name="color" id="color"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.color} />
                        {formik.touched.color && formik.errors.color && (
                            <span color='error'>{formik.errors.color}</span>
                        )}
                    </div>
                    <div className='btnn'>
                        <button className='btn btn-primary' type='submit' id='submit' disabled={!(formik.isValid && formik.dirty)}>Add attendee</button>
                    </div>
                </form>
            </div>
        )
}
export default AttendeesForm