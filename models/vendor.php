<?php
$dbconn = null;
if(getenv('DATABASE_URL')){ // if using the heroku database
	$connectionConfig = parse_url(getenv('DATABASE_URL'));
	$host = $connectionConfig['host'];
	$user = $connectionConfig['user'];
	$password = $connectionConfig['pass'];
	$port = $connectionConfig['port'];
	$dbname = trim($connectionConfig['path'],'/');
	$dbconn = pg_connect(
		"host=".$host." ".
		"user=".$user." ".
		"password=".$password." ".
		"port=".$port." ".
		"dbname=".$dbname
	);
} else { // if using the local database, change the dbname to be whatever your local database's name is
	$dbconn = pg_connect("host=localhost dbname=lbatx");
}

class Vendor {
    public $id;
    public $vendor_id;
    public $vendor_name;
    public $vendor_add1;
    public $vendor_add2;
    public $vendor_city;
    public $vendor_state;
    public $vendor_zip;
    public $vendor_rating;
    public function __construct($id,$vendor_id,$vendor_name,$vendor_add1,
			$vendor_add2,$vendor_city,$vendor_state,$vendor_zip,$vendor_rating) {
      $this->id = $id;
      $this->vendor_id = $vendor_id;
      $this->vendor_name = $vendor_name;
      $this->vendor_add1 = $vendor_add1;
      $this->vendor_add2 = $vendor_add2;
      $this->vendor_city = $vendor_city;
      $this->vendor_state = $vendor_state;
      $this->vendor_zip = $vendor_zip;
      $this->vendor_rating = $vendor_rating;
    }
}

class VendorFactory {
   static function updateVendor($updated_vendor){
     $query = "UPDATE vendors SET vendor_id = $1, vendor_name = $2 , vendor_add1 = $3,
		 	vendor_add2 = $4, vendor_city = $5, vendor_state = $6,
			vendor_zip = $7, vendor_rating = $8   WHERE id = $9";
     $query_params = array($updated_vendor->vendor_id,
			 $updated_vendor->vendor_name, $updated_vendor->vendor_add1,
	     $updated_vendor->vendor_add2, $updated_vendor->vendor_city,
			 $updated_vendor->vendor_state, $updated_vendor->vendor_zip,
	     $updated_vendor->vendor_rating, $updated_vendor->id);
     pg_query_params($query, $query_params);

     return self::getVendor();
   }

  static function deleteVendor($id){
    $query = "DELETE FROM vendors WHERE id = $1";
    $query_params = array($id);
    pg_query_params($query, $query_params);

    return self::getVendor();
  }
static function createVendor($new_vendor){
    $query = "INSERT INTO vendors (vendor_id, vendor_name, vendor_add1, vendor_add2,
			vendor_city, vendor_state, vendor_zip, vendor_rating)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
    $query_params = array($new_vendor->vendor_id, $new_vendor->vendor_name, $new_vendor->vendor_add1,
    $new_vendor->vendor_add2,$new_vendor->vendor_city, $new_vendor->vendor_state,
		$new_vendor->vendor_zip, $new_vendor->vendor_rating);
    pg_query_params($query, $query_params);
    return self::getVendor();
    //pass the query and the params to pg_query_params
  }

  static function getVendor() {
    $vendors = array();
    $results = pg_query("select * from Vendors");
    $row_object = pg_fetch_object($results);
   while($row_object !== false){
      $new_vendor = new Vendor(
        intval($row_object->id),
        $row_object->vendor_id,
        $row_object->vendor_name,
        $row_object->vendor_add1,
        $row_object->vendor_add2,
        $row_object->vendor_city,
        $row_object->vendor_state,
        $row_object->vendor_zip,
        $row_object->vendor_rating
      );
        $vendors[] = $new_vendor;
        $row_object = pg_fetch_object($results);
    }
    return $vendors;
  }
}

?>
