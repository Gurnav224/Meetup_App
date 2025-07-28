import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware (for development)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Sample events data
const events = [
  {
    id: 1,
    title: 'Corporate Summit 2025',
    description: 'Join industry leaders for networking and insights.',
    date: '2025-01-15',
    location: 'Convention Center',
    category: 'corporate'
  },
  {
    id: 2,
    title: 'Wedding Expo',
    description: 'Discover perfect vendors for your special day.',
    date: '2025-02-10',
    location: 'Grand Hotel',
    category: 'wedding'
  },
  {
    id: 3,
    title: 'Birthday Bash Planning',
    description: 'Make birthdays unforgettable with our experts.',
    date: 'ongoing',
    location: 'Various Venues',
    category: 'birthday'
  }
];

// API Routes
app.get('/api', (req, res) => {
  res.json({ 
    message: 'Event Villa API',
    version: '1.0.0',
    endpoints: {
      events: '/api/events',
      health: '/api/health'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/api/events', (req, res) => {
  res.json({
    success: true,
    data: events,
    count: events.length
  });
});

app.get('/api/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const event = events.find(e => e.id === eventId);
  
  if (!event) {
    return res.status(404).json({
      success: false,
      message: 'Event not found'
    });
  }
  
  res.json({
    success: true,
    data: event
  });
});

app.post('/api/events', (req, res) => {
  const { title, description, date, location, category } = req.body;
  
  if (!title || !description || !date || !location) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields: title, description, date, location'
    });
  }
  
  const newEvent = {
    id: events.length + 1,
    title,
    description,
    date,
    location,
    category: category || 'general'
  };
  
  events.push(newEvent);
  
  res.status(201).json({
    success: true,
    message: 'Event created successfully',
    data: newEvent
  });
});

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Event Villa API',
    documentation: '/api'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(port, host, () => {
  console.log(`🚀 Event Villa API server ready at http://${host}:${port}`);
  console.log(`📚 API documentation available at http://${host}:${port}/api`);
});
