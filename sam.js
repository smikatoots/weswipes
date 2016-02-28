<script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

  var ref = new Firebase('https://wesapps.firebaseio.com/');
  var ref_users = ref.child("users");
  var htmlForPath = {};

  //pushes information to the database
  function button_submit(){
    var user = $("#nameInput").val();
    var user_mobile = $("#mobile_num").val();
    var user_task = $("#note").val();
    var restaurant = $("#location").val();
    var time = $("#timing").val();

    var userRef = ref_users.child(user);
    userRef.set({"name":user, "mobile":user_mobile, "task":user_task, "restaurant":restaurant, "time":time});
  };
  //retrieves information from database - refresh?
  function button_retrieve(){
    ref_users.on("child_added", function(snapshot){
      console.log(snapshot.val());
      var user_name = snapshot.val().name;
      var mobile = snapshot.val().mobile;
      var task = snapshot.val().task;
      var restaurant = snapshot.val().restaurant;
      var time = snapshot.val().time;
    //var newRow = $("<tr/>");
      //newRow.append($("<td/>").append($("<em/>").text(user_name)));
      //newRow.append($("<td/>").append($("<em/>").text(mobile)));
      //newRow.append($("<td/>").append($("<em/>").text(task)));
      //newRow.append($("<td/>").append($("<em/>").text(user_offer)));


      //$("#feedPosts_list").append(newFeedPost);
    })
  };
