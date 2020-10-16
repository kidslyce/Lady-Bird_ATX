create table inventory (id SERIAL,
  item VARCHAR(255),
  name varchar(255),
  description varchar(255),
  price decimal(10,2),
  cat varchar(255),
  img varchar(255),
  qty int,
  reord_qty int);

INSERT INTO inventory (item, name,description,price,cat,img,qty,reord_qty) VALUES
('jantxv1577','redkin shampoo','shampoo 32oz', 9.93,'cleanser','xyzzy',38,20);

INSERT INTO inventory (item, name,description,price,cat,img,qty,reord_qty) VALUES
('bb883829','Bumble & Bumble shampoo','shampoo 32oz', 19.93,'cleanser','xyzzy',12,15);

INSERT INTO inventory (item, name,description,price,cat,img,qty,reord_qty) VALUES
('113-00990','italian auburn','color 10oz', 9.93,'color','xyzzy',12,12);

INSERT INTO inventory (item, name,description,price,cat,img,qty,reord_qty) VALUES
('jant-3320','styling paste','shampoo 32oz', 9.93,'cleanser','xyzzy',38,20);


$new_item = new Item(null,$body_object->item, $body_object->desc,
  $body_object->price,$body_object->img,$body_object->cat,$body_object->qty,
  $body_object->reordqty);
