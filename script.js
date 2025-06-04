 document.querySelectorAll('.category-title').forEach(title => {
            title.addEventListener('click', () => {
                const commandList = title.nextElementSibling;
                const icon = title.querySelector('.fa-chevron-down');
                
                commandList.style.display = commandList.style.display === 'none' ? 'grid' : 'none';
                icon.classList.toggle('fa-chevron-up');
                icon.classList.toggle('fa-chevron-down');
            });
        });
