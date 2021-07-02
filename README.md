# Github Label Builder

This application renders SVG Labels for my use in Github Pull Request comments.

## Usage

### Github Markdown (Difficulty Level 2)
```
![Passing Question](https://your-website/passing/question.svg)
What do you think of calling this variable `subscribedTopics` or something like that, just to make it more explicit?
```
> ![Passing Question](https://gh-labels.dancrews.com/passing/question….svg)
>
> What do you think of calling this variable `subscribedTopics` or something like > that, just to make it more explicit?


```
![Optional Best Practice](https://your-website/optional/best%20practice.svg)
I would recommend we do the `console.error` BEFORE we save it to the database. That way, if the DB save also fails, we can capture both failures.
```
> ![Optional Best Practice](https://gh-labels.dancrews.com/optional/best%20practices.svg)
>
> I would recommend we do the `console.error` BEFORE we save it to the database. That way, if the DB save also fails, we can capture both failures.

```
![Blocking Danger](https://your-website/blocking/danger.svg)
If you don't `return await` here, you're not going to catch it in your `catch` here.
```
> ![Blocking Danger](https://gh-labels.dancrews.com/blocking/dangerous.svg)
>
> If you don't `return await` here, you're not going to catch it in your `catch` here.

```
![Passing Kudos](https://your-website/passing/kudos.svg?big)
I really like the way you did this. Awesome!
```
> ![Passing Kudos](https://gh-labels.dancrews.com/passing/huzzah.svg?big)
>
> I really like the way you did this. Awesome!

### Alfred Workflow (Difficulty Level 1)
If you use Alfred, I created a workflow that will compose the Markdown for you. Simply download and install the [Github PR Labels.alfredworkflow](Github%20PR%20Labels.alfredworkflow) in this repository.

![Dialog Box: Consistency](.github/images/consistency.png)

---

## OK, why did you make this?

In working through my fair share (and then some) of Pull Requests, I found that it because convient for me to quantify my asks, so that the person on the other end of the request understood when I was _asking_, when I was _telling_, and especially when I was doing some of both. I ended up with PRs Requesting Changes, with a mixture of comments like these:


> [non-blocking]
>
> Can you change this into a Unit Test, instead of an integration test?
------
> [not-necessarily blocking]
>
> What do you plan for this GraphQL schema to evolve into? Let's chat before you merge this. I think you're on the right track, but I want to make sure.
------
> [blocking]
>
> If you don't `return await` here, you're not going to catch it in your `catch` here.

I got tired of that, and it still wasn't very easy for me to at-a-glance show what was blocking and what wasn't. This was especially troublesome in very large Pull Requests (I know, we shouldn't have those, but we always seem to).

### Enter Github Labels v1
I created a set of Github Labels (icons) that I could simply drop into my comments, which allowed me to quickly and succinctly describe both why I was putting the comment and how big of a deal it was:

> ![Pass Question@0 5x](https://user-images.githubusercontent.com/353090/89137054-6f6c6800-d4eb-11ea-8934-a3e9d988db09.png)
>
> What do you think of calling this variable `subscribedTopics` or something like that, just to make it more explicit?

> ![Optional Best Practice](https://user-images.githubusercontent.com/353090/90290251-5db38a80-de32-11ea-8969-ef32975d792a.png)
>
> I would recommend we do the `console.error` BEFORE we save it to the database. That way, if the DB save also fails, we can capture both failures.

> ![Blocking Danger](https://user-images.githubusercontent.com/353090/90289052-e8df5100-de2f-11ea-8939-b4d8965cced5.png)
>
> If you don't `return await` here, you're not going to catch it in your `catch` here.

This was better, but I was just so frustrated that I couldn't use SVGs. Apparently, for Security Reasons, Github doesn't allow local SVGs

### Enter Github Label Builder

With this project, I was able to generate SVGs remotely, so that Github would render them properly. I can use any of the "blocking", "optional", or "passing" button types, and any text (as long as it fits)
