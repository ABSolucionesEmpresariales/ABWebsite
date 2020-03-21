import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import banner from '../styles/banner.module.scss'
import { MARKS } from '@contentful/rich-text-types'
import Parallax from '../components/paralax'

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
    renderMark: {
      [MARKS.CODE]: embedded =>
        <div dangerouslySetInnerHTML={{ __html: embedded }} />
    }
  }
  return (
    <Layout>
            <Parallax 
                title={props.data.contentfulServicio.titulo}
                subtitle={props.data.contentfulServicio.subTitulo}
                background={props.data.contentfulServicio.imagenBanner.file.url}
            />


      <div className={"container"}>
        <div className={"row m-lg-3 m-1"}>
        <ScrollAnimation 
          animateIn="bounceInLeft"
          animateOut="bounceOutLeft"
          animatePreScroll={false}
          duration={2}
          animateOnce={true}
          className={"col-lg-6 col-12"}>
              <p >{documentToReactComponents(props.data.contentfulServicio.cuerpo1.json)}</p>
        </ScrollAnimation>

        <ScrollAnimation 
          animateIn="fadeInUp"
          animateOut="fadeOut"
          delay={1}
          animateOnce={true}
          className={"col-lg-6 col-12"}>
            <p >{documentToReactComponents(props.data.contentfulServicio.cuerpo2.json, options)}</p>
        </ScrollAnimation>

        </div>
      </div>

      <div className={"row " + banner.imagenBannerCotizacion}>
        <p className={"text-white text-center col-lg-12 " + banner.title}>Cotiza tu servicio de <span>{props.data.contentfulServicio.titulo}</span> </p>
        <p className={"text-white text-center col-lg-12 mt-0"}>Para corizar tu servicio puedes comucarte al correo ceo@absoluciones.com</p>
      </div>
    </Layout>
  )
}
export default servicios