import $ from 'jquery';
import 'select2';                       // globally assign select2 fn to $ element
import 'select2/dist/css/select2.css';

$(document).ready(function() {
    $('.js-example-basic-multiple').select2();
});

$(".js-example-basic-multiple").select2({
    width: 'resolve' // need to override the changed default
});