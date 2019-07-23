let name = document.querySelector('.item-name');

let photo = document.querySelector('.item-photo');

let description = document.querySelector('.item-description');

let quantity = document.querySelector('.item-quantity');

let tabs = document.querySelectorAll('.category-tab');

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        console.log('hi')
        let data = e.target.data;

        name.textContent = data.name;

        // load photo

        description.textContent = data.description;

        quantity.textContent = data.quantity + ' items in inventory'

    })
})