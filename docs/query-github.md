---
id: query-github
title: Retrieving content from GitHub
sidebar_label: GitHub
---

Content is retrieved using jsDelivr. A commit or tag must be passed, ensuring that content is cached.

Only public repos are supported currently.

## Getting multiple Markdown files

```graphql
fragment markdownHTML on GitHubSourcedTextMarkdown {
  text
  toHTML { html }
}

{
  gitHubRepoSource(
    owner: "RoyalIcing",
    repoName: "collected.guide",
    commit: "8cb73f4d3ebebe14c0eb49ffc5369817032567a2"
  ) {
    home: textMarkdown(path: "content/README.md") {
      ...markdownHTML
    }
    fastWeb: textMarkdown(path: "content/guides/fast-web/README.md") {
      ...markdownHTML
    }
    deployingWeb: textMarkdown(path: "content/guides/deploying-web/README.md") {
      ...markdownHTML
    }
    webToolkits: textMarkdown(path: "content/guides/web-toolkits/README.md") {
      ...markdownHTML
    }
  }
}
```
