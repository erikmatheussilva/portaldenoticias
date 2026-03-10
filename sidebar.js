    document.addEventListener('DOMContentLoaded', function() {
        const menuBtn = document.getElementById('menuBtn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');

        function openSidebar() {
          sidebar.classList.add('open');
        }

        function closeSidebar() {
          sidebar.classList.remove('open');
        }

        menuBtn.addEventListener('click', function() {
          if (sidebar.classList.contains('open')) {
            closeSidebar();
          } else {
            openSidebar();
          }
        });

        overlay.addEventListener('click', closeSidebar);
      });