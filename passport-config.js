const LocalStrategy= require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const initialize = (passport, getUserByName, getUserById) => {

    const authenticateUser = async (name, password, done) => {
        const user = getUserByName(name);
        if (user == null) {
            return done(null, false, { message: 'ningun usuario con ese nombre' })
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return(null, user)
            } else {
                return done(null,false, { message: 'contraseña incorrecta' })
            }
        } catch(e) {
            return done(e)
        }

    }

    passport.use(new LocalStrategy(authenticateUser));

    passport.serializeUser((user,done)=>{
        return done(null.user.id)
    })
    passport.deserializeUser((id,done)=>{
        return done(null, getUserById)
    })

}

module.exports = initialize;