Install docker toolbox

Ejecutar la base de datos y backend:

Estos comandos deben ser ejecutados en la carpeta de 'bd' 
en la terminal de Docker toolbox.

Construir bd
# 'docker build -t db/mysql:v0 .'

Correr db
# 'docker run -d -p 3306:3306  db/mysql:v0'

Luego para correr la base de datos, el backend se iniciará ingresando en la consola
sobre la raiz 'node src/app.js' en ese momento correra el servidor y mostrará
en que puerto se encuentra