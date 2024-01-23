import { Head, Html, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="https://www.elastobor.com.br/favicon.ico" />
        <meta name="robots" content="index,follow" />
        <meta property="og:image:alt" content="Imagem da Elastobor" />
        <meta property="og:type" content="website" />

        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdn.jsdelivr.net/gh/MarlonPassos-git/stupid-third-party/stupid-modal.js"></script>
        {/* <script dangerouslySetInnerHTML={{
          __html: `
           window.onload = function ()  {
            const script = document.createElement('script')
            script.src = 'https://cdn.jsdelivr.net/gh/MarlonPassos-git/stupid-third-party/stupid-modal.js'
            script.defer = true
            document.body.appendChild(script)
          }
            `
        }}>
        </script> */}
      </Head>

      <body className="theme">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document