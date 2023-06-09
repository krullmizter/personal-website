---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
---

## Hi & Welcome To Me! 👋 
---
My name is Samuel Granvik, I'm a developer, nerd, dog lover and IT engineer from Finland.

This website holds my personal interests, some *future* blog posts, and the base information of me, what I'm doing and what I'm interested in.

This static website has been developed using [Jekyll](https://jekyllrb.com/), and it's hosted on my public GitHub, as a [GitHub page](https://pages.github.com/).

---

## Recent Blog Posts

{% for post in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.date | date_to_string }}</p>
  <p>{{ post.excerpt }}</p>
{% endfor %}