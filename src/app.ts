import { UserController } from './controllers/UserController';
import { User } from './models/Users';

const userController = new UserController();

document.getElementById('fetchUsersBtn')!.addEventListener('click', async () => {
    try {
        await userController.getAllUsers();
    } catch (error) {
        console.error('Error fetching users:', error);
    }
});

document.getElementById('createUserForm')!.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user: User = {
        id: 0,
        name: (document.getElementById('name') as HTMLInputElement).value,
        username: (document.getElementById('username') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: '',
            },
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: '',
        },
    };
    try {
        await userController.createUser(user);
    } catch (error) {
        console.error('Error creating user:', error);
    }
});


document.getElementById('updateUserForm')!.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = parseInt((document.getElementById('updateId') as HTMLInputElement).value, 10);
    const email = (document.getElementById('updateEmail') as HTMLInputElement).value;
    const name = (document.getElementById('updateName') as HTMLInputElement)?.value;

    const updates: Partial<User> = {
        email,
        name,
    };

    try {
        const updatedUser = await userController.updateUser(id, updates);
        console.log('Updated User:', updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
    }
});


document.getElementById('deleteUserForm')!.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = parseInt((document.getElementById('deleteId') as HTMLInputElement).value, 10);
    try {
        await userController.deleteUser(id);
    } catch (error) {
        console.error('Error deleting user:', error);
    }
});
