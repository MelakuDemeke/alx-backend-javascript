export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
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

export class Teacher implements OnsiteEmployee {
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  performTasks() {
    return 'Performing teacher tasks';
  }
}

export function createEmployee(salaryOrType: number | string): Director | Teacher {
  if (typeof salaryOrType === 'number' && salaryOrType < 500) {
    return new Teacher();
  }
  return new Director();
}