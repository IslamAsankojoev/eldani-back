#Поднять контейнер через docker-compose
```bash
docker-compose up #поднять все контейнеры back и front
docker-compose up strapi #поднять только контейнер strapi
docker-compose up nextjs #поднять только контейнер nextjs

-d - запустить в фоне
--build - пересобрать образ
```

#Остановить контейнер через docker-compose
```bash
docker-compose down #остановить все контейнеры back и front
docker-compose down strapi #остановить только контейнер strapi
docker-compose down nextjs #остановить только контейнер nextjs

-v - удалить все тома
--remove-orphans - удалить все контейнеры, которые не описаны в docker-compose.yml
```

#Очистить все образы и контейнеры
```bash
docker system prune -a #очистить все образы и контейнеры
docker volume prune #очистить все тома
docker network prune #очистить все сети
docker image prune #очистить все образы
docker container prune #очистить все контейнеры
```