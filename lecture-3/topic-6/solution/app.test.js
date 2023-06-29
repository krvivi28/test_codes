import { FitnessTracker, Solution } from "./index";

const consoleSpy = jest.spyOn(console, "log");

describe("Fitness Tracker", () => {
  it("should update progress and emit 'goalReached' event when the goal is reached", () => {
    const tracker = new FitnessTracker();

    Solution();

    const emitSpy = jest.spyOn(tracker, "emit");

    tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
    tracker.addExercise({ name: "Running", caloriesBurned: 500 });

    expect(tracker.progress).toBe(1100);

    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith("goalReached");

    expect(consoleSpy).toHaveBeenCalledWith(
      "Congratulations! You have reached your fitness goal."
    );
  });
});
