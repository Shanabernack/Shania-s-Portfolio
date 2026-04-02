        let currentLang = 'de'; 

        function toggleLanguage() {
            currentLang = currentLang === 'de' ? 'en' : 'de';
            updateContent();
        }

        function updateContent() {
            const elements = document.querySelectorAll('[data-lang-de]');
            
            elements.forEach(el => {
                const translation = el.getAttribute(`data-lang-${currentLang}`);
                if (translation) {
                    if(el.tagName === 'INPUT') {
                        el.placeholder = translation;
                    } else {
                        el.innerText = translation;
                    }
                }
            });

            const langBtnText = document.getElementById('lang-text');
            if (langBtnText) {
                langBtnText.innerText = currentLang.toUpperCase();
            }
        }

        document.addEventListener("DOMContentLoaded", function() {
            updateContent();

            const loader = document.getElementById('loader-overlay');
            const barFill = document.getElementById('loader-fill');
            setTimeout(() => { barFill.style.width = '40%'; }, 100);
            setTimeout(() => { barFill.style.width = '75%'; }, 800);
            setTimeout(() => { barFill.style.width = '100%'; }, 1500);
            setTimeout(() => { loader.classList.add('loader-hidden'); setTimeout(() => { loader.style.display = 'none'; }, 800); }, 2000);

            const fisshPopup = document.getElementById('fissh-popup');
            setTimeout(() => {
                fisshPopup.style.display = 'block';
                fisshPopup.style.animation = 'bounce 0.5s ease';
            }, 5000);

            window.closeFissh = function() {
                fisshPopup.style.display = 'none';
            };

            window.dontClickFissh = function() {
                const randomX = Math.random() * (window.innerWidth - 320);
                const randomY = Math.random() * (window.innerHeight - 200);
                fisshPopup.style.left = randomX + 'px';
                fisshPopup.style.top = randomY + 'px';
                fisshPopup.style.transform = 'none';
            };

            const fisshHeader = document.getElementById('fissh-header-drag');
            let isDraggingFissh = false;
            let fisshOffsetX, fisshOffsetY;

            fisshHeader.addEventListener('mousedown', function(e) {
                isDraggingFissh = true;
                fisshOffsetX = e.clientX - fisshPopup.getBoundingClientRect().left;
                fisshOffsetY = e.clientY - fisshPopup.getBoundingClientRect().top;
                fisshPopup.style.transform = 'none';
            });

            document.addEventListener('mousemove', function(e) {
                if (isDraggingFissh) {
                    e.preventDefault();
                    fisshPopup.style.left = (e.clientX - fisshOffsetX) + 'px';
                    fisshPopup.style.top = (e.clientY - fisshOffsetY) + 'px';
                }
            });

            document.addEventListener('mouseup', function() {
                isDraggingFissh = false;
            });

            const stickers = document.querySelectorAll('.float-sticker');
            stickers.forEach(sticker => {
                let clicks = 0;
                sticker.addEventListener('click', function(e) {
                    e.stopPropagation(); clicks++;
                    sticker.classList.add('hit');
                    setTimeout(() => { sticker.classList.remove('hit'); }, 300);
                    if (clicks >= 4) {
                        sticker.classList.add('popped');
                        setTimeout(() => { sticker.remove(); }, 600);
                    }
                });
            });

            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const zoomTargets = document.querySelectorAll('.archive-polaroid, .mini-slide img, .sticker-photo');
            zoomTargets.forEach(target => {
                target.addEventListener('click', function(e) {
                    e.stopPropagation(); 
                    const img = this.tagName === 'IMG' ? this : this.querySelector('img');
                    if(img) { lightboxImg.src = img.src; lightbox.classList.add('active'); }
                });
            });
            lightbox.addEventListener('click', function() { lightbox.classList.remove('active'); });

            const slides = document.querySelectorAll('.slide');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const counter = document.getElementById('counter');
            let currentSlide = 0;
            const totalSlides = slides.length;
            function updateSlider() {
                slides.forEach(s => s.classList.remove('active'));
                slides[currentSlide].classList.add('active');
            }
            function nextSlide() { currentSlide = (currentSlide + 1) % totalSlides; updateSlider(); }
            function prevSlide() { currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; updateSlider(); }
            nextBtn.addEventListener('click', nextSlide); prevBtn.addEventListener('click', prevSlide);
            document.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') nextSlide(); if (e.key === 'ArrowLeft') prevSlide(); });

            function moveSlide(containerId, direction) {
                const container = document.getElementById(containerId);
                const slides = container.querySelectorAll('.mini-slide');
                let activeIndex = 0;
                slides.forEach((slide, index) => {
                    if (slide.classList.contains('active')) activeIndex = index;
                });
                slides[activeIndex].classList.remove('active');
                let newIndex = activeIndex + direction;
                if (newIndex >= slides.length) newIndex = 0;
                if (newIndex < 0) newIndex = slides.length - 1;
                slides[newIndex].classList.add('active');
            }

            setInterval(() => { moveSlide('gallery-1',1); }, 3000);
            setInterval(() => { moveSlide('gallery-2', 1); }, 3500);
            setInterval(() => { moveSlide('gallery-3', 1); }, 4000);

            function unlockGDD() {
                const input = document.getElementById('gdd-pass-input');
                const locked = document.getElementById('gdd-locked');
                const content = document.getElementById('gdd-content');
                const unlockMsgDE = "ZUGANG VERWEIGERT! FALSCHES PASSWORT.";
                const unlockMsgEN = "ACCESS DENIED! WRONG PASSCODE.";

                const passwords = [
                    {de: "kaldereta", en: "mochi"},
                    {de: "schnitzel", en: "pizza"}
                ];

                let isCorrect = false;
                
                passwords.forEach(p => {
                    if(input.value === p[currentLang]) isCorrect = true;
                });

                if(isCorrect) {
                    locked.style.display = 'none';
                    content.style.display = 'block';
                } else {
                    alert(currentLang === 'de' ? unlockMsgDE : unlockMsgEN);
                    input.value = '';
                    input.style.borderColor = '#fff';
                    setTimeout(() => input.style.borderColor = '#444', 1000);
                }
            }
            document.getElementById('gdd-pass-input').addEventListener('keypress', function (e) {
                if (e.key === 'Enter') unlockGDD();
            });

            const socialStrip = document.querySelector('.social-stripper-strip');
            let isDragging = false;
            let startY, initialTop;

            function startDrag(e) {
                if (e.target.classList.contains('social-btn')) { return; } 
                isDragging = true;
                socialStrip.classList.add('dragging');
                const clientY = e.clientY || e.touches[0].clientY;
                const rect = socialStrip.getBoundingClientRect();
                startY = clientY - rect.top;
                socialStrip.style.top = rect.top + 'px';
                socialStrip.style.bottom = 'auto';
            }
            function drag(e) {
                if (!isDragging) return;
                e.preventDefault();
                const clientY = e.clientY || e.touches[0].clientY;
                const y = clientY - startY;
                socialStrip.style.top = y + 'px';
            }
            function stopDrag() {
                isDragging = false;
                socialStrip.classList.remove('dragging');
            }

            socialStrip.addEventListener('mousedown', startDrag);
            window.addEventListener('mousemove', drag);
            window.addEventListener('mouseup', stopDrag);
            socialStrip.addEventListener('touchstart', startDrag, {passive: false});
            window.addEventListener('touchmove', drag, {passive: false});
            window.addEventListener('touchend', stopDrag);

        });

        function playTrack(trackId) {
            const audio1 = document.getElementById('audio-1');
            const audio2 = document.getElementById('audio-2');

            if (trackId === 1) {
                audio2.pause();
                if (audio1.paused) {
                    audio1.play();
                } else {
                    audio1.pause();
                }
            } else if (trackId === 2) {
                audio1.pause();
                if (audio2.paused) {
                    audio2.play();
                } else {
                    audio2.pause();
                }
            }
        }