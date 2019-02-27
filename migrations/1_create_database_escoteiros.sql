drop database if exists escoteiros;

create database escoteiros;

use escoteiros;

create table users (
	id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome varchar(255) not null,
    login varchar(255) not null,
    senha varchar(255) not null,
    email varchar(255) not null,
    nivel tinyint,
    pontos int unsigned,
    permission JSON
);

create table challengers (
	id int AUTO_INCREMENT PRIMARY KEY,
	nome varchar(255) not null,
    descricao varchar(255),
    pontos int UNSIGNED
)