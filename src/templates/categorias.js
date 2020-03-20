import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {MARKS} from '@contentful/rich-text-types'
import Parallax from '../components/paralax'

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export const query = graphql`
    query($slug: String!){
        contentfulCategorias(slug: {eq:$slug}) {
            titulo
            subTitulo
            slug
            imagenBanner {
            file {
                url
            }
            }
            informacion1 {
            json
            }
            informaccion2 {
            json
            }
        }
      }
`

const categorias = (props) => {

    const options = {
        renderMark: {
            [MARKS.CODE]: embedded => 
                <div dangerouslySetInnerHTML={{__html: embedded}} />
        }
    }
    return (
        <Layout>
            <Parallax 
                title={props.data.contentfulCategorias.titulo}
                subtitle={props.data.contentfulCategorias.subTitulo}
                background={props.data.contentfulCategorias.imagenBanner.file.url}
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
                        <p>{documentToReactComponents(props.data.contentfulCategorias.informacion1.json,options)}</p>              
                </ScrollAnimation>
                <ScrollAnimation 
                    animateIn="bounceInRight"
                    animateOut="bounceOutRight"
                    animatePreScroll={false}
                    duration={2}
                    animateOnce={true}
                    className={"col-lg-6 col-12"}>
                        <p>{documentToReactComponents(props.data.contentfulCategorias.informaccion2.json,options)}</p>
                    </ScrollAnimation>

                </div>
            </div>
        </Layout>
    )
} 
export default categorias