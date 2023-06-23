import bcrypt from "bcrypt"
import User from "../../modules/user/model/User"

export async function createInitialData() {
    try{
        await User.sync({ force: true });

        let pass = await bcrypt.hash("123456", 10);

        await User.create({
            name: "First User",
            email: "teste@teste.com",
            password: pass,
        });
    } catch(err) {
        console.error(err.message);
    }
}