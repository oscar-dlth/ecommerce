import { container } from "@dependency-inyectioncontainer"
import { registerRequestHandlers } from "@dependency-inyectionregisterRequestHandlers";
import { registerServices } from "@dependency-inyectionregisterServices";

export const initBrandiContainer = ()=>{
    registerServices(container);
    registerRequestHandlers(container);
}