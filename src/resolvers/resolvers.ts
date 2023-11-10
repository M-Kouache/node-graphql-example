import queries from "./queries.js"
import mutations from "./mutations.js"
import { Resolvers } from "../types/resolvers-types.js"

export const resolvers:Resolvers = {
    ...queries,
    ...mutations
}



