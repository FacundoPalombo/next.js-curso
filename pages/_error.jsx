import React from "react";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import Link from "next/link";
class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    let { statusCode } = this.props;
    return (
      <>
        <Layout title="Oh no :c" titleHead={`Error ${statusCode}`}>
        <Navigation path="/" />
          {statusCode === 404 ? (
            <div className="message">
              <h1>Esta página no existe :(</h1>
              <Link href="">
                <a>Volver al home</a>
              </Link>
            </div>
          ) : (
            <div className="message">
              <h1>¡Hubo un problema!</h1>
              <p>Intenta nuevamente en un momento...</p>
              <Link href="/">
                <a>Volver al home</a>
              </Link>
            </div>
          )}
          <style jsx>
            {`
              .message {
                  padding: 100px 30px;
                  text-align: center;
              }
              h1 {
                margin-bottom: 2.5em;
              }
              p {
                  text-shadow: 0px 0px 2px rgba(100,100,100,0.5);
              }
              a {
                text-decoration: none;
                color: #644196;
              }
            `}
          </style>
        </Layout>
      </>
    );
  }
}

export default Error;
