import React from 'react'
import { Grid, TextField, makeStyles, Paper, Typography, Button, Input } from '@material-ui/core'
import emailjs from 'emailjs-com'

import { motion } from 'framer-motion'

import  './Contact.css'

const useStyle = makeStyles(theme =>({
    root: {
        '& .MuiFormControl-root': {
            width: 720,
            margin: theme.spacing(1)
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(1)
        },
        '& .MuiFormLabel-root': {
            zIndex: 0
        }
    },
    pageContent: {
        margin: '0 auto',
        padding: theme.spacing(3),
        maxWidth: 720,
        background: '#20202090',
    }
}))

function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm('gmail', 'template_n9ez68s', e.target, 'user_hWQ084Mwt8a84k1LQDosB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    e.target.reset()
}

const pageTransition = {
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: '50%'
    }
}

const formTransition = {
    in: {
        opacity: 1,
        x: 0,
        y: 0
    },
    out: {
        opacity: 0,
        x: '25%',
        y: '25%'
    }
}

function Contact() {
    const classes = useStyle()

    return (
        <div className='contact-container'>
        <motion.div
            exit='out'
            animate='in'
            initial='out'
            variants={pageTransition}
            transition={{duration: 0.5}}
        >
            <Paper className={classes.pageContent} elevation={5}>
            <form className={classes.root} onSubmit={sendEmail}>
                <Typography
                    variant='h3'
                    align='center'
                    gutterBottom
                >
                    Contact Me
                </Typography>
                <motion.div
                    exit='out'
                    animate='in'
                    initial='out'
                    variants={formTransition}
                    transition={{duration: 1}}
                >
                <Grid container>
                    <Grid container item xs={12} md={6} justify='center'>
                        <TextField
                            variant='filled'
                            label='Full Name'
                            name='fullName'
                            color='secondary'
                            required
                        />
                    </Grid>
                    <Grid container item xs={12} md={6} justify="center">
                        <TextField
                            variant='filled'
                            label='Email'
                            name='email'
                            color='secondary'
                            required
                        />
                    </Grid>
                    <Grid container item xs={12}>
                        <TextField
                            variant='filled'
                            label='Subject'
                            name='subject'
                            color='secondary'
                            required
                        />
                    </Grid>
                    <Grid container item xs={12}>
                        <TextField
                            variant='filled'
                            label='Message'
                            name='message'
                            color='secondary'
                            required
                            multiline
                            rows={10}
                        />
                    </Grid>
                    <Button 
                        variant='contained'
                        color='secondary'
                        size='large'
                        fullWidth
                    >
                        <Input type='submit' fullWidth disableUnderline>
                            Send
                        </Input>
                    </Button>
                </Grid>
                </motion.div>
            </form>
            </Paper>
        </motion.div>
        </div>
    )
}

export default Contact