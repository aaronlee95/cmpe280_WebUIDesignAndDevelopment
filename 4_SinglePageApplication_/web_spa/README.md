Requirements:
Django 2.2+

To begin running this project:
1. On the terminal, type: 'python manage.py runserver'
2. To access the webpage (if it does not automatically appear), then
    after starting the server, type into a Web URL:

    127:0.0.1:8000

To access elements in the SQL database, download a program like
"DB Browser for SQLite". (https://sqlitebrowser.org/)
1. Click 'Open Database'
2. Select 'db.sqlite3' in this repository
3. Under 'Tables', Right Click on  'health_app_patient'
4. Select 'Browse Data'

To Access SQL Database Admin Page:
1. Start the server using 'python manage.py runserver'
2. On the Web URL, enter 'http://127.0.0.1:8000/admin/'
3. Enter the following credentials:
    Username: admin
    Password: password
