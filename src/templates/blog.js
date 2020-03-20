import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { MARKS } from "@contentful/rich-text-types"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
        imagen {
            file {
              url
            }
          }
          fecha  (formatString: "YYYY MMMM,D", locale: "es")
          seccion
          autor
          titulo
          slug
          descripcion{
            descripcion
          }
          contenido{
            json
          }
    }
  }
`
/* export const query = graphql`
query (
    $slug: String!
  ) {
    markdownRemark (
      fields: {
      slug: {
        eq: $slug
      }
      }
    )
    {
      frontmatter {
        title 
        date
      }
      html
    }
  }` */

const Blog = props => {
    const options = {
        renderNode: {
            "embedded-asset-block": node => {
                const alt = node.data.target.fields.title["en-US"]
                const url = node.data.target.fields.file["en-US"].url
                return (
                    <div className="embed-responsive embed-responsive-16by9">
                        <img className="img-fluid embed-responsive-item" alt={alt} src={url} />
                    </div>
                )
            }
        },
        renderMark: {
            [MARKS.CODE]: embedded =>
                <div className="embed-responsive embed-responsive-16by9" dangerouslySetInnerHTML={{ __html: embedded }} />
        }
    }


    return (
        <Layout>
            <div className="row d-block d-lg-flex">
                <div className="col-lg-9">
                    <div className="row d-block">
                        <div className="card">
                            <div className="card-body border">
                                <div className="text-center">
                                    <img alt="foto" className="img-fluid" src={props.data.contentfulBlog.imagen.file.url} />
                                </div>
                                <div className="text-justify mx-lg-auto col-lg-10 my-4">
                                    <p className="font-weight-bold my-2">{props.data.contentfulBlog.fecha} | {props.data.contentfulBlog.seccion} | por: {props.data.contentfulBlog.autor}</p>
                                    <h4>{props.data.contentfulBlog.titulo}</h4>
                                    {documentToReactComponents(
                                        props.data.contentfulBlog.contenido.json,
                                        options
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">

                </div>
            </div>

        </Layout>
    )
}

export default Blog