import { UserModel, BlogModel } from "../models/index.js"
import { QueryResolvers, ResolversParentTypes, ResolversTypes } from "../types/resolvers-types.js"


const queries:QueryResolvers = {
    Query: {
        users: () => {
            return UserModel.find({}).exec()
        },
        user: (_:ResolversParentTypes, args: ResolversTypes) => {
            return UserModel.findById(args.id).exec()
        },
        blogs: () => {
            return BlogModel.find({}).exec()
        },
        blog: (_:ResolversParentTypes, args: ResolversTypes) => {
            return BlogModel.findById(args.id).exec()
        }
    },
    User: {
        blogs: ({ id }: ResolversParentTypes) => {
            return BlogModel.find({author: id}).exec()
        }
    },
    Blog:{
        user: ({ author }: ResolversParentTypes) => {
            return UserModel.findById(author).exec()
        }
    }
}



export default queries

