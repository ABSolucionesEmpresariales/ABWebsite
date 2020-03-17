import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import banner from '../styles/banner.module.scss'
import {MARKS} from '@contentful/rich-text-types'

export const query = graphql`
    query($slug: String!){
        contentfulServicio(slug: {eq:$slug}){
            titulo
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
                <div dangerouslySetInnerHTML={{__html: embedded}} />
        }
    }
    return (
        <Layout>
            <div className={"row "+banner.efectoBanner+' '} style={{backgroundImage: "url("+props.data.contentfulServicio.imagenBanner.file.url+")",height: "50vh"}}>
              <p className={"text-white d-inline text-center "+banner.title}>{props.data.contentfulServicio.titulo}</p>
            </div>
            <div className={"container"}>            
                <div className={"row m-lg-3 m-1"}>
                    <p className={"col-lg-6 col-12"}>{documentToReactComponents(props.data.contentfulServicio.cuerpo1.json)}</p>
                    <p className={"col-lg-6 col-12"}>{documentToReactComponents(props.data.contentfulServicio.cuerpo2.json,options)}</p>
                </div>
            </div>

            <div className={"row "+banner.imagenBannerCotizacion}>
                <p className={"text-white text-center col-lg-12 "+banner.title}>Cotiza tu servicio de <span>{props.data.contentfulServicio.titulo}</span> </p>
                <p className={"text-white text-center col-lg-12 mt-0"}>Para corizar tu servicio puedes comucarte al correo ceo@absoluciones.com</p>
            </div>
        </Layout>
    )
} 
export default servicios