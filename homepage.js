document.addEventListener('DOMContentLoaded', function () {
    // 导航栏激活状态
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 首页轮播图
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    let slideInterval;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides.forEach(slide => slide.style='display: none');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style = 'display: block';
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // 初始化轮播图
    startSlideShow();

    // 轮播图控制
    nextBtn.addEventListener('click', function() {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    prevBtn.addEventListener('click', function() {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            stopSlideShow();
            showSlide(index);
            startSlideShow();
        });
    });

    // 鼠标悬停暂停轮播
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', stopSlideShow);
    slider.addEventListener('mouseleave', startSlideShow);

    // 用户评价轮播
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    let currentTestimonial = 0;
    let testimonialInterval;

    function showTestimonial(n) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));

        currentTestimonial = (n + testimonialSlides.length) % testimonialSlides.length;

        testimonialSlides[currentTestimonial].classList.add('active');
        testimonialDots[currentTestimonial].classList.add('active');
    }

    function startTestimonialShow() {
        testimonialInterval = setInterval(function() {
            showTestimonial(currentTestimonial + 1);
        }, 5000);
    }

    function stopTestimonialShow() {
        clearInterval(testimonialInterval);
    }

    // 初始化用户评价轮播
    startTestimonialShow();

    // 用户评价点击控制
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            stopTestimonialShow();
            showTestimonial(index);
            startTestimonialShow();
        });
    });

    // 鼠标悬停暂停用户评价轮播
    const testimonialSlider = document.querySelector('.testimonials-slider');
    testimonialSlider.addEventListener('mouseenter', stopTestimonialShow);
    testimonialSlider.addEventListener('mouseleave', startTestimonialShow);

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 订阅表单提交
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // 这里可以添加实际的订阅处理逻辑，例如发送到服务器
            
            alert(`感谢您的订阅！我们将会向 ${email} 发送最新资讯。`);
            this.reset();
        });
    }

    // 滚动动画效果
    function revealOnScroll() {
        const sections = document.querySelectorAll('.section');
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < windowHeight - revealPoint) {
                section.classList.add('revealed');
            } else {
                section.classList.remove('revealed');
            }
        });
    }

    // 初始检查
    revealOnScroll();

    // 滚动时检查
    window.addEventListener('scroll', revealOnScroll);

    // 添加滚动动画CSS
    const style = document.createElement('style');
    style.textContent = `
        .section {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .section.revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});
