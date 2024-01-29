drop database if exists blogs;
create database if not exists blogs;

use blogs;
create table if not exists articles (
id_art int auto_increment primary key not null,
title varchar(70) not null,
introduction varchar(750) default null,
body varchar(1500) not null,
conclusion varchar(1500) default null,
art_date date not null DEFAULT (CURRENT_DATE),
email varchar(50) not null
);

create table if not exists comments (
id_comment int auto_increment primary key not null,
id_art int not null,
email varchar(50) not null,
txtComen varchar(500) not null,
date_comment date not null DEFAULT (CURRENT_DATE),
key `key_articulo_id_art`(id_art),
constraint `key_articulo_id_art`foreign key(id_art)references articles (id_art) on update cascade
);


