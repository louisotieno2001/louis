// src/MainPage.js
import React, { useEffect, useState } from 'react';
import '../../css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { 
    faReact, 
    faJs, 
    faPython, 
    faNode, 
    faHtml5, 
    faCss3Alt, 
    faGithub, 
    faDocker,
    faFigma,
    faAws
} from '@fortawesome/free-brands-svg-icons';
import { 
    faDatabase, 
    faServer, 
    faPalette,
    faCode,
    faMobile,
    faRobot
} from '@fortawesome/free-solid-svg-icons';

const MainPage = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling past about section (adjust 300 as needed)
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <div className="particles">
                {[...Array(1000)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 20}s`,
                        }}
                    />
                ))}
            </div>
            <section id="About">
                <h2 className="glowing-title">About Me</h2>
                <div className="about-container">
                    <div className="about-text">
                        <p>Hello! I'm Louis Otieno, a passionate Full Stack Developer and UI/UX Designer based in Kenya. 
                        I specialize in creating efficient, scalable, and visually stunning web applications 
                        that solve real-world problems. With an eye for design and strong technical skills, 
                        I bridge the gap between beautiful interfaces and robust functionality.</p>
                        
                        <div className="tech-stack">
                            <h3>Tech Stack</h3>
                            <div className="tech-categories">
                                <div className="tech-category">
                                    <h4><FontAwesomeIcon icon={faCode} className="tech-icon" /> Frontend Development</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faReact} className="tech-icon" /> React.js</li>
                                        <li><FontAwesomeIcon icon={faJs} className="tech-icon" /> JavaScript</li>
                                        <li><FontAwesomeIcon icon={faHtml5} className="tech-icon" /> HTML5</li>
                                        <li><FontAwesomeIcon icon={faCss3Alt} className="tech-icon" /> CSS3</li>
                                    </ul>
                                </div>
                                <div className="tech-category">
                                    <h4><FontAwesomeIcon icon={faServer} className="tech-icon" /> Backend Development</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faNode} className="tech-icon" /> Node.js</li>
                                        <li><FontAwesomeIcon icon={faPython} className="tech-icon" /> Python</li>
                                        <li><FontAwesomeIcon icon={faCode} className="tech-icon" /> Django</li>
                                        <li><FontAwesomeIcon icon={faServer} className="tech-icon" /> RESTful APIs</li>
                                    </ul>
                                </div>
                                <div className="tech-category">
                                    <h4><FontAwesomeIcon icon={faDatabase} className="tech-icon" /> Database & Tools</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faDatabase} className="tech-icon" /> MongoDB</li>
                                        <li><FontAwesomeIcon icon={faDatabase} className="tech-icon" /> PostgreSQL</li>
                                        <li><FontAwesomeIcon icon={faGithub} className="tech-icon" /> Git & GitHub</li>
                                        <li><FontAwesomeIcon icon={faDocker} className="tech-icon" /> Docker</li>
                                    </ul>
                                </div>
                                <div className="tech-category">
                                    <h4><FontAwesomeIcon icon={faPalette} className="tech-icon" /> Design Tools</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faFigma} className="tech-icon" /> Figma</li>
                                        <li><FontAwesomeIcon icon={faPalette} className="tech-icon" /> Adobe XD</li>
                                        <li><FontAwesomeIcon icon={faPalette} className="tech-icon" /> Canva</li>
                                        <li><FontAwesomeIcon icon={faPalette} className="tech-icon" /> Adobe Photoshop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="education">
                            <h3>Education</h3>
                            <div className="education-cards">
                                <div className="education-card">
                                    <div className="education-icon">🎓</div>
                                    <h4>Bachelor of Science in Computer Science</h4>
                                    <p className="school">Multimedia University of Kenya</p>
                                    <p className="year">2021 - 2025</p>
                                </div>
                                <div className="education-card">
                                    <div className="education-icon">🏫</div>
                                    <h4>Software Engineering Program</h4>
                                    <p className="school">ALX Africa</p>
                                    <p className="year">2022</p>
                                </div>
                                <div className="education-card">
                                    <div className="education-icon">📚</div>
                                    <h4>Software Development Program</h4>
                                    <p className="school">LakeHub Academy</p>
                                    <p className="year">2021</p>
                                </div>
                                <div className="education-card">
                                    <div className="education-icon">✏️</div>
                                    <h4>Programming Certifications</h4>
                                    <p className="school">OpenWeaver</p>
                                    <p>Python, Web Development, Java</p>
                                    <p className="year">2021</p>
                                </div>
                            </div>
                        </div>

                        <div className="hobbies">
                            <h3>When I'm Not Coding</h3>
                            <ul>
                                <li>🚲 Riding bicycles</li>
                                <li>📺 Watching documentaries</li>
                                <li>📚 Reading</li>
                                <li>💻 Coding personal projects</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Services">
                <h2 className="glowing-title">Services</h2>
                <div className="services-container">
                    <div className="service-card">
                        <div className="service-icon">
                            <FontAwesomeIcon icon={faPalette} />
                        </div>
                        <h3>Web Design</h3>
                        <p>Creating stunning, user-centric website designs that capture your brand's essence. 
                        Specializing in responsive layouts, modern UI/UX, and engaging user experiences.</p>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">
                            <FontAwesomeIcon icon={faMobile} />
                        </div>
                        <h3>App Design</h3>
                        <p>Crafting intuitive mobile app interfaces with a focus on user experience. 
                        From wireframes to high-fidelity prototypes, ensuring your app looks and feels perfect.</p>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">
                            <FontAwesomeIcon icon={faCode} />
                        </div>
                        <h3>Web Development</h3>
                        <p>Building robust, scalable websites and web applications using modern technologies. 
                        Full-stack solutions that perform as good as they look.</p>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">
                            <FontAwesomeIcon icon={faRobot} />
                        </div>
                        <h3>App Development</h3>
                        <p>Developing cross-platform mobile applications that deliver seamless experiences. 
                        From concept to deployment, bringing your app ideas to life.</p>
                    </div>
                </div>
            </section>

            <section id="Clients">
                <h2 className="glowing-title">Client Projects</h2>
                <div className="timeline-container">
                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="project-info">
                                <h3>TicketSphere</h3>
                                <span className="project-url">ticketsphere.agency</span>
                                <p>Developing a comprehensive web application for event ticketing and management. 
                                Creating seamless user experiences for event organizers and attendees.</p>
                                <div className="tech-tags">
                                    <span>React</span>
                                    <span>Node.js</span>
                                    <span>MongoDB</span>
                                    <span>Tailwind CSS</span>
                                </div>
                            </div>
                            <div className="project-image">
                                <div className="image-placeholder">
                                    <img src="/assets/tsphere.png" alt="TicketSphere" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="project-info">
                                <h3>Hustlerati</h3>
                                <span className="project-url">hustlerati.com</span>
                                <p>Building an innovative platform connecting entrepreneurs and creating 
                                a vibrant community for business networking and growth opportunities.</p>
                                <div className="tech-tags">
                                    <span>React</span>
                                    <span>Django</span>
                                    <span>PostgreSQL</span>
                                    <span>Tailwind CSS</span>
                                </div>
                            </div>
                            <div className="project-image">
                                <div className="image-placeholder">
                                    <img src="/assets/hustler.png" alt="Hustlerati" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="project-info">
                                <h3>Pema-Kenya</h3>
                                <span className="project-url">pemakenya.org</span>
                                <p>Developing a web platform for environmental conservation and community engagement, 
                                facilitating sustainable development initiatives in Kenya.</p>
                                <div className="tech-tags">
                                    <span>React</span>
                                    <span>Node.js</span>
                                    <span>MySQL</span>
                                    <span>Tailwind CSS</span>
                                </div>
                            </div>
                            <div className="project-image">
                                <div className="image-placeholder">
                                    <img src="/assets/pema.png" alt="Pema-Kenya" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Contacts" className="contact-section">
                <h2 className="glowing-title">Contact Me</h2>
                <div className="contact-content">
                    <div className="contact-text">
                        <h3>Let's Connect!</h3>
                        <p>Ready to bring your ideas to life? I'm always open to discussing new opportunities, 
                        whether you need development services, want to explore my innovative project ideas, 
                        or are interested in investment partnerships. Let's turn vision into reality together!</p>
                        <p className="investment-note">💡 Open to discussing investment opportunities and sharing my innovative project ideas.</p>
                    </div>
                    <div className="contact-cards">
                        <a className="contact-card phone" href="tel:+254779051785">
                            <div className="card-content">
                                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                                <h4>Phone</h4>
                                <p>Let's Talk</p>
                            </div>
                        </a>
                        <a className="contact-card email" href="mailto:louisotieno2001@gmail.com">
                            <div className="card-content">
                                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                                <h4>Email</h4>
                                <p>Write to Me</p>
                            </div>
                        </a>
                        <a className="contact-card whatsapp" href="https://wa.me/254779051785" target="_blank" rel="noopener noreferrer">
                            <div className="card-content">
                                <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
                                <h4>WhatsApp</h4>
                                <p>Chat with Me</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <button 
                className={`back-to-top ${showButton ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Back to top"
            >
                ↑
            </button>
        </div>
    );
};

export default MainPage;
