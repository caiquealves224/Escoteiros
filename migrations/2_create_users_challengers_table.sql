create table users_challengers (
	FOREIGN KEY (users_id) REFERENCES users(id),
    FOREIGN KEY (challenger_id) REFERENCES challengers(id),
    constraint id primary key (users_id,challenger_id)
)