/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]') 

tabs .forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    }
  }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')               
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
window.addEventListener('scroll', () => {
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
})
window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.querySelector('.scrollup');
  if(window.scrollY >= 200){
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'; 
const iconTheme = 'uil-sun';
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');   
// Previously selected icon (if user selected)
const selectedIcon = localStorage.getItem('selected-icon');
// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
// We obtain the current icon that the interface has by validating the uil-sun icon 
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';    
// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the current theme and current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*==================== BLOG FUNCTIONALITY ====================*/
// Blog post data
const blogPosts = {
    1: {
        title: "Top Cybersecurity Trends to Watch in 2025",
        content: `
        <div class="blog-post-content">
            <h2>Top Cybersecurity Trends to Watch in 2025</h2>
            <p class="blog-meta">Published on July 5, 2025 • 5 min read • Cybersecurity</p>
            
            <p>As we progress through 2025, the cybersecurity landscape continues to evolve at an unprecedented pace. Here are the key trends that every IT professional should be aware of:</p>
            
            <h3>1. AI-Powered Security Solutions</h3>
            <p>Artificial Intelligence is revolutionizing how we detect and respond to cyber threats. Machine learning algorithms can now identify patterns and anomalies that would be impossible for humans to spot manually.</p>
            
            <h3>2. Zero Trust Architecture</h3>
            <p>The "never trust, always verify" approach is becoming the standard for enterprise security. This model requires verification for every user and device attempting to access network resources.</p>
            
            <h3>3. Quantum Computing Threats</h3>
            <p>While still emerging, quantum computing poses potential threats to current encryption methods. Organizations need to start preparing for post-quantum cryptography.</p>
            
            <h3>4. Cloud Security Evolution</h3>
            <p>With increased cloud adoption, securing distributed environments has become more critical than ever. Multi-cloud security strategies are essential.</p>
            
            <h3>Conclusion</h3>
            <p>Staying ahead of these trends is crucial for maintaining robust cybersecurity postures. Regular training and infrastructure updates are essential for adapting to this evolving landscape.</p>
        </div>
        `
    },
    2: {
        title: "Network Security Best Practices for Small Businesses",
        content: `
        <div class="blog-post-content">
            <h2>Network Security Best Practices for Small Businesses</h2>
            <p class="blog-meta">Published on June 28, 2025 • 8 min read • Network Admin</p>
            
            <p>Small businesses are increasingly becoming targets for cyber attacks. Here's a comprehensive guide to implementing robust network security without breaking the budget:</p>
            
            <h3>1. Implement Strong Access Controls</h3>
            <p>Use multi-factor authentication (MFA) for all user accounts and implement role-based access control to limit user permissions.</p>
            
            <h3>2. Regular Security Updates</h3>
            <p>Keep all systems, software, and firmware up to date. Establish a regular patching schedule and test updates in a controlled environment first.</p>
            
            <h3>3. Network Segmentation</h3>
            <p>Divide your network into smaller segments to limit the potential impact of a security breach. Use VLANs and firewalls to control traffic flow.</p>
            
            <h3>4. Employee Training</h3>
            <p>Your employees are your first line of defense. Regular security awareness training can prevent many common attacks like phishing.</p>
            
            <h3>5. Backup and Recovery</h3>
            <p>Implement a robust backup strategy with regular testing of recovery procedures. Follow the 3-2-1 backup rule: 3 copies, 2 different media, 1 offsite.</p>
            
            <h3>Budget-Friendly Solutions</h3>
            <p>Many effective security measures don't require significant investment. Open-source solutions, cloud-based security services, and good security practices can provide excellent protection.</p>
        </div>
        `
    },
    3: {
        title: "Modern Graphic Design: Balancing Aesthetics and Functionality",
        content: `
        <div class="blog-post-content">
            <h2>Modern Graphic Design: Balancing Aesthetics and Functionality</h2>
            <p class="blog-meta">Published on June 20, 2025 • 6 min read • Design</p>
            
            <p>In today's digital world, graphic design must serve both form and function. Here's how to create designs that are both beautiful and effective:</p>
            
            <h3>1. User-Centered Design</h3>
            <p>Always start with the user's needs and goals. Beautiful design that doesn't serve the user's purpose is ultimately unsuccessful.</p>
            
            <h3>2. Typography as Communication</h3>
            <p>Choose fonts that not only look good but also enhance readability and convey the right message. Consider hierarchy, spacing, and contrast.</p>
            
            <h3>3. Color Psychology</h3>
            <p>Colors evoke emotions and influence behavior. Understanding color psychology helps create designs that resonate with your target audience.</p>
            
            <h3>4. Responsive Design Principles</h3>
            <p>Design for multiple devices and screen sizes. Your design should maintain its effectiveness across all platforms.</p>
            
            <h3>5. Accessibility Matters</h3>
            <p>Ensure your designs are accessible to all users, including those with disabilities. This includes proper contrast ratios, alt text, and intuitive navigation.</p>
            
            <h3>Tools and Trends</h3>
            <p>Stay updated with modern design tools like Figma, Adobe Creative Suite, and emerging AI-powered design assistants. Current trends include minimalism, bold typography, and sustainable design practices.</p>
        </div>
        `
    },
    4: {
        title: "Essential Skills for Aspiring IT Professionals",
        content: `
        <div class="blog-post-content">
            <h2>Essential Skills for Aspiring IT Professionals</h2>
            <p class="blog-meta">Published on June 15, 2025 • 7 min read • Career</p>
            
            <p>Breaking into the IT field can seem daunting, but with the right skills and mindset, it's an achievable goal. Here's your roadmap:</p>
            
            <h3>Technical Skills</h3>
            <h4>1. Programming Languages</h4>
            <p>Start with Python, Java, or JavaScript. These languages are versatile and widely used across various IT domains.</p>
            
            <h4>2. Networking Fundamentals</h4>
            <p>Understand TCP/IP, DNS, DHCP, and basic network troubleshooting. Consider pursuing CompTIA Network+ certification.</p>
            
            <h4>3. Cloud Computing</h4>
            <p>Learn about AWS, Azure, or Google Cloud Platform. Cloud skills are in high demand across all IT roles.</p>
            
            <h3>Soft Skills</h3>
            <h4>1. Problem-Solving</h4>
            <p>Develop analytical thinking and troubleshooting methodologies. Practice breaking down complex problems into manageable parts.</p>
            
            <h4>2. Communication</h4>
            <p>Learn to explain technical concepts to non-technical audiences. Strong communication skills set you apart.</p>
            
            <h4>3. Continuous Learning</h4>
            <p>Technology evolves rapidly. Develop a habit of continuous learning through online courses, certifications, and hands-on practice.</p>
            
            <h3>Getting Started</h3>
            <p>Build a home lab, contribute to open-source projects, and network with IT professionals. Consider internships or entry-level positions to gain real-world experience.</p>
        </div>
        `
    },
    5: {
        title: "Securing Remote Work: A Complete Guide",
        content: `
        <div class="blog-post-content">
            <h2>Securing Remote Work: A Complete Guide</h2>
            <p class="blog-meta">Published on June 8, 2025 • 10 min read • Cybersecurity</p>
            
            <p>Remote work has become the norm for many organizations. Here's how to maintain security while working from anywhere:</p>
            
            <h3>Secure Communication</h3>
            <h4>1. VPN Usage</h4>
            <p>Always use a corporate VPN when accessing company resources. Ensure the VPN uses strong encryption protocols.</p>
            
            <h4>2. Encrypted Messaging</h4>
            <p>Use secure communication platforms like Signal, Microsoft Teams, or Slack for business communications.</p>
            
            <h3>Device Security</h3>
            <h4>1. Endpoint Protection</h4>
            <p>Install and maintain up-to-date antivirus software, firewalls, and endpoint detection and response (EDR) solutions.</p>
            
            <h4>2. Device Management</h4>
            <p>Use Mobile Device Management (MDM) or Mobile Application Management (MAM) solutions to control and secure corporate devices.</p>
            
            <h3>Home Network Security</h3>
            <h4>1. Router Configuration</h4>
            <p>Change default passwords, enable WPA3 encryption, and regularly update router firmware.</p>
            
            <h4>2. Network Segregation</h4>
            <p>Create a separate network for work devices, isolated from personal devices and IoT equipment.</p>
            
            <h3>Best Practices</h3>
            <ul>
                <li>Regular security training for remote employees</li>
                <li>Multi-factor authentication for all accounts</li>
                <li>Regular security assessments and audits</li>
                <li>Incident response procedures for remote scenarios</li>
                <li>Data backup and recovery plans</li>
            </ul>
            
            <h3>Compliance Considerations</h3>
            <p>Ensure remote work policies comply with relevant regulations like GDPR, HIPAA, or industry-specific requirements.</p>
        </div>
        `
    },
    6: {
        title: "My Creative Process: From Concept to Final Design",
        content: `
        <div class="blog-post-content">
            <h2>My Creative Process: From Concept to Final Design</h2>
            <p class="blog-meta">Published on May 30, 2025 • 4 min read • Design</p>
            
            <p>Every great design starts with a process. Here's a behind-the-scenes look at how I approach creative projects:</p>
            
            <h3>1. Discovery Phase</h3>
            <p>I start by understanding the client's needs, target audience, and project goals. This includes research, competitor analysis, and gathering inspiration.</p>
            
            <h3>2. Concept Development</h3>
            <p>I brainstorm multiple concepts, sketching initial ideas and exploring different visual directions. This is where creativity meets strategy.</p>
            
            <h3>3. Design Execution</h3>
            <p>Using tools like Adobe Creative Suite, I refine the chosen concept, paying attention to typography, color, composition, and visual hierarchy.</p>
            
            <h3>4. Feedback and Iteration</h3>
            <p>I present the design to the client, gather feedback, and make necessary revisions. Collaboration is key to achieving the best results.</p>
            
            <h3>5. Final Production</h3>
            <p>Once approved, I prepare final files in appropriate formats for various applications - print, web, or digital media.</p>
            
            <h3>Tools I Use</h3>
            <ul>
                <li>Adobe Photoshop for photo manipulation and digital art</li>
                <li>Adobe Illustrator for vector graphics and logos</li>
                <li>Canva for quick social media designs</li>
                <li>CorelDRAW for specialized vector work</li>
            </ul>
            
            <h3>My Design Philosophy</h3>
            <p>Good design should communicate clearly, evoke emotion, and serve its intended purpose. It's not just about making things look pretty - it's about solving problems through visual communication.</p>
            
            <p>Every project teaches me something new, and I'm constantly evolving my process to deliver better results for my clients.</p>
        </div>
        `
    }
};

// Function to show blog post in a modal or expanded view
function showBlogPost(postId) {
    const post = blogPosts[postId];
    if (!post) return;
    
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'blog-modal';
    modal.innerHTML = `
        <div class="blog-modal-content">
            <span class="blog-modal-close">&times;</span>
            ${post.content}
            <div class="blog-modal-footer">
                <button class="button button--flex" onclick="closeBlogModal()">
                    <i class="uil uil-arrow-left button__icon"></i> Back to Blog
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close modal when clicking outside or on close button
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.className === 'blog-modal-close') {
            closeBlogModal();
        }
    });
    
    // Prevent default link behavior
    return false;
}

// Function to close blog modal
function closeBlogModal() {
    const modal = document.querySelector('.blog-modal');
    if (modal) {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    }
}
