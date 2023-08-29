import { container } from "@dependency-inyection/container"
import { registerRequestHandlers } from "@dependency-inyection/registerRequestHandlers";
import { registerServices } from "@dependency-inyection/registerServices";

export const initBrandiContainer = ()=>{
    registerServices(container);
    registerRequestHandlers(container);
}