# server {
#   server_name api.newsapp.home.kg;

#   location / {
#     proxy_pass http://localhost:3001;
#     proxy_http_version 1.1;
#     proxy_set_header Upgrade $http_upgrade;
#     proxy_set_header Connection 'upgrade';
#     proxy_set_header Host $host;
#     proxy_cache_bypass $http_upgrade;
#   }
# }

# server {
#   server_name newsapp.home.kg www.newsapp.home.kg;

#   root /home/ali_1996rahimiourzgani/frontend;

#   location / {
#     try_files $uri $uri/ /index.html =404;
#   }


# }

# server {
#   if ($host = www.newsapp.home.kg) {
#     return 301 https://$host$request_uri;
#   } # managed by Certbot

#   if ($host = newsapp.home.kg) {
#     return 301 https://$host$request_uri;
#   } # managed by Certbot

#   listen 80;

#   server_name newsapp.home.kg www.newsapp.home.kg;
#   return 404; # managed by Certbot
# }
