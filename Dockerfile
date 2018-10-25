FROM gsansigolo/node

# Resolve questão do package json
ADD package.json /tmp/package.json
RUN cd /tmp && yarn install
RUN mkdir -p /app && cp -a /tmp/node_modules /app

# faz da pasta 'app' o diretório atual de trabalho
WORKDIR /app
ADD . /app

# compila a aplicação de produção com minificação
RUN npm run dev
EXPOSE 5000

CMD [ "npm", "start" ]
