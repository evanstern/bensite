
setTimeout(function () {
    var element = document.getElementById('delayed-header');
    element.style.display = 'block';
}, 3000);

$(document).ready(function () {
    var $addButton = $('#Add-Item');

    $addButton.click(function () {
        var $myList = $('ul.fn-list');
        var $newItem = $('<li>Wolfgang</li>');
        $myList.append($newItem);
    });
});

