import mongoose from 'mongoose';

export const connectDB = async (uri) => {
  try {
    const connection = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log(`MongoDB conectado existosamente: ${connection.connection.host}`);
    return connection;
  } catch (error) {
    console.error('Error al conectar MongoDB:', error.message);
    process.exit(1);
  }
};

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log('MongoDB desconectado');
  } catch (error) {
    console.error('Error al intentar desconectar MongoDB:', error.message);
  }
};
