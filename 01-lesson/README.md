Lesson 1
========

Get to know `git`. Checkout this repository, do some stuff.

## 1. Install Git

On a mac use [brew](https://brew.sh/). Go to the website and follow the install instructions or just copy paste this into your terminal:

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

_note that you do not enter the `$` symbol, it is a convention to indicate the command prompt._

Then, use brew to install `git`

```bash
$ brew install git
```

## 2. Check out the repository

From your terminal, change directories to your home directory (if you aren't already there).

```bash
$ cd ~
```

Next you  need to create a directory for your projects. Go ahead and create the `projects` directory and then change directories to the newly created `projects` directory.

```bash
$ mkdir projects
$ cd ~/projects
```

Now check out this repository!

```bash
$ git clone git@github.com:evanstern/bensite.git
```

This will create a new folder in your `~/projects` directory. Go ahead and switch into that directory and then look at the contents:

```bash
$ cd bensite
$ ls
01-lesson       README.md
```

_note that the output of the `ls` command may be different than what is listed above as this guide was written before all the files had been added_

## 3. Congrats!

You have checked out the lessons!

## 4. A GitHub of your own

This is my github repository. I don't want your code in it. You should make your own!

Lucky for you, this is pretty easy to do but we'll have to do some moderately advanced stuff that I won't be explaining fully.

#### 4.1. Create a new GitHub account

First you'll need your own GitHub account.

Go to [github.com](https://www.github.com) and follow the sign up steps. Once you have an account, continue to the next step.

#### 4.2. Create an ssh key

This is one of the moderately advanced parts I'm not going to fully explain.

GitHub requires you use something called an "ssh key" if you don't want to have to use your username and password every time you try to push code to your repository.

A "ssh key" is used to authenticate yourself with foreign systems. GitHub is such a foreign system.

If you're particularly interested, you can read up on how "ssh" works by doing some simple Googling. For now, just follow my instructions.

First, open up your terminal and generate an ssh key:

```bash
$ ssh-keygen
```

Just hit "Enter" to accept all the defaults unless you know what you're doing. Don't worry about adding a passphrase to your "ssh" if you are asked to do so, just hit "Enter" to use a blank one.

After the program completes you will have two files in your `~/.ssh` directory. Go look at them

```bash
$ ls ~/.ssh
id_rsa      id_rsa.pub
```

The file we're interested in is `~/.ssh/id_rsa.pub`. We'll be copying its contents into GitHub in the next step.

#### 4.3. Copy your ssh key into GitHub

Log back into GitHub and go to your profile page.

Go to your settings page either by clicking on the "settings" link from the top-right dropdown menu or by entering this address into your navigation bar: [https://github.com/settings/profile](https://github.com/settings/profile)

Look at the left side navigation for the "SSH and GPG keys" link and click it.

* _there is a link on the SSH and GPG keys page that shows you how to do all of this_

Click the "New SSH key" button.

In the creation window that is displayed, type a name for your SSH key. It doesn't matter what it is called, just make it something that lets you know that this is a key for your personal computer: 'My Computer' or 'My Mac' or whatever.

Then, copy your `~/.ssh/id_rsa.pub` file's contents into the "Key" text area and save the form.

You should now be set to push code to your repositories!

#### 4.4. Make a repository!

Now it's time to create a new repository for your code.

Simply go back to your main GitHub page (which should be something like https://github.com/evanstern -- just substitute your name for mine) and click the repositotires tab. Then click the 'New' button and create a new repository using the default options, just give it a name (don't name it `bensite`) and hit the 'Create repository' button.

Once your repository is created, take note of the github address provided to you for your repository, it should be someting like `git@github.com:evanstern/bensite.git`. Copy that for the next step.

Open up your terminal and navigate to your projects directory. We're gonna check out your GitHub repository!

```bash
$ cd ~/projects

# clone the repository by replacing <your repo> with the github uri you copied above
$ git clone <your repo>
```

You have now checked out the repository! Now let's create a file and commit it. To make things easy, I'm going to call your repository `my_bensite`. Just replace that with whatever you actually called your repository.

```bash
$ cd ~/projects/my_bensite

# create a file
$ touch README.md

# add and commit your file to your local git repository
$ git add .
$ git commit -m "My first commit"
```

If all went well you should have just made your first commit. You can look at it by checking the log:

```bash
$ git log
commit 9f3f07fec012bf90091b7e8c87344548c9c1dd7f
Author: Evan Stern <suriansg@gmail.com>
Date:   Fri Sep 1 23:31:49 2017 -0400

    My first commit
```

Cool beans!

You've committed code to your local repository. But if you were to refresh your GitHub repository's page you'd notice that no files show up there. This is because your local repository is not the same as your GitHub repository (this is called distributed version control and it allows you to have your own clone of the master repository -- this is very helpful when you have more than one person on a project).

To add your code to your GitHub repository you need to "push" it there. In fact, that's the actual command you'll be using.

```bash
$ git push origin master
```

What that did is push the "master" branch of your code to the "origin" repository. The "master" branch is simply your main branch -- you'll not be using another branch any time soon so don't worry about it. The "origin" repository is just your GitHub repository.

Refresh your GitHub repository page. You should see a README.md file there.

Congrats! You have pushed code!

## 5. Conclusion

Ok, that's an insanely brief intro to Git. You should probably check the out [gittutorial](https://git-scm.com/docs/gittutorial) for more information. It's much better than I am at explaining it all.

In the next lesson we'll be creating a simple static website. Get ready!
