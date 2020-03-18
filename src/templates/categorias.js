import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {MARKS} from '@contentful/rich-text-types'
import Parallax from '../components/paralax'

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
                    <p className={"col-lg-6 col-12"}>{documentToReactComponents(props.data.contentfulCategorias.informacion1.json,options)}</p>
                    <p className={"col-lg-6 col-12"}>{documentToReactComponents(props.data.contentfulCategorias.informaccion2.json,options)}</p>
                </div>
            </div>
        </Layout>
    )
} 
export default categorias