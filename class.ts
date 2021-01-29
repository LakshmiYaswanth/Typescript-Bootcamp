export default class userfront{
    private somthing :string;
    private user     :string
    
    constructor(_somthing,_user){
        this.somthing=_somthing;
        this.user=_user;  
    }
    
     getsomthing() : string {
        return this.somthing +"..."+this.user;
    }   
}