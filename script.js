$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
  })

  function copy() {
    let textarea = document.getElementById("textarea");
    textarea.select();
    document.execCommand("copy");
  }
  $('#btn').click ( function(){
    $('#textarea').val('');
 });
