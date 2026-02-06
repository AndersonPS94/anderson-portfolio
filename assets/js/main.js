// ============================================
// ALURA API INTEGRATION
// ============================================

function initAluraAPI() {
    const aluraContainer = document.getElementById('alura-progress');
    if (!aluraContainer) return;

    // Carregamos os dados de um arquivo JSON local gerado pela API
    const apiUrl = `assets/data/alura.json`;

    const isEnglish = window.location.pathname.includes('english_page');
    const texts = {
        courses: isEnglish ? "Current Courses" : "Cursos em Andamento",
        guides: isEnglish ? "Formations and Careers" : "Formações e Carreiras",
        finished: isEnglish ? "finished" : "concluído",
        error: isEnglish ? "Unable to load Alura information." : "Não foi possível carregar as informações da Alura."
    };

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error('Failed to load Alura data');
            return response.json();
        })
        .then(data => {
            renderAluraData(data, aluraContainer, texts);
        })
        .catch(error => {
            console.error('Error fetching Alura data:', error);
            aluraContainer.innerHTML = `<div class="error-message">${texts.error}</div>`;
        });
}

function renderAluraData(data, container, texts) {
    container.innerHTML = '';

    // Renderizar Cursos em Andamento
    const coursesSection = document.createElement('div');
    coursesSection.className = 'alura-section';
    coursesSection.innerHTML = `<h3 style="margin-bottom: 1.5rem; color: #2563eb;">${texts.courses}</h3>`;
    
    // A API real usa 'courseProgresses' (com 'es' no final)
    const courses = data.courseProgresses || data.courseProgress || [];
    const activeCourses = courses.slice(0, 4);
    
    if (activeCourses.length > 0) {
        activeCourses.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.style.marginBottom = '1.5rem';
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <p style="font-weight: 600; margin: 0; font-size: 0.95rem;">${course.name}</p>
                    <span style="font-size: 0.9rem; color: #2563eb; font-weight: bold;">${course.progress}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${course.progress}%"></div>
                </div>
            `;
            coursesSection.appendChild(card);
        });
    } else {
        coursesSection.innerHTML += `<p style="color: #888;">Nenhum curso em andamento no momento.</p>`;
    }
    container.appendChild(coursesSection);

    // Renderizar Formações/Guias
    const guidesSection = document.createElement('div');
    guidesSection.className = 'alura-section';
    guidesSection.innerHTML = `<h3 style="margin-bottom: 1.5rem; color: #2563eb;">${texts.guides}</h3>`;
    
    const activeGuides = (data.guides || []).slice(0, 5);
    
    if (activeGuides.length > 0) {
        activeGuides.forEach(guide => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.style.marginBottom = '1.5rem';
            const progressPercent = (guide.finishedCourses / guide.totalCourses) * 100;
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <p style="font-weight: 600; margin: 0; font-size: 0.95rem;">${guide.name}</p>
                    <span style="font-size: 0.9rem; color: #2563eb; font-weight: bold;">${guide.finishedCourses}/${guide.totalCourses} ${texts.finished}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progressPercent}%; background-color: ${guide.color || '#2563eb'}"></div>
                </div>
            `;
            guidesSection.appendChild(card);
        });
    } else {
        guidesSection.innerHTML += `<p style="color: #888;">Nenhuma formação iniciada.</p>`;
    }
    container.appendChild(guidesSection);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    initAluraAPI();
});
