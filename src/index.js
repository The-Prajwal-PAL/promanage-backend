import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";
import connectDB from "./db/index.js";
import { User } from "./models/user.models.js";
connectDB()
  .then(() => {
    app.listen(4000, () => {
      console.log("app is runnign at the above");
    });
  })
  .catch((er) => {
    console.log(er);
  });

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello there",
  });

  // app.get('/all', async (req, res) => {
  //   try {
  //     const users = await User.find({}, 'email'); // Retrieve only the email field
  //     const userInfos = users.map(user => ({ id: user._id, email: user.email }));
  //     res.json(userInfos);
  //   } catch (err) {
  //     res.status(500).send('Server error');
  //   }
  // });
  
  app.get('/api/users',async (req, res) => {
    try {
      // Simulate delay to mock API response time (remove in production)
      
        const users = await User.find({}, 'email'); // Retrieve only the email field
     const userInfos = users.map(user => ({ id: user._id, email: user.email }));
     res.json(userInfos);
      }// 1 second delay
     catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });

 
});
