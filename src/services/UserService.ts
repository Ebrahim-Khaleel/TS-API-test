import { User } from "../models/Users";

export class UserService{
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';

    async getAllUsers() : Promise<User[]> {
        try{
            const response = await fetch(this.apiUrl);
            if(!response.ok){
                throw new Error('Failed to fetch Users')
            }
            const data : User[] = await response.json()
            return data
        }catch(error){
            console.error(error)
            throw error
        }
    }

    async createUser(newUser : User) : Promise<User> {
        try {
            const response = await fetch(this.apiUrl, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(newUser)
            });
            if(!response.ok){
                throw new Error('Failed to create user')
            }
            const data : User = await response.json();
            return data;
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async getUserById(id: number): Promise<User> {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }
            const data: User = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }

    async updateUser(id: number, updates: Partial<User>): Promise<User> {
        try {

            const existingUser = await this.getUserById(id);

            const updatedUser = { ...existingUser, ...updates };

            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });

            if (!response.ok) {
                throw new Error('Failed to update user');
            }

            const data: User = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    }

    async deleteUser(id: number): Promise<void> {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
          throw error;
        }
      }
      
}