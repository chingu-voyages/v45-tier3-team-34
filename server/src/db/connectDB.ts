import mongoose from 'mongoose'

const connectDB = (mongoUrl: string) => {
  return new Promise((resolve, reject) => {
    mongoose.connect(mongoUrl)

    const db = mongoose.connection
    db.on('error', (error) => {
      console.error('MongoDB connection error:', error)
      reject(error)
    })

    db.once('open', () => {
      console.log('MongoDB connected successfully!')
      resolve(mongoose)
    })
  })
}

export default connectDB
