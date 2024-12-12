import React, { useState } from 'react';
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchemaStep1 = Yup.object({
  salary: Yup.string().required('Required'),
  jobType: Yup.string().required('Required'),
  workExperience: Yup.string().required('Required'),
  employmentStatus: Yup.string().required('Required'),
  telephone: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
});

const validationSchemaStep2 = Yup.object({
  name: Yup.string().required('Required'),
  surname: Yup.string().required('Required'),
  gender: Yup.string().required('Required'),
  maritalStatus: Yup.string().required('Required'),
  lga: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  confirmBroadcast: Yup.boolean().oneOf([true], 'You must confirm before broadcasting'),
});

const BroadcastForm: React.FC = () => {
  const [step, setStep] = useState(1);

  const initialValuesStep1 = {
    salary: '',
    jobType: '',
    workExperience: '',
    employmentStatus: '',
    telephone: '',
    email: '',
  };

  const initialValuesStep2 = {
    name: '',
    surname: '',
    gender: '',
    maritalStatus: '',
    lga: '',
    state: '',
    confirmBroadcast: false,
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <section className='bg-slate-700 flex flex-col justify-center p-5 sm:p-12 md:p-28'>
      <p className='text-center text-2xl text-white my-10 font-semibold'>
        Broadcast Now!
      </p>
      {step === 1 && (
        <Formik
          initialValues={initialValuesStep1}
          validationSchema={validationSchemaStep1}
          onSubmit={handleNextStep}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Field className="bg-white" name="salary" as={TextField} label="Salary" fullWidth helperText={<ErrorMessage name="salary" />} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Field className="bg-white" name="jobType" as={TextField} label="Job Type" fullWidth helperText={<ErrorMessage name="jobType" />} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Field className="bg-white" name="workExperience" as={TextField} label="Work Experience" fullWidth helperText={<ErrorMessage name="workExperience" />} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <InputLabel>Employment Status</InputLabel>
                    <Field className="bg-white" name="employmentStatus" as={Select} fullWidth>
                      <MenuItem value="Employed">Employed</MenuItem>
                      <MenuItem value="Unemployed">Unemployed</MenuItem>
                    </Field>
                    <ErrorMessage name="employmentStatus" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Field className="bg-white" name="telephone" as={TextField} label="Telephone" fullWidth helperText={<ErrorMessage name="telephone" />} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Field className="bg-white" name="email" as={TextField} label="Email" fullWidth helperText={<ErrorMessage name="email" />} />
                </Grid>
                <Grid className='flex p-10' xs={12}>
                  <button className='mx-auto bg-white p-2 px-3 font-bold rounded-md text-blue-600' type="submit" disabled={isSubmitting}>
                    Next
                  </button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      )}
      {step === 2 && (
        <Formik
          initialValues={initialValuesStep2}
          validationSchema={validationSchemaStep2}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Field className="bg-white" name="name" as={TextField} label="Name" fullWidth helperText={<ErrorMessage name="name" />} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Field className="bg-white" name="surname" as={TextField} label="Surname" fullWidth helperText={<ErrorMessage name="surname" />} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Field className="bg-white" name="gender" as={Select} fullWidth>
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Field>
                    <ErrorMessage name="gender" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Field className="bg-white" name="maritalStatus" as={TextField} label="Marital Status" fullWidth helperText={<ErrorMessage name="maritalStatus" />} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Field className="bg-white" name="lga" as={TextField} label="LGA" fullWidth helperText={<ErrorMessage name="lga" />} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Field className="bg-white" name="state" as={TextField} label="State" fullWidth helperText={<ErrorMessage name="state" />} />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Field name="confirmBroadcast" as={Checkbox} />}
                    label="I confirm that I want to broadcast"
                  />
                  <ErrorMessage name="confirmBroadcast" />
                </Grid>
                <Grid item xs={12} display="flex" className='justify-center gap-2'>
                  <button className='bg-white p-2 px-6 font-bold rounded-lg text-blue-600' onClick={handlePrevStep}>
                    Back
                  </button>
                  <button className='bg-blue-600 p-2 px-6 font-bold rounded-lg text-white' type="submit" disabled={isSubmitting}>
                    Broadcast
                  </button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      )}
    </section>
  );
};

export default BroadcastForm;
