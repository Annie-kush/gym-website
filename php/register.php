<?php
$insert= false;
if (isset($_POST['fname'])){
    $_SERVER=  "localhost";
    $username= "root";
    $password= "";
	$database="tooryanaad";
    $con= mysqli_connect($_SERVER,$username,$password,$database);
    if(!$con){
        die("connection to.this database failed due to".mysqli_connect_error());
    }
    $name= $_POST['fname'];
    $email= $_POST['femail'];
    $phone= $_POST['fphone'];
    $pass= $_POST['fpass'];
    $cpass= $_POST['fcpass'];
    $sql= "INSERT INTO registration (`uname`,`email`,`phone`,`password`) VALUES ('$name','$email','$phone','$pass')";
    if($con->query($sql)== true){
        echo"<h1>Successfully Registered</h1>";
        $insert= true;
    }
    else{
        echo"Error: sql<br> ".$con->error;
    }
    $con->close();

}
?>