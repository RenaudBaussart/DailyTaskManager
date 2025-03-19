export class Task {
    private static TaskIdIndex: number = 0;
    public taskId: number;
    public taskName: string;
    public isTaskDone: boolean;
    public timeTaskTicked: Date | null;
    public dateOfCreation: Date;
    public typeOfTask: number;

    constructor(
        nameInput: string,
        isTaskDoneInput: boolean = false,
        timeTaskTickedInput: Date | null = null,
        dateOfCreationInput: Date = new Date(),
        typeOfTaskInput: number
    ) {
        this.taskName = nameInput;
        this.isTaskDone = isTaskDoneInput;
        this.timeTaskTicked = timeTaskTickedInput;
        this.dateOfCreation = dateOfCreationInput;
        this.typeOfTask = typeOfTaskInput;
        this.taskId = Task.generateTaskId();
    }

    public tickTask(): void {
        this.isTaskDone = true;
        this.timeTaskTicked = new Date();
    }

    public clearTick(): void {
        this.isTaskDone = false;
        this.timeTaskTicked = null;
    }

    public static generateTaskId(): number {
        return ++Task.TaskIdIndex;
    }
}