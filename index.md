---
layout: page
title: OpenLayers Evangelizers - The Cookbook
tagline: Recipes for day to day use
---
{% include JB/setup %}

## To-Do

Maybe a list of tasks To-Do ????

## Contribute

[GitHub site](https://github.com/OpenLayersEvangelizers/Cookbook/tree/gh-pages)
    
## Recipes

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


