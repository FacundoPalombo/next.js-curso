import Error from 'next/error';


export function errorHandler(code, response, ...nullifyMe) {
    if(code >= 400) {
       return { response = code , nullifyMe = null}
    }
}
export function notifyError(code) {
    if(code !== 200) {
        return (
            <Error statusCode={code}></Error>
        )
    }
}
module.exports = { errorHandler , notifyError}
