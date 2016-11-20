# jimareed
http://jimareed.com website

## setup
```
sudo -i
cd /opt
git clone https://github.com/jimareed/jimareed
cd jimareed
docker build . -t website-image
docker run -p 80:80 -d --name website website-image
```

## cleanup
```
docker stop website
docker rm website
```
