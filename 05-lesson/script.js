$(document).ready(function () {
    var $addButton = $('#Add-Item-Button');
    var $newItemText = $('#Add-Item-Text');
    var $itemList = $('.fn-todo-items');

    $addButton.click(function () {
        var itemText = $newItemText.val();
        var $item = $('<li>').text(itemText);
        $itemList.append($item);
    });
});

