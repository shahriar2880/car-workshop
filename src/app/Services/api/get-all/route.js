import { connectDB } from "@/lib/connectDB"

export const GET = async () => {
    const db = await connectDB()
    const servicesCollection = db.collection('services')
    // console.log(servicesCollection)
    try {
        const services = await servicesCollection.find().toArray();
        return Response.json({services})
    } catch (error) {
        console.log(error)
    }
}