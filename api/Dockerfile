FROM node:alpine
WORKDIR /api
COPY ./package.json package.json
COPY . .
RUN yarn
CMD ["yarn", "start"]
EXPOSE 3001

