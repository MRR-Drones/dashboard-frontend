FROM node:17-slim as builder

# set working directory
ARG app_path=.
WORKDIR ${app_path}

# add `node_modules/.bin` to $PATH
ENV PATH ${app_path}/node_modules/.bin:$PATH

# set Docker port
EXPOSE 3000

# copy configs, no need to copy src files as they get bind mounted later on (see docker-compose)
COPY package.json ./

# install all app dependencies
RUN npm i

COPY ./ ./
RUN npm run build
# production environment
FROM nginx:stable-alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf *

COPY --from=builder /dashboard/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
