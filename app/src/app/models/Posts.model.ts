export class PostsModel {
    id: number
    title: string
    body: string

    constructor(id: number, title: string, body: string) {
        this.body = body
        this.title = title
        this.id = id
    }
}