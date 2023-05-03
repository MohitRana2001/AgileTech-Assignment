const mongoose = require('mongoose');
require('dotenv').config();
const event = require("../models/event")
async function start() {
    
    await mongoose.connect("mongodb+srv://mohit:1234@assignment.n16zdc6.mongodb.net/?retryWrites=true&w=majority");
    const eventInstance = new 
        event({
            event: "Hackathon",
            event_id: 23,
            name: "ThinkTank Ideathon",
            tagline: "Participate and win exciting goodies.",
            schedule: new Date("2023-05-01T15:00:00.000Z"),
            description: "Organized by AIML club",
            files: {
                image: "/images/thinkTank.jpg",
            },
            moderator: "Mohit Rana",
            category: "Web Development",
            sub_category: "Hackathon",
            rigor_rank: 3,
            attendees: [{
                name: "Mohit Rana",
                age: 21,
            },
            {
                name: "Shubh Arya",
                age: 21,
            },
            {
                name: "Prateek Mishra",
                age: 21,
            }]
        });
        try{
            await eventInstance.save();
            console.log({message: "Successfully created an event instance"});
        } catch(error){
            console.error(error);
            console.log("Error creating the event instance")
        };
        process.exit(0);
}

start();

