.PHONY: start
start:
	docker compose -f docker-compose.local.yml up -d --build
	docker exec -d portfolio-ver3-app-1 sh -c "npx prisma studio"
	docker exec -it portfolio-ver3-app-1 sh

restart:
	docker compose -f docker-compose.local.yml up -d
	docker exec -d portfolio-ver3-app-1 sh -c "npx prisma studio"
	docker exec portfolio-ver3-app-1 sh -c "npm run dev"

.PHONY: up
up-local:
	docker compose -f docker-compose.local.yml up --build
up-deploy:
	docker compose -f docker-compose.deploy.yml up --build

.PHONY: up-d
up-d-local:
	docker compose -f docker-compose.local.yml up -d --build

.PHONY: down
down:
	docker compose -f docker-compose.local.yml down
down-deploy:
	docker compose -f docker-compose.deploy.yml down

.PHONY: build
build-local:
	docker compose -f docker-compose.local.yml build
build-deploy:
	docker compose -f docker-compose.deploy.yml build	