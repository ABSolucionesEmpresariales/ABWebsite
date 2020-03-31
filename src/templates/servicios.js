import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { MARKS } from '@contentful/rich-text-types'
import Parallax from '../components/paralax'
import Head from '../components/head'
import serviciosStyle from './servicios.module.scss'

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export const query = graphql`
    query($slug: String!){
        contentfulServicio(slug: {eq:$slug}){
            titulo
            subTitulo
            imagenBanner {
              file {
                url
              }
            }
            cuerpo1 {
              json
            }
            cuerpo2 {
              json
            }
            slug
        }
      }
`

const servicios = (props) => {

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url

        return <img class={" col-lg-12 col-12"} alt={alt} src={url} />
      }
    },
    renderMark: {
      [MARKS.CODE]: embedded =>

        <div dangerouslySetInnerHTML={{ __html: embedded }} className="video" />

    }
  }
  return (
    <Layout>
      <Head title={props.data.contentfulServicio.titulo} />
      <Parallax
        title={props.data.contentfulServicio.titulo}
        subtitle={props.data.contentfulServicio.subTitulo}
        background={props.data.contentfulServicio.imagenBanner.file.url}
      />

      {/* <div className={"container"}> */}
        <div className={"row m-lg-3 m-1 "}>
          <div className={"col-lg-6 col-12"}>
            <p >{documentToReactComponents(props.data.contentfulServicio.cuerpo1.json, options)}</p>
          </div>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeOut"
            offset={200}
            className={"col-lg-6 col-12"}>
            <p >{documentToReactComponents(props.data.contentfulServicio.cuerpo2.json, options)}</p>
          </ScrollAnimation>

        </div>
      {/* </div> */}

      {/* Elvetica */}
      <div className={'row'}>
        <div className={serviciosStyle.bannerCotizacion}>
          <h1 className={serviciosStyle.title + ' text-center'}> PARA OBTENER UNA COTIZACIÓN</h1>
          <h2 className={serviciosStyle.subtitle + ' text-center'}>¡Juntos hacemos más!</h2>

          <h1 className={serviciosStyle.tel + ' text-center'}>(317) 103 57 68</h1>
          <h1 className={serviciosStyle.mail + ' text-center'}>ceo@artificialbrain.mx</h1>
        </div>
      </div>
    </Layout>
  )
}
export default servicios