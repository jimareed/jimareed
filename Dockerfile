FROM jimareed/personal-website

WORKDIR /usr/share/nginx/html
COPY app.js /usr/share/nginx/html
ADD images/* /usr/share/nginx/html/images/
