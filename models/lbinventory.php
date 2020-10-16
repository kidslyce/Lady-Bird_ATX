<?php
$dbconn = pg_connect("host=localhost dbname=lbatx");

class Item {
    public $id;
    public $item;
    public $name;
    public $description;
    public $price;
    public $cat;
    public $img;
    public $qty;
    public $reord_qty;
    public function __construct($id,$item,$name,$description,$price,$cat,$img,$qty,$reord_qty) {
      $this->id = $id;
      $this->item = $item;
      $this->name = $name;
      $this->description = $description;
      $this->price = $price;
      $this->cat = $cat;
      $this->img = $img;
      $this->qty = $qty;
      $this->reord_qty = $reord_qty;
    }
}

class Inventory {
   static function updateInv($updated_item){
     $query = "UPDATE inventory SET item = $1, name = $2 , description = $3, price = $4,
      cat = $5, img = $6, qty = $7, reord_qty = $8   WHERE id = $9";
     $query_params = array($updated_item->item, $updated_item->name, $updated_item->description,
     $updated_item->price, $updated_item->cat, $updated_item->img, $updated_item->qty,
     $updated_item->reord_qty, $updated_item->id);
     pg_query_params($query, $query_params);

     return self::getInv();
   }

  static function deleteInv($id){
    $query = "DELETE FROM inventory WHERE id = $1";
    $query_params = array($id);
    pg_query_params($query, $query_params);

    return self::getInv();
  }
static function createInv($new_item){
    $query = "INSERT INTO inventory (item, name, description, price,cat,img,qty,reord_qty)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
    $query_params = array($new_item->item, $new_item->name, $new_item->description,
    $new_item->price,$new_item->cat, $new_item->img, $new_item->qty, $new_item->reord_qty);
    pg_query_params($query, $query_params);
    return self::getInv();
    //pass the query and the params to pg_query_params
  }

  static function getInv() {
    $items = array();
    $results = pg_query("select * from inventory");
    $row_object = pg_fetch_object($results);
    echo 'results from the first fetch $row_object' ;
   while($row_object !== false){
      $new_item = new Item(
        intval($row_object->id),
        $row_object->item,
        $row_object->name,
        $row_object->description,
        $row_object->price,
        $row_object->cat,
        $row_object->img,
        $row_object->qty,
        $row_object->reord_qty
      );
        $items[] = $new_item;
        $row_object = pg_fetch_object($results);
    }
    return $items;
  }
}

?>
