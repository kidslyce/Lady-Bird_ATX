<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/vendor.php';

if($_REQUEST['action'] === 'index'){
  echo  json_encode( VendorFactory::getVendor() );

}else if ($_REQUEST['action'] === 'create'){
      $request_body = file_get_contents('php://input');
      $body_object = json_decode($request_body);
      $new_vendor = new Vendor(null,$body_object->vendor_id, $body_object->vendor_name, $body_object->vendor_add1,
        $body_object->vendor_add2,$body_object->vendor_city,$body_object->vendor_state,
        $body_object->vendor_zip,$body_object->vendor_rating);
      $all_vendors = VendorFactory::createVendor($new_vendor);
      echo json_encode($all_vendors);

}else if ($_REQUEST['action'] === 'update'){
      $request_body = file_get_contents('php://input');
      $body_object = json_decode($request_body);
      $updated_vendor = new Vendor($_REQUEST['id'], $body_object->vendor_id, $body_object->vendor_name,
        $body_object->vendor_add1,$body_object->vendor_add2,$body_object->vendor_city,
        $body_object->vendor_state,$body_object->vendor_zip,$body_object->vendor_rating);
      $all_vendors = VendorFactory::updateVendor($updated_vendor);
      echo json_encode($all_vendors);

}else if ($_REQUEST['action'] === 'delete'){
    $all_items = VendorFactory::deleteVendor($_REQUEST['id']);
    echo json_encode($all_items);
}

?>
