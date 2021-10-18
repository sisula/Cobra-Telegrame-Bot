FROM fusuf/whatsasena:latest
## Special Thanks Yusuf Usta Docker Image
RUN git clone https://github.com/sisula/Cobra-Telegrame-Bot /root/Cobra-Telegrame-Bot
WORKDIR /root/Cobra-Telegrame-Bot/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "app.js"]
