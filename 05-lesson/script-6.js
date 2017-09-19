$(document).ready(function () {
    var $addButton = $('#Add-Item-Button');
    var $newItemText = $('#Add-Item-Text');
    var $itemList = $('.fn-todo-items');

    // start the id counter at the next id in the list (4 in this case, since
    // the highest id so far is 3)
    var nextId = 4;

    var todos = [
        {
            id: 1,
            text: 'Take out garbage',
            finished: false,
        },
        {
            id: 2,
            text: 'Clean cat litter',
            finished: false,
        },
        {
            id: 3,
            text: 'Touch yourself at night',
            finished: false,
        },
    ];

    var newTodo = function (text) {
        return {
            id: nextId++,
            text: text,
            finished: false,
        }
    };

    var getTodo = function (id) {
        var found = todos.filter(function (todo) {
            return todo.id === id;
        });
        return found ? found[0] : undefined;
    };

    var removeTodo = function (todo) {
        todos = todos.filter(function (t) {
            return t.id !== todo.id;
        });
    };

    var render = function () {
        $itemList.empty();
        todos.forEach(function (todo) {
            var $item = createItem(todo);
            if (todo.finished) {
                $item.addClass('done');
            }
            $itemList.append($item);
        });
    };

    var createItem = function (todo) {
        var $remove = $('<span class="fn-remove action-button remove">&times;</span>');
        var $toggle = $('<span class="fn-toggle action-button toggle"></span>');
        var $item = $('<li class="fn-item item">');
        $item.data('todoid', todo.id);
        $item.append('<span class="fn-item-text item-text">' + todo.text + '</span>')
        $item.append($remove).append($toggle);

        if (todo.finished) {
            $toggle.text('undo');
            $item.addClass('done');
        } else {
            $toggle.text('done');
        }

        return $item;
    };

    var finishItem = function (todo) {
        todo.finished = true;
    };

    var restoreItem = function (todo) {
        todo.finished = false;
    };

    var addNewTodoItem = function () {
        // Get the item text and create a new <li> element
        var itemText = $newItemText.val();

        // Check to see if the input is empty and if it is, don't do anything.
        if (itemText === '') {
            return
        }

        var todo = newTodo(itemText);
        todos.push(todo);

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
        var todo = getTodo($item.data('todoid'));
        removeTodo(todo);
        render();
    });

    $(document).on('click', '.fn-toggle', function (event) {
        var $toggleButton = $(event.currentTarget);
        var $item = $toggleButton.parent('.fn-item');
        var todo = getTodo($item.data('todoid'));
        if (todo.finished) {
            restoreItem(todo);
        } else {
            finishItem(todo);
        }

        render();
    });

    render();
});

