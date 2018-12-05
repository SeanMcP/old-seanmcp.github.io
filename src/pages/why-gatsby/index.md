---
title: Why Gatsby?
summary: false
date: '2018-12-04T12:12:03.284Z'
category: meta
tags: [blogging, gatsby]
published: false
---

After deciding to transition away from Medium and [launch my own blog](/articles/why-a-blog), the next decision to make was selecting a publishing platform.

I have dabbled with creating a custom blogging platform before, leveraging Markdown files and various APIs, but I don't have confidence in my own ability to make something resilient from scratch in a reasonable time period.

In looking for a self-hosted platform that would satisfy my needs, I considered a few options:

**~~Ghost~~**

Ghost is a neat little publishing platform about which I have heard good reviews. I would have enjoyed the opportunity to flex my Node muscles when developing. However, I'm not interested in paying for a platform at this time.

**~~Wordpress~~**

Story time: when I was in high school, I started a web design and development company with a classmate. My partner quickly picked up Wordpress development and wanted to use it on all our projects. But try as I might, I couldn't figure Wordpress out. Feeling like a failure, I stuck to project management and design.
 
(That business partner is now a PhD student in California using machine-learning algorithms to identify bird calls. Pretty neat!)

To this day, Wordpress remains a boogeyman for me. Even though it is a standard on the web, but I wasn't interested.

**~~Jekyll~~**

Jekyll looks neat and integrates well with GitHub pages. I'm not a huge fan of HTML templating, but they seem to have streamlined things pretty well. But I have never worked in Ruby or with `gems` before and wasn't looking to dive into something totally new for this project.

**Gatsby**

That left Gatsby, a "blazing fast" React- and GraphQL-powered static site generator. I tinked around with Gatsby a few times in the past but never got anywhere. Now with a real project in mind, I decided to go a little deeper.

The development process in Gatsby wasn't perfect, but it felt like a natural step for a React developer. I enjoyed using React components, out-of-the-box routing, hot-reloading, and leveraging GraphQL. Integrating GraphiQL IDE was a brilliant idea.

That being said, there were some hiccups a long the way. The newer Gatsby docs are great, but there are some older pages up that were either out-of-date or unclear. I had to modify some code samples taken from the docs in order for things to work correctly.

I was also thrown by the process by which Gatsby generates pages. I relied heavily on the documentation (see above) to understand the workings of `gatsby-node.js`, and it was only after a few days that I started to wrap my head around it.

But once the ball got rolling, it felt more and more natural. If I were to start over today, I would choose Gatsby again.