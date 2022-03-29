FROM node:14-slim
WORKDIR /app
RUN chown -R node:node /app
COPY --chown=node:node . .
USER node
RUN yarn install
CMD yarn workspace service1 start