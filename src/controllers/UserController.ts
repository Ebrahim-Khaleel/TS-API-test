import { User } from "../models/Users";
import { UserService } from "../services/UserService";

export class UserController{
    private userService : UserService;

    constructor(){
        this.userService = new UserService();
    }

    async getAllUsers(){
        try{
            const users = await this.userService.getAllUsers();
            console.log('Users :', users)
        }catch(error){
            console.error(error)
        }
    }

    async createUser(user : User){
        try{
            const newUser = await this.userService.createUser(user)
            console.log('Created User:',newUser)
        }catch(error){
            console.error(error)
        }
    }

    async updateUser(id : number, user : Partial<User>){
        try{
            const updateUser = await this.userService.updateUser(id, user);
            console.log('Updated User:',updateUser)
        }catch(error){
            console.error(error)
        }
    }

    async deleteUser(id: number) {
        try{
            await this.userService.deleteUser(id);
            console.log('Deleted User with ID:', id);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }
}