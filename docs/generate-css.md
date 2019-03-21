---
id: generate-css
title: Generating CSS
---

CSS can be generated from design tokens, such as colors and font attributes.

## Design tokens

- Color palette
- Font families and sizes

## Render to CSS

1. First, run your `buildCSS` GraphQL query at the standard GraphQL endpoint `https://collected.systems/1/graphql?query=…`
2. Then change the path have `/1.css` at the end to `https://collected.systems/1/graphql/1.css?query=…`
3. This is a cachable CSS request! Use it like any other CSS URL.

## Caching

(Coming soon) A query with the same variables can be cached. (A SHA256 digest of the variables is calculated, and then used to look up the CSS file contents.)

## Colors

```graphql
{
  buildCSS {
    colors(input: { palette: [{ name: "grey-100", rgb: "#B8C2CC" }] }) {
      textRules(prefix: "text-") {
        property, value
      }
      backgroundRules(prefix: "bg-") {
        property, value
      }
    }
  }
}
```