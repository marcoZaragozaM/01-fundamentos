
## Pasos para descargar mi repositorio

1. Clic en la parte superior donde dice "Code"
2. Descargar como Zip
3. Ir a descargas
4. Descomprimir en donde se desee
5. Abrir la carpeta 01-fundamentos en Visual Studio Code
6. Hacer cambios y realizar los siguientes comando git

### Comando para guardar nuevos cambios en nuestro repositorio remoto

Antes que nada revisar con git remote -v, el remoto actual

1. git init
2. git add .
3. git commit -m "Nombre cambios del git"
4. git remote set-url origin https://github.com/marcoZaragozaM/01-fundamentos.git
5. git push -u origin main

### Si quiero hacer más cambios solo escribo las líneas
1. git add .
2. git commit -m "Nombre cambios del git"
3. git push