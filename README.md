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

The following from the task has been covered:

- ~~Add new todos to the list~~  
- ~~Mark todos as complete~~  
- ~~Delete todos from the list~~  
- ~~Bonus: Any delightful UI touches~~
- Filter by all/active/complete todos
- Clear all completed todos  
- Out of scope: User Authentication  

### Time Limit

I spent around 1 full day, to build the following:

- Docker services
  - nginx (reverse proxy for frontend/backend)
  - frontend
  - backend
  - mysql
- Backend
- Frontend

### What would I change?

For what's asked in the task, a 2-hour time limit is really ambitious. This could be split  
into 2 separate tests, one for frontend, and one for backend. The appropriate test could then  
be provided based on the role and candidate.

