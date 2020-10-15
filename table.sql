create table inventory (id SERIAL,
  item VARCHAR(255),
  name varchar(255),
  description varchar(255),
  price decimal(10,2),
  cat varchar(255),
  qty int,
  reord_qty int);

INSERT INTO inventory (item, name,description,price,cat,qty,reord_qty) VALUES
('jantxv1577','redkin shampoo','shampoo 32oz', 9.93,'cleanser',38,20);

INSERT INTO inventory (item, name,description,price,cat,qty,reord_qty) VALUES
('jantxv1579','redkin conditioner','conditioner 16 oz', 5.73,'conditioner',14,28);

INSERT INTO inventory (item, name,description,price,cat,qty,reord_qty) VALUES
('14-5-32','marco styling paste','Styling Paste 2 oz', 13.35,'conditioner',12,10);

INSERT INTO inventory (item, name,description,price,cat,qty,reord_qty) VALUES
('14-5-32','marco styling paste','Styling Paste 2 oz', 13.35,'conditioner',12,10);


$new_item = new Item(null,$body_object->item, $body_object->desc,
  $body_object->price,$body_object->img,$body_object->cat,$body_object->qty,
  $body_object->reordqty);
