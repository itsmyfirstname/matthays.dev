---
layout: default
title: R
parent: Install
grand_parent: Chromebook
# nav_order: 3
# nav_exclude: true
---

## Start Here

In order to execute the commands below hit the search button and type `linux`,

you should see one of those hacker windows.

copy and paste one line at a time.

and read the logs to make sure the command was successfull.


### Chromebooks with an Intel or AMD CPU
This tutorial will only work on Chromebooks with an Intel or AMD CPU (with Linux Apps Support) and not those with an ARM64 architecture CPU.

```shell
echo "deb http://cloud.r-project.org/bin/linux/debian buster-cran40/" | sudo tee /etc/apt/sources.list.d/r.list

sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys FCAE2A0E115C3D8A

sudo apt update

sudo apt install r-base libnss3

wget https://download1.rstudio.org/desktop/bionic/amd64/rstudio-1.4.1106-amd64.deb

sudo dpkg -i rstudio-1.4.1106-amd64.deb

sudo apt -f install
```



# Second Pathway
If the method above doesnt work let me know!

## Add R Repo to linux
```shell
lsb release -a
sudo apt search r-base | grep ^r-base \
    && sudo apt install -y gnupg2 \
    && sudo apt-key adv --keyserver keys.gnupg.net --recv-key 'E19F5F87128899B192B1A2C2AD5F960A256A04AF' \
    && sudo vi /etc/apt/sources.list

deb https://cran.rstudio.com/bin/linux/debian stretch-cran35
```

## Install R binary
```shell
sudo apt update \ 
    && sudo apt upgrade \
    && sudo apt install -y r-base r-base-dev
```
## RStudio Desktop IDE has a few dependencies that we need to install:

```
sudo apt install -y libgstreamer1.0 libgstreamer-plugins-base1.0 libxslt-dev
```

## Then we can download the package from the RStudio website and install it:
```
curl -o rstudio.deb https://download1.rstudio.org/rstudio-xenial-1.1.463-amd64.deb
dpkg -i rstudio.deb
```
> most Chromebooks are fairly low spec devices so you probably won’t get stellar performance.

###### reference: https://blog.sellorm.com/2018/12/20/installing-r-and-rstudio-on-a-chromebook/


