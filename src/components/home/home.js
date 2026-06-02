import React, { useEffect, useState, useRef } from 'react';
import '../../css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
    faReact,
    faJs,
    faPython,
    faNode,
    faGithub,
    faDocker,
    faFigma
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase,
    faServer,
    faPalette,
    faCode,
    faMobile,
    faRobot,
    faHardHat,
    faShieldAlt,
    faChartLine,
    faUsers,
    faArrowRight,
    faHandshake
} from '@fortawesome/free-solid-svg-icons';

const AnimatedSection = ({ children, className }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`animate-section ${visible ? 'visible' : ''} ${className || ''}`}>
            {children}
        </div>
    );
};

const MainPage = () => {
    const [showButton, setShowButton] = useState(false);
    const [heroText, setHeroText] = useState('');
    const fullText = 'Full Stack Developer & UI/UX Designer';

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setHeroText(fullText.slice(0, index + 1));
            index++;
            if (index >= fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const projects = [
        {
            name: 'BuildOnBudget',
            url: 'buildonbudget.app',
            desc: 'A comprehensive budget tracking and collaboration platform designed specifically for construction clients and companies. Manage project budgets, track expenses in real-time, collaborate with stakeholders, and generate financial reports with ease.',
            tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Chart.js'],
            icon: faHardHat,
            color: '#f59e0b',
            gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
            glow: 'rgba(245, 158, 11, 0.3)'
        },
        {
            name: 'PatrolLink',
            url: 'patrollink.io',
            desc: 'A guard tracking, digital log filing, and automated report generation system for security companies. Supports personal security, private firms, and commercial security operations with real-time GPS tracking, incident reporting, and shift management.',
            tags: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps API'],
            icon: faShieldAlt,
            color: '#06b6d4',
            gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
            glow: 'rgba(6, 182, 212, 0.3)'
        },
        {
            name: 'Hustlerati',
            url: 'hustlerati.com',
            desc: 'An innovative platform connecting entrepreneurs and creating a vibrant community for business networking and growth opportunities.',
            tags: ['React', 'Django', 'PostgreSQL', 'Tailwind CSS'],
            icon: faUsers,
            color: '#8b5cf6',
            gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
            glow: 'rgba(139, 92, 246, 0.3)'
        },
        {
            name: 'Customer Analytics Dashboard',
            url: 'https://github.com/louisotieno2001/customer-analytics',
            desc: 'Interactive dashboard analyzing customer behavior patterns and sales data for an e-commerce platform. Identified key insights leading to 25% increase in retention strategies.',
            tags: ['Python', 'Pandas', 'Tableau', 'SQL'],
            icon: faChartLine,
            color: '#10b981',
            gradient: 'linear-gradient(135deg, #10b981, #059669)',
            glow: 'rgba(16, 185, 129, 0.3)'
        },
        {
            name: 'Market Trend Forecaster',
            url: 'https://github.com/louisotieno2001/market-forecaster',
            desc: 'Predictive modeling tool for financial market trends using machine learning on historical stock data. Achieved 85% accuracy in short-term forecasts.',
            tags: ['Python', 'Scikit-learn', 'Matplotlib', 'Pandas'],
            icon: faChartLine,
            color: '#ef4444',
            gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
            glow: 'rgba(239, 68, 68, 0.3)'
        }
    ];

    return (
        <div className="main-wrapper">
            <div className="particles">
                {[...Array(1000)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 20}s`,
                            animationDuration: `${15 + Math.random() * 15}s`,
                        }}
                    />
                ))}
            </div>

            <section id="Hero" className="hero-section">
                <div className="hero-content">
                    <div className="hero-badge">Louis Otieno</div>
                    <h1 className="hero-title">
                        {heroText}
                        <span className="hero-cursor">|</span>
                    </h1>
                    <p className="hero-subtitle">
                        Crafting digital experiences that blend beautiful design with robust functionality.
                        Based in Kenya, building for the world.
                    </p>
                    <div className="hero-actions">
                        <a href="#Clients" className="hero-btn primary">
                            View My Work <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                        <a href="#Contacts" className="hero-btn secondary">
                            Let's Talk
                        </a>
                    </div>
                    <div className="hero-indicator">
                        <span className="scroll-mouse">
                            <span className="scroll-dot" />
                        </span>
                    </div>
                </div>
            </section>

            <AnimatedSection>
                <section id="About">
                    <h2 className="section-title">
                        <span className="title-accent">About</span> Me
                    </h2>
                    <div className="about-container">
                        <div className="about-text">
                            <p>
                                I'm a passionate Full Stack Developer, UI/UX Designer, and Data Analyst based in Kenya.
                                I specialize in building efficient, scalable, and visually engaging web applications, while also leveraging data analysis
                                to uncover insights that drive better decisions. With strong backend expertise and an eye for design,
                                I bridge the gap between beautiful user experiences, robust functionality, and data-driven solutions.
                            </p>

                            <div className="tech-stack">
                                <h3>Tech Stack</h3>
                                <div className="tech-categories">
                                    <div className="tech-category">
                                        <h4><FontAwesomeIcon icon={faCode} className="tech-icon" /> Frontend</h4>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faReact} className="tech-icon" /> React.js</li>
                                            <li><FontAwesomeIcon icon={faJs} className="tech-icon" /> JavaScript</li>
                                            <li><FontAwesomeIcon icon={faCode} className="tech-icon" /> Svelte</li>
                                            <li><FontAwesomeIcon icon={faServer} className="tech-icon" /> Express.js</li>
                                        </ul>
                                    </div>
                                    <div className="tech-category">
                                        <h4><FontAwesomeIcon icon={faServer} className="tech-icon" /> Backend</h4>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faNode} className="tech-icon" /> Node.js</li>
                                            <li><FontAwesomeIcon icon={faPython} className="tech-icon" /> Python</li>
                                            <li><FontAwesomeIcon icon={faCode} className="tech-icon" /> Django</li>
                                            <li><FontAwesomeIcon icon={faServer} className="tech-icon" /> RESTful APIs</li>
                                        </ul>
                                    </div>
                                    <div className="tech-category">
                                        <h4><FontAwesomeIcon icon={faDatabase} className="tech-icon" /> Database</h4>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faDatabase} className="tech-icon" /> MongoDB</li>
                                            <li><FontAwesomeIcon icon={faDatabase} className="tech-icon" /> PostgreSQL</li>
                                        </ul>
                                    </div>
                                    <div className="tech-category">
                                        <h4><FontAwesomeIcon icon={faCode} className="tech-icon" /> Tools</h4>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faGithub} className="tech-icon" /> Git & GitHub</li>
                                            <li><FontAwesomeIcon icon={faDocker} className="tech-icon" /> Docker</li>
                                            <li><FontAwesomeIcon icon={faCode} className="tech-icon" /> VS Code</li>
                                            <li><FontAwesomeIcon icon={faCode} className="tech-icon" /> npm</li>
                                        </ul>
                                    </div>
                                    <div className="tech-category">
                                        <h4><FontAwesomeIcon icon={faPalette} className="tech-icon" /> Design</h4>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faFigma} className="tech-icon" /> Figma</li>
                                            <li><FontAwesomeIcon icon={faPalette} className="tech-icon" /> Adobe XD</li>
                                            <li><FontAwesomeIcon icon={faPalette} className="tech-icon" /> Canva</li>
                                            <li><FontAwesomeIcon icon={faPalette} className="tech-icon" /> Adobe Photoshop</li>
                                        </ul>
                                    </div>
                                    <div className="tech-category">
                                        <h4><FontAwesomeIcon icon={faChartLine} className="tech-icon" /> Data Analysis</h4>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faChartLine} className="tech-icon" /> Excel</li>
                                            <li><FontAwesomeIcon icon={faPython} className="tech-icon" /> Python</li>
                                            <li><FontAwesomeIcon icon={faChartLine} className="tech-icon" /> Pandas</li>
                                            <li><FontAwesomeIcon icon={faChartLine} className="tech-icon" /> Tableau</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="education">
                                <h3>Education</h3>
                                <div className="education-cards">
                                    <div className="education-card">
                                        <div className="education-icon">🎓</div>
                                        <h4>BSc. Computer Science</h4>
                                        <p className="school">Multimedia University of Kenya</p>
                                        <p className="year">2021 - 2025</p>
                                    </div>
                                    <div className="education-card">
                                        <div className="education-icon">🏫</div>
                                        <h4>Software Engineering</h4>
                                        <p className="school">ALX Africa</p>
                                        <p className="year">2022</p>
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
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section id="Services">
                    <h2 className="section-title">
                        What <span className="title-accent">I Do</span>
                    </h2>
                    <div className="services-container">
                        <div className="service-card">
                            <div className="service-icon" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
                                <FontAwesomeIcon icon={faCode} />
                            </div>
                            <h3>Websites</h3>
                            <p>Designing and building modern, responsive websites end-to-end — from UI/UX design to full-stack development. I craft digital experiences that look great and perform even better.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' }}>
                                <FontAwesomeIcon icon={faMobile} />
                            </div>
                            <h3>Apps</h3>
                            <p>From wireframes to deployment — I design intuitive mobile app interfaces and build cross-platform applications that deliver seamless, engaging user experiences.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
                                <FontAwesomeIcon icon={faDatabase} />
                            </div>
                            <h3>Data Analysis</h3>
                            <p>Transforming raw data into actionable insights using Python, Pandas, SQL, and visualization tools to empower business decisions.</p>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section id="Clients">
                    <h2 className="section-title">
                        Featured <span className="title-accent">Projects</span>
                    </h2>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card" style={{ '--card-glow': project.glow }}>
                                <div className="project-card-header" style={{ background: project.gradient }}>
                                    <div className="project-card-icon">
                                        <FontAwesomeIcon icon={project.icon} />
                                    </div>
                                </div>
                                <div className="project-card-body">
                                    <div className="project-card-tag" style={{ color: project.color }}>
                                        {project.name === 'BuildOnBudget' || project.name === 'PatrolLink' ? 'NEW' : ''}
                                    </div>
                                    <h3>{project.name}</h3>
                                    <span className="project-url">{project.url}</span>
                                    <p>{project.desc}</p>
                                    <div className="tech-tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} style={{ background: `${project.color}15`, color: project.color }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section id="Partnerships" className="partnership-section">
                    <h2 className="section-title">
                        Seeking <span className="title-accent">Partners</span>
                    </h2>
                    <p className="partnership-subtitle">
                        I'm looking for <strong>sales partners</strong> to help drive growth across all three projects.
                        If you have a network in construction, security, or entrepreneurship — let's talk.
                    </p>
                    <div className="partnership-grid">
                        <div className="partnership-card" style={{ '--card-glow': 'rgba(245, 158, 11, 0.4)', '--card-accent': '#f59e0b' }}>
                            <div className="partnership-badge">Sales Partner Wanted</div>
                            <div className="partnership-icon" style={{ color: '#f59e0b' }}>
                                <FontAwesomeIcon icon={faHardHat} />
                            </div>
                            <h3>BuildOnBudget</h3>
                            <p>Budget tracking & collaboration for construction. Need a sales partner with construction industry connections.</p>
                            <div className="partnership-needs">
                                <span>🤝 Sales Partner</span>
                            </div>
                        </div>
                        <div className="partnership-card" style={{ '--card-glow': 'rgba(6, 182, 212, 0.4)', '--card-accent': '#06b6d4' }}>
                            <div className="partnership-badge">Sales Partner Wanted</div>
                            <div className="partnership-icon" style={{ color: '#06b6d4' }}>
                                <FontAwesomeIcon icon={faShieldAlt} />
                            </div>
                            <h3>PatrolLink</h3>
                            <p>Guard tracking & automated reporting for security firms. Looking for a sales partner in the security space.</p>
                            <div className="partnership-needs">
                                <span>🤝 Sales Partner</span>
                            </div>
                        </div>
                        <div className="partnership-card" style={{ '--card-glow': 'rgba(139, 92, 246, 0.4)', '--card-accent': '#8b5cf6' }}>
                            <div className="partnership-badge">Sales Partner Wanted</div>
                            <div className="partnership-icon" style={{ color: '#8b5cf6' }}>
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                            <h3>Hustlerati</h3>
                            <p>Entrepreneur networking & growth platform. Need a sales-driven partner to expand the community.</p>
                            <div className="partnership-needs">
                                <span>🤝 Sales Partner</span>
                            </div>
                        </div>
                    </div>
                    <div className="partnership-cta">
                        <p>Have sales experience or industry connections? Let's grow together.</p>
                        <a href="mailto:louisotieno2001@gmail.com?subject=Sales%20Partnership%20Inquiry" className="hero-btn primary">
                            <FontAwesomeIcon icon={faHandshake} /> Become a Sales Partner
                        </a>
                    </div>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section id="Contacts" className="contact-section">
                    <h2 className="section-title">
                        Let's <span className="title-accent">Connect</span>
                    </h2>
                    <div className="contact-content">
                        <div className="contact-text">
                            <p>Ready to bring your ideas to life? I'm always open to discussing new opportunities,
                                whether you need development services or want to explore innovative project ideas.</p>
                            <p className="investment-note">💡 Open to discussing investment opportunities and sharing ideas.</p>
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
            </AnimatedSection>

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
