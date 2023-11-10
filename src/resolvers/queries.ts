import { UserModel, BlogModel } from "../models/index.js"
import { QueryResolvers, ResolversParentTypes } from "../types/resolvers-types.js"


const queries:QueryResolvers = {
    Query: {
        users: () => {
            return UserModel.find({}).exec()
        },
        user: (_, args) => {
            return UserModel.findById(args.id).exec()
        },
        blogs: (_, args) => {
            return BlogModel.find({}).exec()
        },
        blog: (_, args) => {
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

