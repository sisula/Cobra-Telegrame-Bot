FROM fusuf/whatsasena:latest

RUN git clone https://github.com/sisula/Cobra-Telegrame-Bot /root/telebotcobra
WORKDIR /root/telebotcobra/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "app.js"]
