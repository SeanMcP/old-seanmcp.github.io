# Hello world!

*Oct. 20, 2018*

My first thought is really a question: can I make a simple blogging platform for my personal site?

I know that there are [perfectly](https://ghost.org/) [good](https://jekyllrb.com/) [libraries](https://gatsbyjs.org) for doing just this sort of thing. However, I think there is something elegant about finding a simple solution with just the basics.

There were a few criterion for this blogging platform:

1. **Markdown based**: I'm cool; I'm hip; I read the [Twitters](https://twitter.com/mcpcodes); I know that the [JAMStack](https://jamstack.org/) is all the rage. But current trends aside, I enjoy writing in markdown. Plus, it would be a useful way to store my thoughts if I ever needed to move them to a new platform in the future.
2. **GitHub centric**: I really enjoy working with [GitHub](https://github.com/seanmcp) too. There is just something about it that feels good (the warm, tentacle-y embrace of [Mona, the Octocat](https://github.com/octocat) perhaps). It would be great to be able to create a new post straight from GitHub.
3. **Vanilla JS**: I use [React](https://reactjs.org/) and [React Native](https://facebook.github.io/react-native/) all-day every-day at work. I enjoy that too (the former more than the latter)! But there is something special about using the right tool for the problem. This site would best be served with basic JavaScript functions.

With these in mind, I'm going to utilize [Marked.js](https://marked.js.org/) and one my own [npm](https://www.npmjs.com/) libraries, [`nodify-string`](https://www.npmjs.com/package/nodify-string). Thoughts will be loaded based on a URL hash that corresponds to the markdown filename. Seems pretty straightforward (at this point), but we'll see as things progress.

Eventually I would like to make a call to the GitHub repo to get a list of available thought files, but that is a problem for a different time.

So to answer that initial question: we'll see!