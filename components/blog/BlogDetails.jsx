import { socialMediaLinks } from "@/data/socials";
import React from "react";
import Comments from "./Comments";
import CommentReplay from "./CommentReplay";
import BlogSerchbar from "./BlogSerchbar";
import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Tags from "./Tags";
import Image from "next/image";
import { allBlogs } from "@/data/blogs";

export default function BlogDetails({ blogSlug }) {
  // Find the blog post using the slug
  const blogItem = allBlogs.find((elm) => elm.slug === blogSlug) || allBlogs[0];

  return (
    <section className="blog__details-area space">
      <div className="container">
        <div className="blog__inner-wrap">
          <div className="row">
            <div className="col-70">
              <div className="blog__details-wrap">
                <div className="blog__details-thumb">
                  <Image
                    width={856}
                    height={600}
                    src={blogItem.image}
                    alt={blogItem.title}
                  />
                </div>
                <div className="blog__details-content">
                  <div className="blog-post-meta">
                    <ul className="list-wrap">
                      <li>{blogItem.date}</li>
                      <li>
                        <a href="#">{blogItem.category}</a>
                      </li>
                      <li>
                        <a href="#">by {blogItem.author}</a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="title">{blogItem.title}</h2>
                  {blogItem.quote && (
                    <blockquote>
                      <Image
                        width={52}
                        height={32}
                        className="blockquote-icon"
                        src="/assets/img/icon/quote.svg"
                        alt="quote icon"
                      />
                      <p>{blogItem.quote.text}</p>
                    </blockquote>
                  )}
                  {blogItem.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  <div className="blog__details-inner">
                    <div className="row align-items-center">
                      <div className="col-sm-6">
                        <div className="blog__details-inner-thumb">
                          <Image
                            width={416}
                            height={380}
                            src="/assets/img/blog/blog_details02.jpg"
                            alt="blog detail"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="blog__details-inner-thumb">
                          <Image
                            width={416}
                            height={380}
                            src="/assets/img/blog/blog_details03.jpg"
                            alt="blog detail"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blog__details-bottom">
                    <div className="row align-items-center">
                      <div className="col-md-7">
                        <div className="post-tags">
                          <ul className="list-wrap">
                            {blogItem.tags &&
                              blogItem.tags.map((tag, i) => (
                                <li key={i}>
                                  <a href="#">{tag}</a>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="post-share">
                          <h5 className="title">Comparte:</h5>
                          <div className="social-btn style3 justify-content-md-end">
                            {socialMediaLinks.slice(0, 3).map((elm, i) => (
                              <a key={i} href={elm.href}>
                                <span className="link-effect">
                                  <span className="effect-1">
                                    <i className={elm.iconClass}></i>
                                  </span>
                                  <span className="effect-1">
                                    <i className={elm.iconClass}></i>
                                  </span>
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inner__page-nav mt-20 mb-n1">
                    <a href="#" className="nav-btn">
                      <i className="fa fa-arrow-left"></i>
                      <span>
                        <span className="link-effect">
                          <span className="effect-1">Post Previo</span>
                          <span className="effect-1">Post Previo</span>
                        </span>
                      </span>
                    </a>
                    <a href="#" className="nav-btn">
                      <span>
                        <span className="link-effect">
                          <span className="effect-1">Post Siguiente</span>
                          <span className="effect-1">Post Siguiente</span>
                        </span>
                      </span>
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="blog__avatar-wrap">
                  <div className="blog__avatar-img">
                    <a href="#">
                      <Image
                        width={196}
                        height={180}
                        src="/assets/img/blog/blog_avatar01.png"
                        alt="author avatar"
                      />
                    </a>
                  </div>
                  <div className="blog__avatar-info">
                    <h4 className="name">
                      <a href="#">{blogItem.author}</a>
                    </h4>
                    <p>
                      {blogItem.authorBio ||
                        "Default author bio: providing great content and insights."}
                    </p>
                  </div>
                </div>
                <Comments />
                <CommentReplay />
              </div>
            </div>
            <div className="col-30">
              <aside className="blog__sidebar">
                <BlogSerchbar />
                <Categories />
                <RecentPosts />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
