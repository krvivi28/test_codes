import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    // simulate adding exercise
    this.progress += exercise.caloriesBurned;
    if (this.progress >= this.goal) {
      this.emit("goalReached");
    }
  }
}

const Solution = () => {
  const tracker = new FitnessTracker();

  tracker.addListener("goalReached", () => {
    console.log("Congratulations! You have reached your fitness goal.");
  });

  // simulate adding exercise
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
};

Solution();

export { FitnessTracker, Solution };
// The above code is an implementation of a FitnessTracker class that emits a custom event called 'goalReached' when the user reaches their fitness goal of burning 1000 calories.

// The class extends the EventEmitter class from the 'events' module in Node.js. The addExercise method simulates adding an exercise and checks if the user has reached their goal. If the user has reached their goal, the method emits the 'goalReached' event using the emit method of the EventEmitter class.

// In the main part of the code, an instance of the FitnessTracker class is created and a listener for the 'goalReached' event is defined using the on method of the EventEmitter class. When the 'goalReached' event is emitted, the listener outputs a congratulatory message to the console.

// Finally, the code simulates adding exercises by calling the addExercise method twice with different calorie values. When the total calories burned reach 1000 or more, the 'goalReached' event is emitted and the listener outputs the congratulatory message.
