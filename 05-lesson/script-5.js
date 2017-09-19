$(document).ready(function () {
    var $addButton = $('#Add-Item-Button');
    var $newItemText = $('#Add-Item-Text');
    var $itemList = $('.fn-todo-items');

    var todos = [
        'Take out garbage',
        'Clean cat litter',
        'Touch yourself at night',
    ];

    var finishedItems = [
    ];

    var render = function () {
        $itemList.empty();
        todos.forEach(function (todoText) {
            var $item = createItem(todoText);
            if (isFinished($item.find('.fn-item-text').text())) {
                $item.addClass('done');
            }
            $itemList.append($item);
        });
    };

    var isFinished = function (text) {
        return finishedItems.indexOf(text) !== -1;
    }

    // this assumes each text is unique. if there are more than one matches
    // then this may get the wrong item!
    // p.s. this uses `.filter` which is not supported everywhere yet (Chrome
    // is good though).
    var removeItemByText = function (text) {
        // filter out anything that matches that text
        todos = todos.filter(function (todo) {
            return todo !== text;
        });
        render();
    };

    var createItem = function (text) {
        var $remove = $('<span class="fn-remove action-button remove">&times;</span>');
        var $toggle = $('<span class="fn-toggle action-button toggle"></span>');
        var $item = $('<li class="fn-item item">');
        $item.append('<span class="fn-item-text item-text">' + text + '</span>')
        $item.append($remove).append($toggle);

        if (isFinished($item.find('.fn-item-text').text())) {
            $toggle.text('undo');
            $item.addClass('done');
        } else {
            $toggle.text('done');
        }

        return $item;
    };

    var removeItem = function ($item) {
        removeItemByText($item.find('.fn-item-text').text());
    };

    var finishItem = function ($item) {
        finishedItems.push($item.find('.fn-item-text').text());
        console.log(finishedItems);
    };

    var restoreItem = function ($item) {
        finishedItems = finishedItems.filter(function (text) {
            return text !== $item.find('.fn-item-text').text();
        });
    };

    var addNewTodoItem = function () {
        // Get the item text and create a new <li> element
        var itemText = $newItemText.val();

        // Check to see if the input is empty and if it is, don't do anything.
        if (itemText === '') {
            return
        }

        todos.push(itemText);

        // Clear the input field's text area
        $newItemText.val('');

        render();
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
        removeItemByText($item.find('.fn-item-text').text());
    });

    $(document).on('click', '.fn-toggle', function (event) {
        var $toggleButton = $(event.currentTarget);
        var $item = $toggleButton.parent('.fn-item');

        if (isFinished($item.find('.fn-item-text').text())) {
            restoreItem($item);
        } else {
            finishItem($item);
        }

        render();
    });

    render();
});

