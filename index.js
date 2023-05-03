const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Event = require('./models/event');
const Nudge = require('./models/nudge');
const db = require('./connect');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json(),);
const port = 3000;

// Set up multer storage for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

// GET endpoint to get an event by its unique id
app.get('/api/v3/app/events/:event_id', async (req, res) => {
  const event = await Event.findOne({ _id: req.params.event_id });
  if (!event) {
    res.status(404).json({ error: 'Event not found' });
  } else {
    res.json(event);
  }
});

// GET endpoint to get events by recency & paginate results by page number and limit of events per page
app.get('/api/v3/app/events', async (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  const skip = (page - 1) * limit;
  const events = await Event.find()
    .sort({ schedule: -1 })
    .skip(skip)
    .limit(limit);
  res.json(events);
});

// POST endpoint to create an event
app.post(
  '/api/v3/app/events',
  async (req, res) => {
    console.log(req.body);
    const event = new Event({
      event: req.body.event,
      event_id: req.body.event_id,
      name: req.body.name,
      tagline: req.body.tagline,
      schedule: new Date(req.body.schedule),
      description: req.body.description,
      moderator: req.body.moderator,
      category: req.body.category,
      sub_category: req.body.sub_category,
      rigor_rank: req.body.rigor_rank,
      attendees: [],
    });
    await event.save();
    res.json({ id: event._id });
  }
);

// PUT endpoint to update an event by its unique id
app.put('/api/v3/app/events/:event_id', upload.single('image'), async (req, res) => {
  const event = await Event.findOne({ _id: req.params.event_id });
  console.log(event);
  if (!event) {
    res.status(404).json({ error: 'Event not found' });
  } else {
    event.name = req.body.name;
    event.tagline = req.body.tagline;
    event.schedule = new Date(req.body.schedule);
    event.description = req.body.description;
    event.moderator = req.body.moderator;
    event.category = req.body.category;
    event.sub_category = req.body.sub_category;
    event.rigor_rank = req.body.rigor_rank;
    if (req.file) {
      event.files = {
        image: req.file.filename,
      };
    }
    await event.save();
    res.json({ id: event._id });
  }
});

// PUT route to update an event
app.put('/api/v3/app/events/:id', upload.single('image'), async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Update event properties
    event.name = req.body.name || event.name;
    event.tagline = req.body.tagline || event.tagline;
    event.schedule = req.body.schedule || event.schedule;
    event.description = req.body.description || event.description;
    event.moderator = req.body.moderator || event.moderator;
    event.category = req.body.category || event.category;
    event.sub_category = req.body.sub_category || event.sub_category;
    event.rigor_rank = req.body.rigor_rank || event.rigor_rank;

    // Update event image if provided
    if (req.file) {
      event.image = {
        data: fs.readFileSync(req.file.path),
        contentType: req.file.mimetype,
      };
    }

    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE endpoint to delete an event by its unique id
app.delete('/api/v3/app/events/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    await event.deleteOne();
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST route to create a nudge for an event
app.post('/api/v3/app/nudges', async (req, res) => {
  try {
    const event = await Event.findById(req.body.event_id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Create new nudge
    const nudge = new Nudge({
      event_id: req.body.event_id,
      title: req.body.title,
      description: req.body.description,
      timeToSend: req.body.timeToSend,
      invitation: req.body.invitation,
    });

    const createdNudge = await nudge.save();
    res.json(createdNudge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET route to get all nudges for an event
app.get('/api/v3/app/nudges/:event_id', async (req, res) => {
  try {
    const nudges = await Nudge.find({ event_id: req.params.event_id });
    res.json(nudges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port , () => {
    console.log(`Server is listening at port ${port}`)
});

