import $ from 'jquery';
import 'select2';                       // globally assign select2 fn to $ element
import 'select2/dist/css/select2.css';


$(document).ready(function() {
    $('.js-example-basic-single').select2();
});

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