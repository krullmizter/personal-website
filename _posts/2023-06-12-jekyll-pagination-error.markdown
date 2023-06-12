---
layout: post
title:  "Jekyll Pagination Error"
date:   2023-06-12 10:30:02 +0300
categories: jekyll
featured_image: /assets/images/jekyll-pagination.png
excerpt_separator: <!--more-->
---

TLDR

Change the name of your blog file from `blog.html` to `index.html`, and use the entire correct relative path in your config file. A tip, remember to restart your local development server when making changes to the `_config.yml` file.


<!--more-->
---

I tried, and tried, and tried to get the built in pagination to work with Jekyll. I followed the official [guide]("https://jekyllrb.com/docs/pagination/") but to no help. Well we all need to carefully read the documentation and check what permalinks we pass on to our configuration files before we begin to smash our keyboards to bits and pieces.
All my pages are all inside a pages folder directly at the root. I then have a blog page that holds all the created blog posts, I wanted to use pagination on that page to not create an infinite scroll of blog posts. However the first mistake I made is that with Jekyll pagination is only works on an `index.html` file. So to solve that I moved my `blog.html` inside a folder called `blog`, and renamed the `blog.html` to `index.html`.

However this error message appeared in the console when I ran bundle exec jekyll serve

    Pagination: Pagination is enabled, but I couldn't find an index.html page to use as the pagination template. Skipping pagination.

This was fixed when I configured my `_config.yml` correctly. I had it like this: `paginate_path: "/blog/page:num/"`, but I needed to use the entire relative path like this: `paginate_path: "/pages/blog/page:num/"`, that solved the error message above.

So remember kids, read the documentation, double-check your spelling, and always check the config file.