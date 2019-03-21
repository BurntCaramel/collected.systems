/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo_OFF">
        <img src={props.img_src} alt="Project Logo" width={250} />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <Logo img_src={`${baseUrl}img/collected-logo.svg`} />
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl("use-cases-intro.html")}>Read the Docs</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align={props.align || "left"}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: "center" }}
      >
        <h2>Feature Callout</h2>
        <MarkdownBlock>{`
- Use content from GitHub repos
- Read from Figma documents
        `}</MarkdownBlock>
      </div>
    );

    const QueryWithGraphQL = () => (
      <Block id="query">
        {[
          {
            title: "Query your existing content with GraqhQL",
            content: [
              "One place to query from GitHub, Trello, and Figma — all at once. Use SHAs to speed up with caching.",
              "```graphql\n" + `
query {
  gitHubRepoSource(
    owner: "RoyalIcing",
    repoName: "collected.guide",
    branch: "8cb73f4d3ebebe14c0eb49ffc5369817032567a2"
  ) {
    home: textMarkdown(path: "content/README.md") {
      text
      toHTML {
        html
      }
    }
  }

  trelloBoardSource(boardID: "6bi5Hyct") {
    lists {
      name
      cards {
        content {
          text
        }
      }
    }
  }
}
`.trim() + "\n```"
            ].join("\n\n"),
            //image: `${baseUrl}img/collected-logo.svg`,
            imageAlign: "right",
          }
        ]}
      </Block>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            title: "Try it Out",
            content: [
              "You can get started with Collected in any JavaScript project. We have specific packages for React and Vue too.",
              [
                "- React: `npm add @collected/react`",
                "- Vue: `npm add @collected/vue`",
                "- Core: `npm add @collected/core`",
              ].join("\n"),
              "```jsx\n" + `
import React from "react";
import { useCollectedQL } from "@collected/react";
import ReactMarkdown from "react-markdown";

function Home() {
  const { source: { home } } = useCollectedQL(\`
{
  source: gitHubRepoSource(
    owner: "RoyalIcing",
    repoName: "collected.guide",
    branch: "8cb73f4d3ebebe14c0eb49ffc5369817032567a2"
  ) {
    home: textMarkdown(path: "content/README.md") {
      text
    }
  }
}
\`);

  return <article>
    <ReactMarkdown source={home.text} />
  </article>;
}
`.trim() + "\n```"
            ].join("\n\n"),
            image: `${baseUrl}img/collected-logo.svg`,
            imageAlign: "right",
          }
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              "This is another description of how this project is useful",
            image: `${baseUrl}img/collected-logo.svg`,
            imageAlign: "right",
            title: "Description"
          }
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            title: "Learn How",
            content: [
              "You can build dynamic sites on Cloudflare Workers, dynamic sites on Node.js, and static sites.",
              "You can prototype with content sourced from Trello. This lets you build something in minutes, plus the content can be managed by anyone with access to the Trello board.",
              "You can manage content in GitHub, and then load it on-the-fly via jsDelivr, a multi-provider CDN. Point your app to a new commit sha, and it will update live, without having to redeploy. This means you can have rapidly changing content — and server render it too.",
              "If a static website is all you need, then Collected also supports workflows that build to static HTML.",
            ].join("\n\n"),
            image: `${baseUrl}img/collected-logo.svg`,
            imageAlign: "left"
          }
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn" align="center">
        {[
          {
            title: "Query content with GraphQL",
            content: "Source content from GitHub, Figma, or Trello.",
            //image: `${baseUrl}img/collected-logo.svg`,
            imageAlign: "top"
          },
          {
            title: "Process on the fly",
            content: "Process Markdown, images, and records.",
            //image: `${baseUrl}img/collected-logo.svg`,
            imageAlign: "top"
          }
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : "") + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl("users.html")}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          {/* <FeatureCallout /> */}
          <QueryWithGraphQL />
          <TryOut />
          <LearnHow />
          {/* <Description /> */}
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
