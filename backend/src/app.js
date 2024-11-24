import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import recipesRoutes from './routes/recipes.js'; 
import usersRoutes from './routes/users.js'; 
import commentsRoutes from './routes/comments.js';
import likesRoutes from './routes/likes.js';

const app = express();

// Middleware
app.use(cors()); // Allow Cross-Origin requests for React app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/', recipesRoutes); 
app.use('/api/', usersRoutes); 
app.use('/api/', commentsRoutes); // RESTful API 
app.use('/api/', likesRoutes);  // RESTful API 



// Default error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});