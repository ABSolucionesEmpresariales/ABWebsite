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

    /* const imagen = () => {
        var div = document.createElement('div');
        div.className = 'fb-customerchat';
        div.setAttribute('page_id', '2010791648980440');
        div.setAttribute('ref', '');
        document.body.appendChild(div);
        window.fbMessengerPlugins = window.fbMessengerPlugins || {
            init: function () {
            FB.init({
                appId            : '1678638095724206',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v8.0'
            });
            }, callable: []
        };
        window.fbAsyncInit = window.fbAsyncInit || function () {
            window.fbMessengerPlugins.callable.forEach(function (item) { item(); });
            window.fbMessengerPlugins.init();
        };
        setTimeout(function () {
            (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }, 0);
    } */

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