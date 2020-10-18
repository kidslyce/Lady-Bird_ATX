<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/lbinventory.php';

if($_REQUEST['action'] === 'index'){
  echo  json_encode( Inventory::getInv() );

}else if ($_REQUEST['action'] === 'create'){

      $request_body = file_get_contents('php://input');
      $body_object = json_decode($request_body);
      $new_item = new Item(null,$body_object->item, $body_object->name, $body_object->description,
        $body_object->price,$body_object->cat,$body_object->img,$body_object->qty,
        $body_object->reord_qty);
      $all_items = Inventory::createInv($new_item);
      echo json_encode($all_items);


}else if ($_REQUEST['action'] === 'update'){
      $request_body = file_get_contents('php://input');
      $body_object = json_decode($request_body);
      $updated_item = new Item($_REQUEST['id'], $body_object->item, $body_object->name, $body_object->description,
        $body_object->price,$body_object->cat,$body_object->img,$body_object->qty,
        $body_object->reord_qty);
      $all_items = Inventory::updateInv($updated_item);
      echo json_encode($all_items);


}else if ($_REQUEST['action'] === 'delete'){
    $all_items = Inventory::deleteInv($_REQUEST['id']);
    echo json_encode($all_items);
}else if ($_REQUEST['action'] === 'getone'){
    $all_items = Inventory::getone($_REQUEST['id']);
    echo json_encode($all_items);
}

?>
