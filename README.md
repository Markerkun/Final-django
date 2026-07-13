# ToDoList - Django + React Vite Application

## 📋 Backend Installation (Django)

### 1. Navigate to backend directory
```bash
cd ToDoList
```

### 2. Create virtual environment
```bash
python -m venv venv
```

### 3. Activate virtual environment
**Windows:**
```bash
venv\Scripts\activate
```

**Linux/Mac:**
```bash
source venv/bin/activate
```

### 4. Install dependencies
```bash
pip install -r requirements.txt
```

### 5. Run migrations
```bash
python manage.py migrate
```

### 6. Create superuser (optional, for admin panel)
```bash
python manage.py createsuperuser
```

### 7. Run development server
```bash
python manage.py runserver
```

The backend will be available at: **http://localhost:8000**
API endpoints: **http://localhost:8000/api/**

---

## 🎨 Frontend Installation (React Vite)

### 1. Navigate to frontend directory
```bash
cd ../vite
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

The frontend will be available at: **http://localhost:5173**

---

## 🚀 API Endpoints

- `GET /api/tasks/` - Get all tasks
- `POST /api/tasks/` - Create new task
- `GET /api/tasks/{id}/` - Get specific task
- `PATCH /api/tasks/{id}/` - Update task
- `DELETE /api/tasks/{id}/` - Delete task
- `POST /api/tasks/{id}/toggle_completion/` - Toggle task completion
- `GET /api/tasks/stats/` - Get task statistics

---

## 💾 Database

The project uses PostgreSQL with Neon. Credentials are configured in `ToDoList/myproject/settings.py`

---

## 🎯 Features

✅ Create, Read, Update, Delete (CRUD) tasks  
✅ Mark tasks as completed  
✅ View task statistics  
✅ Responsive design with Tailwind CSS  
✅ Persistent storage in PostgreSQL  
✅ RESTful API with Django REST Framework  
✅ CORS enabled for frontend communication  
✅ Admin panel for task management  

---

## 📝 Project Structure

```
Final-django/
├── ToDoList/              # Django Backend
│   ├── Task/             # Task app
│   │   ├── models.py     # Task model
│   │   ├── serializers.py # Task serializer
│   │   ├── views.py      # API views
│   │   ├── urls.py       # API routes
│   │   └── admin.py      # Admin panel
│   ├── myproject/        # Project settings
│   │   ├── settings.py   # Django config
│   │   ├── urls.py       # Main URLs
│   │   └── wsgi.py       # WSGI config
│   ├── manage.py         # Django manager
│   └── requirements.txt   # Python dependencies
│
└── vite/                 # React Frontend
    ├── src/
    │   ├── api/          # API client
    │   ├── components/   # React components
    │   ├── App.tsx       # Main app component
    │   ├── main.tsx      # Entry point
    │   └── index.css     # Tailwind styles
    ├── vite.config.ts    # Vite configuration
    ├── tailwind.config.js # Tailwind config
    ├── tsconfig.json     # TypeScript config
    ├── package.json      # NPM dependencies
    └── index.html        # HTML template
```

---

## 🛠️ Technologies Used

**Backend:**
- Django 6.0.7
- Django REST Framework 3.14.0
- PostgreSQL
- django-cors-headers

**Frontend:**
- React 18.2.0
- Vite 8.1.1
- Tailwind CSS 3.3.0
- TypeScript
- Axios

---

## 📝 Notes

- Backend and frontend run on different ports (8000 and 5173)
- CORS is configured to allow requests from the frontend
- All tasks are automatically persisted to the database
- Changes are reflected in real-time after API calls
- Admin panel available at: http://localhost:8000/admin/

---

## 🚀 Deployment Notes

For production deployment:
1. Set `DEBUG = False` in Django settings
2. Add proper `SECRET_KEY` environment variable
3. Update `ALLOWED_HOSTS` with your domain
4. Update `CORS_ALLOWED_ORIGINS` with your frontend URL
5. Use environment variables for database credentials
6. Build frontend: `npm run build` and serve static files
