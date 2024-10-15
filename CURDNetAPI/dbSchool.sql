CREATE TABLE Teachers (
	Id int primary key identity,
	Name nvarchar(100) NOT NULL,
	Email varchar(100) NOT NULL UNIQUE
)

create table Classes (
	Id int primary key identity,
	Name nvarchar(100) not null,
	TeacherId int,
	foreign key (TeacherId) references Teachers(Id) 
)

CREATE TABLE Students (
	Id int primary key identity,
	Name nvarchar(100) NOT NULL,
	Email varchar(100) NOT NULL UNIQUE,
	Birth Datetime,
	ClassId int,
	foreign key (ClassId) references Classes(Id)
)

insert into Teachers(Name,Email) 
	values ('Viet Thang Nguyen','thang@gmail.com'),
			('Hiep','Hiep@gmail.com'),
			('A','A@gmail.com'),
			('B','B@gmail.com'),
			('C','C@gmail.com'),
			('D','D@gmail.com')

insert into Classes(Name,TeacherId) 
	values ('10A',4),
			('10B',5),
			('10C',6),
			('12A',7),
			('12B',8),
			('12C',9)

insert into Students(Name,Email,Birth,ClassId) 
	values ('Viet Thang Nguyen','thang@gmail.com'),
			('Hiep','Hiep@gmail.com'),
			('A','A@gmail.com'),
			('B','B@gmail.com'),
			('C','C@gmail.com'),
			('D','D@gmail.com')


select * from Teachers
select * from Students
select * from Classes
