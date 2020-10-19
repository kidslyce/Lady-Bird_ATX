create table inventory (id SERIAL,
  item VARCHAR(255),
  name varchar(255),
  description varchar(255),
  price decimal(10,2),
  cat varchar(255),
  img varchar(255),
  qty int,
  reord_qty int);

  create table vendors (id SERIAL,
    vendor_id VARCHAR(255),
    vendor_name varchar(255),
    vendor_add1 varchar(255),
    vendor_add2 varchar(255),
    vendor_city varchar(255),
    vendor_state varchar(255),
    vendor_zip varchar(10),
    vendor_rating int);


INSERT INTO inventory (item, name,description,price,cat,img,qty,reord_qty) VALUES
('jantxv1577','redkin shampoo','shampoo 32oz', 9.93,'cleanser','xyzzy',38,20);

INSERT INTO inventory (item, name,description,price,cat,img,qty,reord_qty) VALUES
('bb883829','Bumble & Bumble shampoo','shampoo 32oz', 19.93,'cleanser','xyzzy',12,15);

INSERT INTO inventory (item, name,description,price,cat,img,qty,reord_qty) VALUES
('113-00990','italian auburn','color 10oz', 9.93,'color','xyzzy',1,12);

INSERT INTO inventory (item, name,description,price,cat,img,qty,reord_qty) VALUES
('jant-3320','styling paste','shampoo 32oz', 9.93,'cleanser','xyzzy',38,20);


create table vendors (id SERIAL,
  vendor_id VARCHAR(255),
  vendor_name varchar(255),
  vendor_add1 varchar(255),
  vendor_add2 varchar(255),
  vendor_city varchar(255),
  vendor_state varchar(255),
  vendor_zip varchar(10),
  vendor_rating int);

  INSERT INTO vendors (vendor_id, vendor_name, vendor_add1, vendor_add2, vendor_city,
    vendor_state, vendor_zip, vendor_rating) VALUES
  ('2543', 'Bumble & Bumble','232 W. Salic Way','','New York','NY','02332-0114',8);

  INSERT INTO vendors (vendor_id, vendor_name, vendor_add1, vendor_add2, vendor_city,
    vendor_state, vendor_zip, vendor_rating) VALUES
  ('2577', 'Sally Beauty Supply','11735 N. 7th St.','','Chicago','IIL','33638',9);
