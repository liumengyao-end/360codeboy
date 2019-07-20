SET NAMES UTF8;
DROP DATABASE IF EXISTS phone;
CREATE DATABASE phone CHARSET=UTF8;
USE phone;


CREATE TABLE index_phone_tongxun(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(20),
  href VARCHAR(128)
);
INSERT INTO index_phone_tongxun VALUES
(NULL,"360N","img/start/01.jpg"),
(NULL,"360Y","img/start/02.jpg"),
(NULL,"360X","img/start/03.jpg"),
(NULL,"360N","img/start/04.jpg"),
(NULL,"360Y","img/start/05.jpg"),
(NULL,"360X","img/start/01.jpg"),
(NULL,"360N","img/start/02.jpg"),
(NULL,"360Y","img/start/03.jpg"),
(NULL,"360X","img/start/04.jpg");

CREATE TABLE index_phone_peijian(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  aname VARCHAR(20),  
  ahref VARCHAR(128)
);
INSERT INTO index_phone_peijian VALUES
(NULL,"360N","img/start/01.jpg"),
(NULL,"360Y","img/start/02.jpg"),
(NULL,"360X","img/start/03.jpg"),
(NULL,"360N","img/start/04.jpg"),
(NULL,"360Y","img/start/05.jpg"),
(NULL,"360X","img/start/01.jpg"),
(NULL,"360N","img/start/02.jpg");

CREATE TABLE index_phone_ershou(
  bid INT PRIMARY KEY AUTO_INCREMENT,
  bname VARCHAR(20),
  bherf VARCHAR(128)
);
INSERT INTO index_phone_ershou VALUES
(NULL,"360X1","img/start/01.jpg"),
(NULL,"360y7","img/start/02.jpg"),
(NULL,"360w6","img/start/05.jpg"),
(NULL,"360n3","img/start/03.jpg"),
(NULL,"360M1","img/start/04.jpg");

CREATE TABLE index_miaosha(
  mid INT PRIMARY KEY AUTO_INCREMENT,
  mherf VARCHAR(58),
  mname VARCHAR(128),
  mprice VARCHAR(83),
  sprice VARCHAR(83)
);
INSERT INTO index_miaosha VALUES
(NULL,"img/activity/01.jpg","美的（Midea）吸尘器C3-L143C家用无耗材卧式吸尘器","￥309.00","￥400.00"),
(NULL,"img/activity/02.jpg","统帅（Leader）206升 三门冰箱（雅韵白）海尔出品 BCD-","￥1099.00","￥1200.00"),
(NULL,"img/activity/03.jpg","大金(DAIKIN) 大1匹 变频 小鑫系列 壁挂式冷暖空调 白色","￥3799.00","￥3900.00"),
(NULL,"img/activity/04.jpg","格力（GREE）取暖器 硅晶电热膜取暖器/速热电暖器/大功","￥368.00","￥390.00"),
(NULL,"img/activity/05.jpg","适马（SIGMA）30mm F1.4 DC DN｜Contemporary 半画","￥￥1898.00","￥2000.00")
