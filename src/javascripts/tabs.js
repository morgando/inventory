let select2 = import select2;

let categorySearch = document.querySelector('.js-example-basic-single');
categorySearch.select2();

let photo = document.querySelector('.item-photo');

let descriptionContainer = document.querySelector('#description-content');

let quantityContainer = document.querySelector('#quantity-content');

let tabs = document.querySelectorAll('.category-tab');

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {

        let data = JSON.parse(e.target.getAttribute('data'));
        
        descriptionContainer.textContent = data.description;

        quantityContainer.textContent = data.quantity;

        // load photo

    })
})