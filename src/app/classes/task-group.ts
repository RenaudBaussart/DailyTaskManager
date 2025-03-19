import { Task } from "./task";

export class TaskGroup {
    private static TaskGroupIdIndex: number = 0;
    public TaskGroupId:number;
    public nameOfGroup:string;
    public descriptionOfGroup:string;
    public tasks:Array<Task>;

    constructor(
        nameOfGroup: string,
        descriptionOfGroup: string,
        tasks: Array<Task> = []
    ) {
        this.TaskGroupId = Task.generateTaskId();
        this.nameOfGroup = nameOfGroup;
        this.descriptionOfGroup = descriptionOfGroup;
        this.tasks = tasks;
    }

    public static generateTaskGroupId(): number{
        return TaskGroup.TaskGroupIdIndex++;
    }

}
