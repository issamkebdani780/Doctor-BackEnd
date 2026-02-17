import express from 'express';
import cors from 'cors';
import authRouter from './Router/auth.router.js'
import settingRouter from './Router/setting.router.js';
import patientRoute from './Router/patient.router.js';
import appointmentRouter from './Router/appointment.router.js';

const app = express();

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:5174',
    // Add your production frontend URL here when you deploy
    // 'https://your-frontend-domain.com'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/setting', settingRouter);
app.use('/patient', patientRoute);
app.use('/appointments', appointmentRouter);

app.get('/', (req, res) => {
    res.send("server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});