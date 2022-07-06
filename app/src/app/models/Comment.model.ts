export class CommentModel {
    post_id: number
    name: string
    email: string
    body: string

    constructor( 
        post_id: number,
        name: string,
        email: string,
        body: string,
        )
         {
    
     this.post_id  = post_id 
     this.name = name
     this.email = email
     this.body = body
 }
}