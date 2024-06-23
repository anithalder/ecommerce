import mongoose from "mongoose"

async function main() {
    await mongoose.connect(process.env.DB_URI)
}

main().then(() => {
    console.log("Connected to MongoDB")
}).catch(err => {
    console.log("Not Connected to MongoDB")
})