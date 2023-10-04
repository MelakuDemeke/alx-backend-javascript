export interface WorkFromHomeEmployee {
  workFromHome(): string;
  getCoffeeBreak(): string;
  performTasks(): string;
}

export interface OnsiteEmployee {
  workFromHome(): string;
  getCoffeeBreak(): string;
  performTasks(): string;
}

export class Director implements WorkFromHomeEmployee {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  performTasks() {
    return 'Performing director tasks';
  }
}
