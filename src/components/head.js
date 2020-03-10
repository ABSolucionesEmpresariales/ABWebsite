import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

const Head = ({title}) => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
            <meta name="description" content="testing react helmet" />
            <meta name="keywords" content="react,seo,helmet" />

            {/* <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link> */}
        </Helmet>
        /* Tambien se puede hacer de la siguiente manera <Helmet title={`${title} | ${data.site.siteMetadata.title}`}/>*/
    )
}

export default Head