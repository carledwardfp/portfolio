import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-container'>
            <div className='about-card'>
                <div className='about-title'>About Me</div>
                <div className='about-header-img'></div>
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
            </div>
        </div>
    )
}

export default About