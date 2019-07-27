import $ from 'jquery';
import 'searchBar.js';


// let photo = $('.item-photo');

// let descriptionContainer = $('#description-content');

// let quantityContainer = $('#quantity-content');

console.log('hello....')

let tabs = $('.item-button');//document.querySelectorAll('.category-tab');

console.log(tabs)

tabs.each(function(idx) {
    $(this).on('click', function() {

        console.log('i am here')

        let url = '/item/' + this.data;

        console.log(url)

        http.open('get', url);
        http.send();

        // let data = JSON.parse(this.getAttribute('data'));
        
        // descriptionContainer.text(data.description);

        // quantityContainer.text(data.quantity);

    });
});