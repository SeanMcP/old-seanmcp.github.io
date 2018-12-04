import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';
import PageHeader from '../components/common/PageHeader';
import PostBio from '../components/post/PostBio';
import PostDate from '../components/post/PostDate';
import PostFooter from '../components/post/PostFooter';
import PostHelmet from '../components/post/PostHelmet';

const PostTemplate = props => {
    const { location } = props;
    const post = props.data.markdownRemark;
    const postDescription = post.frontmatter.summary || post.excerpt;
    const postTitle = post.frontmatter.title;
    const siteTitle = get(props, 'data.site.siteMetadata.title');

    return (
        <Layout location={location} title={siteTitle}>
            <PostHelmet
                postDescription={postDescription}
                postTitle={postTitle}
                siteTitle={siteTitle}
            />
            <article className="PostTemplate">
                <PageHeader centered>
                    <h1>{postTitle}</h1>
                    <section className={'PostTemplate__details'}>
                        <PostDate date={post.frontmatter.date} hideIcon />
                    </section>
                </PageHeader>
                <main dangerouslySetInnerHTML={{ __html: post.html }} />
                <hr />
                <PostFooter
                    articleHref={location.href}
                    articleTitle={post.frontmatter.title}
                    category={post.frontmatter.category}
                    date={post.frontmatter.date}
                    modifier={'post-template'}
                    tags={post.frontmatter.tags}
                />
                <hr />
                <PostBio />
            </article>
        </Layout>
    );
};

export default PostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt
            html
            frontmatter {
                category
                date(formatString: "MMMM D, YYYY")
                summary
                tags
                title
            }
        }
    }
`;
