install:
	cd website && npm ci

build: install
	cd website && npm run build