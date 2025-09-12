        
    let Slide = document.querySelectorAll('.sliders .slider-box');
    let prevBtnSlider = document.querySelector('.prev-slider-btn');
    let nextBtnSlider = document.querySelector('.next-slider-btn');

    let n = 0;

    function changeSliders() {

        for (let i = 0; i < Slide.length; i++) {
            Slide[i].style.display = 'none';
        }
        Slide[n].style.display = 'flex'; 
    }

        prevBtnSlider.addEventListener('click', function () {
            n = (n - 1 + Slide.length) % Slide.length;
            changeSliders();
        });

        nextBtnSlider.addEventListener('click', function () {
            n = (n + 1) % Slide.length;
            changeSliders();
        });

        changeSliders();

        function toggleTypeDescription(el) {

            let typeDescription = el.nextElementSibling;

            if (typeDescription.style.display === 'none' || typeDescription.style.display === '') {
                
                typeDescription.style.display = 'block';

            } else {

                typeDescription.style.display = 'none';

            }
        }

        function filterCategory(category) {
            const items = document.querySelectorAll('.item-box');
            items.forEach(item => {
                item.style.display = (category === 'all' || item.dataset.category === category)
                    ? 'block'
                    : 'none';
            });
        }
    window.addEventListener("DOMContentLoaded", () => {
        const params = new URLSearchParams(window.location.search);
        const category = params.get("category") || "all";
        const genre = params.get("genre") || "all";

        filterItems(category, genre); // твоя функція фільтрації
    });