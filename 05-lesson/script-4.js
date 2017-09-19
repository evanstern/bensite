$(document).ready(function () {
    var $addButton = $('#Add-Item-Button');
    var $newItemText = $('#Add-Item-Text');
    var $itemList = $('.fn-todo-items');

    var initialTodos = [
        'Take out garbage',
        'Clean cat litter',
        'Touch yourself at night',
    ];

    var createItem = function (text) {
        var $remove = $('<span class="fn-remove action-button remove">&times;</span>');
        var $toggle = $('<span class="fn-toggle action-button toggle">done</span>');
        var $item = $('<li class="fn-item item">');
        $item.append('<span class="item-text">' + text + '</span>')
        return $item.append($remove).append($toggle);
    };

    var removeItem = function ($item) {
        $item.remove();
    };

    var finishItem = function ($item) {
        $item.addClass('done');
    };

    var restoreItem = function ($item) {
        $item.removeClass('done');
    };

    var changeToggle = function ($item) {
        var text = $item.hasClass('done') ? 'undo' : 'done'
        $item.find('.fn-toggle').text(text);
    };

    var createAndAppend = function (text) {
        var $item = createItem(text);
        $itemList.append($item);
    };

    var addNewTodoItem = function () {
        // Get the item text and create a new <li> element
        var itemText = $newItemText.val();

        // Check to see if the input is empty and if it is, don't do anything.
        if (itemText === '') {
            return
        }

        // Create and append the new element to the list
        createAndAppend(itemText);

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

    $(document).on('click', '.fn-remove', function (event) {
        var $removeButton = $(event.currentTarget);
        var $item = $removeButton.parent('.fn-item');
        removeItem($item);
    });

    $(document).on('click', '.fn-toggle', function (event) {
        var $removeButton = $(event.currentTarget);
        var $item = $removeButton.parent('.fn-item');

        if (!$item.hasClass('done')) {
            finishItem($item);
        } else {
            restoreItem($item);
        }

        changeToggle($item);
    });

    initialTodos.forEach(function (todoText) {
        createAndAppend(todoText);
    });
});

