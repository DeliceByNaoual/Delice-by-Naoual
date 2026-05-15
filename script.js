(function() {
    'use strict';

    const cakeModel = document.getElementById('cake3DModel');
    if (cakeModel) {
        cakeModel.addEventListener('pointerenter', function() {
            this.style.transform = 'scale(1.2) rotateY(10deg)';
            this.style.animationPlayState = 'paused';
        });
        cakeModel.addEventListener('pointerleave', function() {
            this.style.transform = '';
            this.style.animationPlayState = 'running';
        });
        cakeModel.addEventListener('click', function() {
            this.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.5)';
            this.style.transform = 'scale(1.4) rotateY(360deg)';
            document.body.classList.add('speed-up-bg');
            setTimeout(() => {
                document.body.classList.remove('speed-up-bg');
                this.style.transform = '';
            }, 1000);
        });
    }

    const buttons = document.querySelectorAll('.btn-perfected');
    buttons.forEach(btn => {
        const light = btn.querySelector('.btn-light');
        if (!light) return;

        btn.addEventListener('pointermove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            light.style.left = x + 'px';
            light.style.top = y + 'px';
        });
        btn.addEventListener('pointerleave', function() {
            light.style.left = '';
            light.style.top = '';
        });
    });

    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduce-motion');
    }

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 123) e.preventDefault(); // F12
        if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) e.preventDefault();
        if (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83)) e.preventDefault();
    });
})();