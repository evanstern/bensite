$(document).ready(function () {
    var $addButton = $('#Add-Item-Button');
    var $newItemText = $('#Add-Item-Text');
    var $itemList = $('.fn-todo-items');

    var createItem = function (text) {
        return $('<li>').text(text);
    };

    var addNewTodoItem = function () {
        // Get the item text and create a new <li> element
        var itemText = $newItemText.val();

        // Check to see if the input is empty and if it is, don't do anything.
        if (itemText === '') {
            return
        }

        // Create and append the new element to the list
        var $item = createItem(itemText);
        $itemList.append($item);

        // Clear the input field's text area
        $newItemText.val('');
    };

    $addButton.click(function () {
        // When the button is clicked, add a new todo item
        addNewTodoItem();
    });

    $newItemText.on('keydown', function (event) {
        // When the <ENTER> button (id #13) is clicked, add a new item to the
        // list.
        if (event.which === 13) {
            addNewTodoItem();
        }
    });
});

