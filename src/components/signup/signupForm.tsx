import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Button,
        CssBaseline,
        TextField,
        Grid,
        Typography,
        Container
       } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";


 const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
     },
        paper: {
           marginTop: theme.spacing(8),
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
       },

        avatar: {
           margin: theme.spacing(1),
           backgroundColor: theme.palette.secondary.main,
       },

       form: {
          width: '100%',
          marginTop: theme.spacing(3),
       },

       submit: {
           margin: theme.spacing(3, 0, 2),
       },
  }));


 function SignupForm () {

   const classes = useStyles();

   const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
       firstName: Yup.string()
          .max(20, "Must be 20 characters or less")  
          .required("This field is required"),

       lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("This field is required"),
          
       email: Yup.string()
          .email("Invalid email address")             
          .required("This field is required"),

       password: Yup.string()
         .required("This field is required")                 
         .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            "Must contain at least 8 characters, one uppercase, one lowercase, one number and a special character"
         )  
    }),
      
    onSubmit: (values) => {                  
        alert(JSON.stringify(values, null, 2));       
    },
 })  

     

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline /> 

        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up  
          </Typography>  

          <form onSubmit={formik.handleSubmit} className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                   error={!!formik.errors.firstName && !!formik.touched.firstName}
                   autoComplete="first-name"
                   name="firstName"
                   variant="outlined"
                   fullWidth
                   onChange={formik.handleChange}
                   id="firstName"
                   label="First Name"
                   onBlur={formik.handleBlur}
                   autoFocus                   
                   helperText = {
                       formik.errors.firstName && formik.touched.firstName
                        ? formik.errors.firstName
                        : null
                   }
               />                
              </Grid>   

              <Grid item xs={12} sm={6}>
                <TextField
                   error={!!formik.errors.lastName && !!formik.touched.lastName}
                   autoComplete="lname"
                   name="lastName"
                   variant="outlined"
                   fullWidth
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   id="lastName"
                   label="Last Name"
                   autoFocus
                   helperText = {
                       formik.errors.lastName && formik.touched.lastName
                        ? formik.errors.lastName
                        : null
                    }
               />                
              </Grid>   

              <Grid item xs={12}>
                <TextField
                    error={!!formik.errors.email && !!formik.touched.email}
                    variant="outlined"
                    fullWidth
                    onChange={formik.handleChange}
                    name="email"
                    label="Email Address"
                    onBlur={formik.handleBlur}
                    type="email"
                    id="email"
                    autoComplete="email"
                    helperText = {
                        formik.errors.email && formik.touched.email
                          ? formik.errors.email
                          : null
                    }
               />  
              </Grid>

              <Grid item xs={12}>
                <TextField
                    error={!!formik.errors.password && !!formik.touched.password}
                    variant="outlined"
                    fullWidth
                    onChange={formik.handleChange}
                    name="password"
                    label="Password"
                    type="password"
                    onBlur={formik.handleBlur}
                    id="password"
                    autoComplete="current-password"
                    helperText = {
                        formik.errors.password && formik.touched.password
                          ? formik.errors.password
                          : null
                    }
               />  
              </Grid>
            </Grid>   

            <Button
               type="submit"
               fullWidth
               variant="contained"
               color="primary"
               className={classes.submit}
            >
                Sign Up
            </Button>
          </form> 
        </div> 
      </Container>        
    )
 }

 export default SignupForm;