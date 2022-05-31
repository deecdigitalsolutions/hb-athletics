(function() {   
    
    function init() {
        noSweatModal();
        pricingModal();
        dropInModal();
        hideModalsListener();
    }
    
    function noSweatModal() {
        const primaryCta = document.querySelectorAll('.button-primary');    
        if(primaryCta.length > 0) {
            primaryCta.forEach((cta) => {
                cta.addEventListener('click', showModal);
            })
        }
    }
    
    function showModal() {
        const primaryModal = document.querySelector('.modal');
        if(primaryModal && !primaryModal.classList.contains('active')) {
            primaryModal.classList.add('active');
        }
    }

    function pricingModal() {
        const pricingCta = document.querySelector('nav .pricing');
        if(pricingCta) {
            pricingCta.addEventListener('click', showPricingModal);
        }
    }

    function dropInModal() {
        const dropInCta = document.querySelector('.dropincta');
        if(dropInCta) {
            dropInCta.addEventListener('click', showDropInModal);
        }
    }

    function showDropInModal() {
        const dropInModalEl = document.querySelector('.dropin-modal');
        if(!dropInModalEl.classList.contains('active')) {
            dropInModalEl.classList.add('active');
        }
    }
    
    function showPricingModal() {
        const pricingModalEl = document.querySelector('.pricing-modal');
        if(!pricingModalEl.classList.contains('active')) {
            pricingModalEl.classList.add('active');
        }
    }
    
    function hideModalsListener() {
        const primaryModal = document.querySelector('.modal');
        const pricingModal = document.querySelector('.pricing-modal');
        const dropInModalEl = document.querySelector('.dropin-modal');
        let close = document.querySelectorAll('.close');
    
        if(close.length > 0) {
            close.forEach((instance) => {
                instance.addEventListener('click', (e) => {
                    if(e.target.parentNode.classList.contains('no-sweat') && primaryModal.classList.contains('active')) {
                        primaryModal.classList.remove('active');
                    } else if(e.target.parentNode.classList.contains('pricing') && pricingModal.classList.contains('active')) {
                        pricingModal.classList.remove('active');
                    } else if(e.target.parentNode.classList.contains('dropin') && dropInModalEl.classList.contains('active')) {
                        dropInModalEl.classList.remove('active');
                    }
                })
            })
        }
    }
    
    init();
    
}());
