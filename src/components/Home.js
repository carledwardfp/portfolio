import React from 'react'

import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

import { motion } from 'framer-motion'

import './Home.css'

const pageTransition = {
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: '-100%'
  }
}

const projectButtonTransition = {
  in: {
    x: 0
  },
  out: {
    x: '-100%'
  }
}

const contactButtonTransition = {
  in: {
    x: 0
  },
  out: {
    x: '100%'
  }
}

function Home() {
    return (
            <div className='home'>
              <motion.div
                exit='out'
                animate='in'
                initial='out'
                variants={pageTransition}
                transition={{duration: 1, stiffness: 1000}}
              >
                <h1>Hi! I am</h1>
                <h1>CARL EDWARD</h1>
              </motion.div>
                
              <div className='home-buttons'>
                <motion.div
                  exit='out'
                  animate='in'
                  initial='out'
                  variants={projectButtonTransition}
                  transition={{duration: 0.5}}
                >
                  <div className='hb-project'><Link to='/projects'>
                    <Button 
                        variant='outlined'
                        color='secondary'
                        size='large'
                        startIcon={<FolderOpenIcon/>}
                        style={{
                          width: 200,
                          padding: '20px 0'
                        }}
                    >
                      Projects
                    </Button>
                  </Link></div>
                </motion.div>
                <motion.div
                  exit='out'
                  animate='in'
                  initial='out'
                  variants={contactButtonTransition}
                  transition={{duration: 0.8}}
                >
                  <div className='hb-contact'><Link to='/contact'>
                    <Button 
                        variant='contained'
                        color='secondary'
                        size='large'
                        startIcon={<MailOutlineIcon/>}
                        style={{
                          width: 200,
                          padding: '20px 0'
                        }}
                    > Contact Me
                    </Button>
                  </Link></div>
                </motion.div>
              </div>
            </div>
    )
}

export default Home