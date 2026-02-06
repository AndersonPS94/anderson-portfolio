// ============================================
// ALURA API INTEGRATION
// ============================================

function initAluraAPI() {
    const aluraContainer = document.getElementById('alura-progress');
    if (!aluraContainer) return;

    // Dados de Backup com Cores
    const backupData = {
        "courseProgresses": [
            { "name": "Git e GitHub: compartilhando e colaborando em projetos", "progress": 86, "color": "#4f46e5" },
            { "name": "C: conhecendo a Linguagem das Linguagens", "progress": 8, "color": "#0ea5e9" },
            { "name": "Flutter: Arquitetura e Navegação", "progress": 16, "color": "#06b6d4" },
            { "name": "CI/CD Mobile: automação para aplicativos Android e iOS", "progress": 0, "color": "#8b5cf6" }
        ],
        "guides": [
            { "name": "Integração Contínua e Entrega Contínua", "finishedCourses": 0, "totalCourses": 6, "color": "#10b981" },
            { "name": "DevOps", "finishedCourses": 0, "totalCourses": 7, "color": "#3b82f6" },
            { "name": "Carreira QA: processos e automação de testes", "finishedCourses": 2, "totalCourses": 6, "color": "#f59e0b" },
            { "name": "Especialista em IA", "finishedCourses": 0, "totalCourses": 21, "color": "#ec4899" }
        ]
    };

    const isEnglish = window.location.pathname.includes('english_page');
    const texts = {
        courses: isEnglish ? "Current Courses" : "Cursos em Andamento",
        guides: isEnglish ? "Formations and Careers" : "Formações e Carreiras",
        finished: isEnglish ? "finished" : "concluído",
        error: isEnglish ? "Unable to load Alura information." : "Não foi possível carregar as informações da Alura."
    };

    fetch('assets/data/alura.json')
        .then(response => {
            if (!response.ok) throw new Error('File not found');
            return response.json();
        })
        .then(data => {
            renderAluraData(data, aluraContainer, texts);
        })
        .catch(error => {
            console.warn('Usando dados de backup da Alura devido a erro de carregamento.');
            renderAluraData(backupData, aluraContainer, texts);
        });
}

function renderAluraData(data, container, texts) {
    container.innerHTML = '';
    const colors = ['#4f46e5', '#0ea5e9', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#3b82f6', '#06b6d4'];

    // Container Principal (Dashboard)
    const dashboard = document.createElement('div');
    dashboard.className = 'alura-dashboard';

    // COLUNA 1: Cursos em Andamento
    const coursesCol = document.createElement('div');
    coursesCol.className = 'alura-column';
    coursesCol.innerHTML = `<h3 style="margin-bottom: 2rem; color: #2563eb; text-align: left; font-size: 1.5rem;">${texts.courses}</h3>`;
    
    const coursesGrid = document.createElement('div');
    coursesGrid.className = 'education-grid';
    
    const courses = data.courseProgresses || data.courseProgress || [];
    courses.slice(0, 4).forEach((course, index) => {
        const color = course.color || colors[index % colors.length];
        const card = document.createElement('div');
        card.className = 'course-card';
        card.style.borderLeft = `6px solid ${color}`;
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 15px; margin-bottom: 1rem;">
                <p style="font-weight: 600; margin: 0; font-size: 1.1rem; line-height: 1.4; color: #1e293b;">${course.name}</p>
                <span style="font-size: 1.1rem; color: ${color}; font-weight: 800; white-space: nowrap;">${course.progress}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${course.progress}%; background-color: ${color}"></div>
            </div>
        `;
        coursesGrid.appendChild(card);
    });
    coursesCol.appendChild(coursesGrid);
    dashboard.appendChild(coursesCol);

    // COLUNA 2: Formações/Guias
    const guidesCol = document.createElement('div');
    guidesCol.className = 'alura-column';
    guidesCol.innerHTML = `<h3 style="margin-bottom: 2rem; color: #2563eb; text-align: left; font-size: 1.5rem;">${texts.guides}</h3>`;
    
    const guidesGrid = document.createElement('div');
    guidesGrid.className = 'education-grid';
    
    const activeGuides = (data.guides || []).slice(0, 4);
    activeGuides.forEach((guide, index) => {
        const color = guide.color || colors[(index + 4) % colors.length];
        const card = document.createElement('div');
        card.className = 'course-card';
        card.style.borderLeft = `6px solid ${color}`;
        const progressPercent = (guide.finishedCourses / guide.totalCourses) * 100 || 0;
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 15px; margin-bottom: 1rem;">
                <p style="font-weight: 600; margin: 0; font-size: 1.1rem; line-height: 1.4; color: #1e293b;">${guide.name}</p>
                <span style="font-size: 1rem; color: ${color}; font-weight: 800; white-space: nowrap;">${guide.finishedCourses}/${guide.totalCourses} ${texts.finished}</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progressPercent}%; background-color: ${color}"></div>
            </div>
        `;
        guidesGrid.appendChild(card);
    });
    guidesCol.appendChild(guidesGrid);
    dashboard.appendChild(guidesCol);

    container.appendChild(dashboard);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    initAluraAPI();
});
