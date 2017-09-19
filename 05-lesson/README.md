Lesson 5
========

A basic TODO application.

## Overview

Just a simple todo application using jQuery. In this lesson we'll get the following stuff working:

1. Build a simple interface to show the TODO items
2. Add new TODO items to the list
3. Mark TODO items as "done"

Very simple.

## Part 1

Simple interface.

You can add a new item by typing into the text box and then hitting the "Add New Item" button.

Of special note is the click event handler for when you click the "Add New Item" button.

```
    $addButton.click(function () {
        ...
    });

```

jQuery's `$.click()` function is a shortcut to the more vebose `$.on('click', function () ...)` function call. It is just saying: "When this button is clicked, do the stuff inside the `function` block I specify".

## Part 2

Add some nice stuff.

Do some refactoring.

A few new functions and special code blocks have been created to help make things easier down the road.

#### `createItem`

```javascript
    var createItem = function (text) {
        return $('<li>').text(text);
    }
```

The `createItem` function is a little simplistic right now, but in the future it will become more complicated. Specifically, when we get add more complicated HTML code and/or when we start using templating systems this will be much easier to work with.

<em>A general rule of thumb is to always extract functionality into small functions whenever possible. This helps "future proof" your code since it is easier to make changes to small pieces of self contained code than on bigger "monoliths" of code.</em>

#### `addNewTodoItem`

```
    var addNewTodoItem = function () {
        ...
    }
```

#### `$.on('keydown', ...)`

```javascript
    $newItemText.on('keydown', function (event) {
        if (event.which === 13) {
            addNewTodoItem();
        }
    }
```

This is how you can bind an event onto a text input that is triggered whenever a user presses a key while in that input. In this case, we're binding on the 'keydown' event.

The other thing to note here is that we're checking to see if the key pressed was the `<ENTER>` key and if it is, we add a new todo item just like we would if you hit the "Add New Item" button.

<em>Don't worry, about how I knew `13` is the "Enter" key, that's just something you pick up after doing this a lot, otherwise you just look up "how to bind on 'Enter' keypress" and do what the Googles tell you to do.</em>

## Part 3

Rather than initially have some todos in the HTML itself, let's make the JavaScript code handle that for us. To accomplish this we have to add a few more functions and refactor a few more lines.

#### `createAndAppend`

```javascript
    var createAndAppend = function (text) {
        var $item = createItem(text);
        $itemList.append($item);
    };
```

The `createAndAppend` function encapsulates the item creation and its addition to the list. This will allow us to add arbitrary items to the list from anywhere in our code. Previously, this code was located inside the `addNewTodoItem` function and the only way we could add todo items was if that function was called -- and since that function also deals with things like the text field input, it's not useful for us if we want to bootstrap the TODO list with arbitrary stuff.

#### `addNewTodoItem`

```javascript
    var addNewTodoItem = function () {
        ...

        // Create and append the new element to the list
        createAndAppend(itemText);

        ...
    };

```

As mentioned above, the `createAndAppend` function's contents used to live inside the `addNewTodoItem` function. Now that the `createAndAppend` function has its own existance, we can call it from within the `addNewTodoItem` function.

#### `initialTodos`

This is just the list of todo items we want to initially load up

### `initialTodos.forEach`

```javascript
    initialTodos.forEach(function (todoText) {
        createAndAppend(todoText);
    });
```

And here is how we add all the initial todo items!

## Part 4




