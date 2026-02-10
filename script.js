// Set current date
document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('en-US', options);
    }
    
    loadProjects();
    loadPosts();
});

// Load Projects from JSON
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const data = await response.json();
        const projectsGrid = document.getElementById('projects-grid');
        
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = '';
        
        data.projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.style.animationDelay = `${index * 0.1}s`;
            
            projectCard.innerHTML = `
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-meta">
                        <span>${formatDate(project.date)}</span>
                        ${project.tags.map(tag => `<span>•</span><span>${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="project-content">
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="color-accent-bar" style="background-color: ${project.color}"></div>
            `;
            
            // Add click handler for links
            if (project.link && project.link !== '#') {
                projectCard.style.cursor = 'pointer';
                projectCard.addEventListener('click', () => {
                    window.open(project.link, '_blank');
                });
            }
            
            projectsGrid.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
        const projectsGrid = document.getElementById('projects-grid');
        if (projectsGrid) {
            projectsGrid.innerHTML = '<p style="color: var(--color-secondary);">Projects loading... Check GitHub for latest work.</p>';
        }
    }
}

// Load Blog Posts from JSON
async function loadPosts() {
    try {
        const response = await fetch('posts.json');
        const posts = await response.json();
        const postsGrid = document.getElementById('posts-grid');
        
        if (!postsGrid) return;
        
        postsGrid.innerHTML = '';
        
        posts.forEach((post, index) => {
            const postCard = document.createElement('a');
            postCard.className = 'post-card';
            postCard.href = post.link || 'https://github.com/mishraxharshit/portfolio/wiki';
            postCard.target = '_blank';
            postCard.style.animationDelay = `${index * 0.1}s`;
            
            postCard.innerHTML = `
                <div class="post-date">${post.date}</div>
                <div>
                    <h3 class="post-title">${post.title}</h3>
                </div>
            `;
            
            postsGrid.appendChild(postCard);
        });
    } catch (error) {
        console.error('Error loading posts:', error);
        const postsGrid = document.getElementById('posts-grid');
        if (postsGrid) {
            postsGrid.innerHTML = '<p style="color: var(--color-secondary);">Notes and documentation available on the Wiki.</p>';
        }
    }
}

// Helper function to format dates
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.project-card, .gallery-item');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
