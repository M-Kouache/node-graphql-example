import BlogModel from "../models/Blog.js"
import { MutationResolvers, ResolversParentTypes, ResolversTypes } from "../types/resolvers-types.js"


const mutations: MutationResolvers = {
    Mutation: {
        addBlog: (_:ResolversParentTypes, args: ResolversTypes) => {
            const { title, slug, author, content } = args.blog
            return BlogModel.create({title, slug, author, content})
        }
    }
}


export default mutations 

