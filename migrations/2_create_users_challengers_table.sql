create table users_challengers (
    users_id int UNSIGNED,
    challenger_id int,
	constraint users_id FOREIGN KEY (users_id) REFERENCES users(id),
    constraint challenger_id FOREIGN KEY (challenger_id) REFERENCES challengers(id),
    CONSTRAINT id_users_challengers PRIMARY KEY (users_id,challenger_id)
);