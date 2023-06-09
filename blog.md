---
layout: default
title: Blog
---
<ul>
{% for post in site.posts %}
    <div class="post">
        <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
        <p>{{ post.date | date_to_long_string }}</p>
    </div>
{% endfor %}
</ul>