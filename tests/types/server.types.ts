import {integrations, middleware, Response, Road} from "roads";
import {Server} from "../..";

const road = new Road();
const server = new Server(road, (err) => {
        console.log(err.stack);

        switch (err.code) {
            case 404:
            return new Response("Not Found", 404);
        case 405:
            return new Response("Not Allowed", 405);
        default:
        case 500:
            return new Response("Unknown Error", 500);
    }
});
const router = new middleware.SimpleRouter(road);

road.use(middleware.cors("*"));
road.use(middleware.killSlash);

router.addRoute("GET", "/user", () => {
    return new Response({name: "test"}, 200, {"last-modified": (new Date()).toString()});
});

road.request("GET", "/user")
    .then((response) => {
        console.log(`response: ${JSON.stringify(response)}`);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
