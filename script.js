document.addEventListener('DOMContentLoaded', function() {
  // افزودن مهارت جدید
  const addSkillBtn = document.querySelector('.btn');
  if (addSkillBtn) {
    addSkillBtn.addEventListener('click', function() {
      const skillName = prompt('لطفا نام مهارت جدید را وارد کنید:');
      if (skillName) {
        const skillLevel = prompt('سطح مهارت را مشخص کنید (عدد بین 0 تا 100):');
        if (skillLevel) {
          const skillsGrid = document.querySelector('.skills-grid');
          const newSkill = document.createElement('div');
          newSkill.className = 'skill-item';
          newSkill.innerHTML = `
            <div class="skill-info">
              <span class="skill-name">${skillName}</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: ${skillLevel}%"></div>
              </div>
            </div>
          `;
          skillsGrid.appendChild(newSkill);
        }
      }
    });
  }

  // حذف آیتم‌ها
  const deleteButtons = document.querySelectorAll('.btn-delete');
  deleteButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      if (confirm('آیا مطمئن هستید که می‌خواهید این آیتم را حذف کنید؟')) {
        this.closest('.timeline-item, .job').remove();
      }
    });
  });
});