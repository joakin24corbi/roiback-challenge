import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BounceLoader from "react-spinners/BounceLoader";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Container, IconButton, TextField, Typography, Box } from '@mui/material';
import PrimaryButton from 'components/PrimaryButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getForm } from 'api/profiles.api';
import { doLogin } from 'store/slices/auth/actions';
import { uri_home } from 'router/Routes';

/**
 * Dictionary to transform BD types to MUI TextField types
 * 
 * @dictionary
 */
const typesDic = {
  'NUMBER': 'number'
};

/**
 * Function that retrieves value associated to key in typesDic or a default value
 * 
 * @function
 */
function getTypesDicValue(clave) {
  if (clave in typesDic) {
    return typesDic[clave];
  } else {
    return 'TEXT';
  }
}

/**
 * Step 2 component of the signup page.
 * Retrieves from the backend the fields to be filled in by the user, depending on the profile selected in the previous step.
 * @param {Integer} profile the id of profile selected by the user
 * @param {Function} prevStep function to return to the previous step of the registration form
 * @component
 */
const SignupStep2 = ({ profile, prevStep }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState();

  const handleBack = (resetForm) => {
    resetForm();
    prevStep();
  }

  useEffect(() => {
    const doGetForm = async () => {
      try {
        const response = await getForm(profile);
        setForm(response.data[0]);
      } finally {
        setLoading(false);
      }
    };

    profile && doGetForm();
  }, [profile])

  return loading
    ? <Box sx={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
        <BounceLoader />
      </Box>
    : form && (
    <Container maxWidth='md'>
      <Formik
        initialValues={
          form.fields
            .map((field) => {
              return { [field.name]: '' }
            })
            .reduce((prev, curr) => ({ ...prev, ...curr }), {})
        }
        validationSchema={
          Yup.object().shape(
            form.fields
              .map((field) => {
                let schema;
                if (field.type === 'TEXT') {
                  schema = Yup.string();
                } else if (field.type === 'EMAIL') {
                  schema = Yup.string().email();
                }

                if (field.mandatory) {
                  schema = schema.required('Required field');
                }

                return { [field.name]: schema };
              })
              .reduce((prev, curr) => ({ ...prev, ...curr }), {})
          )
        }
        onSubmit={(values) => {
          // TODO call api rest to send user data
          var userData = {...values}
          userData.profile = profile
          dispatch(doLogin(userData))
          navigate(uri_home, { state: { user: userData }})
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <IconButton
              onClick={() => handleBack(resetForm)}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant='h5' align='center' mt={4} mb={2}>
              {form.title}
            </Typography>
            {form.fields.map((field) => 
              <TextField
                key={field.id}
                id={field.name}
                name={field.name}
                variant='standard'
                margin='normal'
                required={field.mandatory}
                fullWidth
                label={field.label}
                placeholder={field.placeholder}
                type={getTypesDicValue(field.type)}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values[field.name]}
                helperText={touched[field.name] && errors[field.name]}
                error={Boolean(touched[field.name] && errors[field.name])}
                InputLabelProps={{ shrink: true }}
                sx={{ marginTop: '30px', marginBottom: Boolean(errors[field.name] && touched[field.name]) ? '7px' : '30px' }}
              />
            )}
            <PrimaryButton
              type='submit'
              style={{ margin: '100px 0px'}}
            >
              Send
            </PrimaryButton>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default SignupStep2;