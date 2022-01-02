FROM node:14

WORKDIR /usr/src2

ENV DATABASE_URL=mongodb+srv://juan:clave255@mintic.h73sp.mongodb.net/CICLO4?retryWrites=true&w=majority
ENV PRIVATE_KEY='Peter Parker'

COPY ["./package.json", "./yarn.lock", "/usr/src2/"]

COPY ./ /usr/src2/

RUN yarn install

CMD ["yarn", "start"]