# Todo List

This is a web based todo list that uses Vue on the frontend and Express on the backend.  


## Setup

This assumes you have docker preinstalled. Once you clone the repository, run the following  
command to build and start the containers.

```
docker-compose up -d
```

The frontend container will hot reload any changes.

I've exported a Postman collection for the backend endpoints:  
https://drive.google.com/file/d/1ZjXiva5-7w0APU1Wja1jbuBfS0ght2JN/view?usp=sharing


## Demo

https://user-images.githubusercontent.com/8168925/120908077-d8b68d80-c65e-11eb-93cb-61156447d01a.mp4


## Notes

On first load, the app will make some API calls to fetch lists and tasks, and that data  
is stored in local storage. Upon refresh the app doesn't need to make any API calls,  
and it restores the app data from local storage.

The following have been covered:

- ~~Add new todos to the list~~  
- ~~Mark todos as complete~~  
- ~~Delete todos from the list~~  
- ~~Bonus: Any delightful UI touches~~
- Filter by all/active/complete todos
- Clear all completed todos
- Out of scope: User Authentication
