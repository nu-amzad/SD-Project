function toggleCollapse(button) {
      const content = button.nextElementSibling;
      content.classList.toggle('active');
      button.querySelector('span:last-child').textContent = content.classList.contains('active') ? '▲' : '▼';
    }

    const totalModules = document.querySelectorAll('.collapse-section').length;
    let completedModules = 0;

    function initializeProgress() {
      document.querySelectorAll('.collapse-section').forEach(section => {
        const moduleId = section.getAttribute('data-module-id');
        const button = section.querySelector('.complete-btn');
        if (localStorage.getItem(moduleId) === 'completed') {
          button.disabled = true;
          button.textContent = 'Completed';
          button.style.backgroundColor = '#aaa';
          completedModules++;
        }
      });
      updateProgress();
    }

    function markAsCompleted(button, moduleId) {
      if (!button.disabled) {
        button.disabled = true;
        button.textContent = 'Completed';
        button.style.backgroundColor = '#aaa';
        localStorage.setItem(moduleId, 'completed');
        completedModules++;
        updateProgress();
      }
    }

    function updateProgress() {
      const progress = (completedModules / totalModules) * 100;
      document.getElementById('progressBar').style.width = `${progress}%`;
      document.getElementById('progressText').textContent = `${Math.round(progress)}%`;
    }

    window.onload = initializeProgress;