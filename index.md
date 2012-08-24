---
layout: page
title: OpenLayers Evangelizers - The Cookbook
tagline: Recipes for day to day use
---
{% include JB/setup %}

## Contribute

[GitHub site](https://github.com/OpenLayersEvangelizers/Cookbook/tree/gh-pages)

## To do

[Check open issues](https://github.com/OpenLayersEvangelizers/Cookbook/issues)
    
## Recipes

<ul class="posts">
  {% for post in site.posts %}
    {% if post.category == "recipes" %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>


## Blog

<ul class="posts">
  {% for post in site.posts %}
    {% if post.category == "blog" %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
