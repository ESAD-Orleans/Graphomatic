<?php
//upload.php
$output_dir = "uploads/";
$error = false;
$success = false;
$response = array();
$filename = '';
$filepath = '';
 
if(isset($_FILES["image"]))
{
    //Filter the file types , if you want.
    if ($_FILES["image"]["error"] > 0)
    {
      $error = $_FILES["file"]["error"];
    }
    else
    {
    	$filename = sha1($_FILES["image"]["name"]);
    	$filepath = $output_dir. $filename;
        //move the uploaded file to uploads folder;
        move_uploaded_file($_FILES["image"]["tmp_name"],$filepath);
        //
        $filesize = getimagesize($filepath);
        switch($filesize['mime']){
        	case "image/jpeg" :
        	case "image/png" :
        	case "image/gif" :
        	
        	$response['mimetype'] = $filesize['mime'];
        	$response['width'] = $filesize[0];
        	$response['height'] = $filesize[1];
        	
        	$success = true;
        	break;
        	default :
        	$error = 'mauvais type de fichier. uniquement les images sont autorisées (jpeg/gif/png)';
        	unlink($filepath);
        	break;
        }
        //
 
    }
 
}else{
	$error = 'fichier non selectionné';
}

if($error){
	$response['error'] = $error;
}else if($success){
	$response['success'] = true;
	$response['filename'] = $filename;
	$response['filepath'] = $filepath;
}
echo json_encode($response);

?>