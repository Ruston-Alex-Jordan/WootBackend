CREATE TABLE products (
  productID SERIAL PRIMARY KEY NOT NULL,
  productName text,
  fullPrice integer,
  salePrice integer,
  imgURL text,
  quantity integer,
  description text
);

INSERT INTO products ( productname, fullPrice, salePrice, imgurl, quantity, description) 
VALUES ('Cat pillow', 25, 12, 'https://ctl.s6img.com/society6/img/Wyxy5inAWaFGoV0bS-OKdyYfmSU/w_550/pillows/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-0017/a/6090522_11674330/~~/black-cat-00h19892-pillows.jpg', 20, 'Furry little cat pillow, meow!');


