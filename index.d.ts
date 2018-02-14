export class Road {}

/**
 * Roads-Server is a simple webserver for setting up and using the roads framework on an HTTP or HTTP 2 server
 */
export class Server {
    /**
     * 
     * @param Roads The Road that handles all the routes
     * @param error_handler An overwrite to the standard error handler. Accepts a single parameter (the error) and should return a Roads.Response object
     */
    constructor(Roads: Road, error_handler?: Function);

    /**
     * Start the http server. Accepts the same parameters as HttpServer.listen
     * @param port 
     * @param hostname 
     */
    listen(port: number, handler: Function);
}
