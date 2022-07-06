export class UserTodosModel {
    title: string
    due_on: string
    status:  string

    constructor(
        title: string,
        due_on: string,
        status:  string
    ) 
    {
        this.title = title
        this.due_on = due_on
        this.status = status
    }
    
}