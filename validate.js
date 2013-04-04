var Fields = {
  "#amount": /\d+\.\d{2}/, 
  "#ccnumber":/\d{16}/, 
  "#ccv":/\d{3}/,
  "#ccname":/[a-zA-Z]/,
  "#billing-address":/./,
  "#expMonth":/\d+/,
  "#expYear":/\d+/,
};

var formIsValid=true;

var test = function (id, regex){
  var val = $(id).val();
  if(regex.test(val)===false){
    $(id+'Error').html('Error');
    event.preventDefault();
    formIsValid = false;
  } else {
    $(id+'Error').html('');
  };
};

$(document).ready(function(){
  var formHandler = function(event){
    formIsValid=true;
    for (element in Fields){
        test(element, Fields[element]);
      };
    if (formIsValid) {
      alert("Thank you!");
    }else{
      event.preventDefault();
    }
  };

  $("form").submit(formHandler); // register a callback
});