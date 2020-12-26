import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const pageTransition = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: '-10%'
    }
}

const skillsTextTransition = {
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: '10%'
    }
}

const skillsTransition = {
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: '-20%'
    }
}

const resumeTransition = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: '100%'
    }
}

function About() {

    return (
        <div className='about-container'>
            <div class='about-grid'>
                <div className='about-grid-item'>
                    <motion.div className='about-card'
                        exit='out'
                        animate='in'
                        initial='out'
                        variants={pageTransition}
                        transition={{duration: 1, stiffness: 1000}}
                    >
                        <div className='about-header-img' style={{
        'backgroundImage': `url(${process.env.PUBLIC_URL}/images/mypic.jpg`}}/>
                        <div className='about-info'>
                            <ul className='about-info-ul'>
                                <li className='about-info-li'>
                                    <i class="fas fa-id-card" />
                                    <p>Carl Edward F. Pahuyo</p>
                                </li>
                                <li className='about-info-li'>
                                    <i class="fas fa-graduation-cap" />
                                    <p>University of the Philippines - Manila</p>
                                </li>
                                <li className='about-info-li'>
                                    <i class="fas fa-phone" />
                                    <p>+63 929818912</p>
                                </li>
                                <li className='about-info-li'>
                                    <i class="fas fa-envelope" />
                                    <p>official.carlpahuyo@gmail.com</p>
                                </li>
                            </ul>    
                        </div>
                        <div className='about-socials'>
                            <a href="https://www.facebook.com/carl.pahuyo" target="_blank" rel="noreferrer"><i class="fab fa-facebook"></i></a>
                            <a href="https://github.com/official-carledwardfp" target="_blank" rel="noreferrer"><i class="fab fa-github" /></a>
                            <a href="https://www.instagram.com/carledwardfp" target="_blank" rel="noreferrer"><i class="fab fa-instagram" /></a>
                        </div>
                    </motion.div>

                    <motion.div className='about-description'
                        exit='out'
                        animate='in'
                        initial='out'
                        variants={skillsTextTransition}
                        transition={{duration: 1, stiffness: 1000}}
                    >
                        <h1>Skills</h1>
                        <p>FRONT-END DEVELOPMENT</p>
                        <motion.div className='coding-language'
                            exit='out'
                            animate='in'
                            initial='out'
                            variants={skillsTransition}
                            transition={{duration: 1, stiffness: 1000, delay: 0.5}}
                        >
                            <img src={process.env.PUBLIC_URL+'/images/html.png'} alt='html' />
                            <img src={process.env.PUBLIC_URL+'/images/css.png'} alt='css' />
                            <img src={process.env.PUBLIC_URL+'/images/js.png'} alt='javascript' />
                            <img className='react' src={process.env.PUBLIC_URL+'/images/react.png'} alt='reactjs' />
                        </motion.div>
                        
                        <p>I am knowledgable in ReactJS and I use it as my Javascript Framework. I also have basic knowledge of Bootstrap and JQuery</p>
                        <motion.div className='coding-language'
                            exit='out'
                            animate='in'
                            initial='out'
                            variants={skillsTransition}
                            transition={{duration: 1, stiffness: 1000, delay: 1}}
                        >
                            <img src={process.env.PUBLIC_URL+'/images/bootstrap.png'} alt='bootstrap' />
                            <img src={process.env.PUBLIC_URL+'/images/jquery.png'} alt='jquery' />
                            <img src={process.env.PUBLIC_URL+'/images/npm.jpg'} alt='npm' />
                            <img src={process.env.PUBLIC_URL+'/images/github.png'} alt='git/github' />
                        </motion.div>

                        <p>I use NPM as my Javascript package manager and Git/Github for version control and source code management</p>
                        

                        <motion.div className='coding-language'
                            exit='out'
                            animate='in'
                            initial='out'
                            variants={skillsTransition}
                            transition={{duration: 1, stiffness: 1000, delay: 0.5}}
                        >
                            <img src={process.env.PUBLIC_URL+'/images/python.png'} alt='python' />
                            <img src={process.env.PUBLIC_URL+'/images/cpp.png'} alt='cpp' />
                        </motion.div>
                        
                        <p>I have basic knowledge on <em>Back End Web Development</em> specifically Python and C++</p>

                        <motion.div className='resume'
                            exit='out'
                            animate='in'
                            initial='out'
                            variants={resumeTransition}
                            transition={{duration: 1, stiffness: 1000, delay: 1.5}}
                        >
                            <a href='https://drive.google.com/drive/folders/1iViiQamXqOBW5zQU4k_46A87j11BAuSc?usp=sharing' target='_blank' rel="noreferrer"><button>
                                DOWNLOAD RESUME
                            </button></a>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About