-- create database Db_locations;

-- use Db_locations;

create table locationTable
(
    id int NOT NULL AUTO_INCREMENT,
    nameLocation varchar(30) NOT NULL,
    area_m2 int NOT NULL,
    idInternalLocation int NOT NULL,
    CONSTRAINT PK_location PRIMARY KEY(id)
);