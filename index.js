        function showPage(pageId) {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => section.style.display = 'none');
            document.getElementById(pageId).style.display = 'block';
        }
