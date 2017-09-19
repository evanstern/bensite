var nextId = 0;

var Todo = function (attrs) {
    this.id = nextId++;
    this.text = attrs.text;
    this.finished = !!attrs.finished;
};

var Todos = function () {
    this.todos = [];
    this.handlers = {};
};

Todos.prototype.get = function (id) {
    var found = this.todos.filter(function (todo) {
        return todo.id === id;
    });
    return found ? found[0] : undefined;
    return this;
};

Todos.prototype.add = function (attrs) {
    var todo = new Todo(attrs);
    this.todos.push(todo);
    this.processChange('add');
    return this;
};

Todos.prototype.remove = function (todo) {
    this.todos = this.todos.filter(function(t) {
        return t.id !== todo.id;
    });
    this.processChange('remove');
    return this;
};

Todos.prototype.forEach = function (fn) {
    var self = this;
    this.todos.forEach(function (todo) {
        fn.call(self, todo);
    });
};

Todos.prototype.bindOnChange = function (type, fn) {
    this.handlers[type] = fn;
};

Todos.prototype.processChange = function (type) {
    var handler = this.handlers[type];
    if (!handler) return;
    handler(type, this.todos);
};

var TodoListView = function (collection) {
    this.collection = collection;

    this.collection.bindOnChange('add', this.render.bind(this));
    this.collection.bindOnChange('remove', this.render.bind(this));

    this.$el = $('<ul class="todo-items">');
};

TodoListView.prototype.render = function () {
    var self = this;
    this.$el.empty();
    this.collection.forEach(function (todo) {
        var item = self.createItem(todo);

        if (todo.finished) {
            item.addClass('done');
        }

        self.$el.append(item);
    });
    return this;
};

TodoListView.prototype.createItem = function (todo) {
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

$(document).ready(function () {
    var $addButton = $('#Add-Item-Button');
    var $newItemText = $('#Add-Item-Text');
    var $itemList = $('.fn-todo-items');

    var todos = new Todos();

    var listView = new TodoListView(todos);
    listView.render().$el.appendTo($('.fn-items'));

    todos.add({ text: 'Take out garbage' });
    todos.add({ text: 'Clean cat litter' });
    todos.add({ text: 'Touch yourself at night' });

    var addNewTodoItem = function () {
        var itemText = $newItemText.val();
        if (itemText === '') return;
        $newItemText.val('');
        todos.add({ text: itemText });
    };

    $addButton.click(function () {
        // When the button is clicked, add a new todo item
        addNewTodoItem();
    });

    $newItemText.on('keydown', function (event) {
        if (event.which === 13) addNewTodoItem();
    });

    $(document).on('click', '.fn-remove', function (event) {
        var $removeButton = $(event.currentTarget);
        var $item = $removeButton.parent('.fn-item');
        var todo = todos.get($item.data('todoid'));
        todos.remove(todo);
    });

    $(document).on('click', '.fn-toggle', function (event) {
        var $toggleButton = $(event.currentTarget);
        var $item = $toggleButton.parent('.fn-item');
        var todo = todos.get($item.data('todoid'));

        todo.finished = !todo.finished;

        listView.render();
    });
});

