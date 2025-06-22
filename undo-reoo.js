class HistoryManager {
  constructor(initialState) {
    this.currentState = initialState;
    this.undoStack = [];
    this.redoStack = [];
  }

  // Make a change
  execute(newState) {
    this.undoStack.push(this.currentState); // Save current state for undo
    this.currentState = newState; // Apply new state
    this.redoStack = []; // Clear redo history
  }

  // Undo the last change
  undo() {
    if (this.undoStack.length === 0) return null;

    this.redoStack.push(this.currentState); // Save current state for redo
    this.currentState = this.undoStack.pop(); // Revert to last state
    return this.currentState;
  }

  // Redo the undone change
  redo() {
    if (this.redoStack.length === 0) return null;

    this.undoStack.push(this.currentState); // Save current state
    this.currentState = this.redoStack.pop(); // Re-apply the undone state
    return this.currentState;
  }

  getState() {
    return this.currentState;
  }
}
const manager = new HistoryManager("Start");

manager.execute("First change");
manager.execute("Second change");
console.log(manager.getState()); // Second change

manager.undo(); // Undo Second change
console.log(manager.getState()); // First change

manager.redo(); // Redo Second change
console.log(manager.getState()); // Second change
