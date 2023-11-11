import bcrypt from "bcrypt"

const saltRounds:number = 10

const passwordHash = async (password: string): Promise<string> => {
    return bcrypt.hash(password, saltRounds)
}
const passwordVerify = async (password: string, hashedPasword: string): Promise<Boolean> => {
    return bcrypt.compare(password, hashedPasword)
}

export {passwordHash, passwordVerify}
