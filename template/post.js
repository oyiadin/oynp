function for_safe(val){
  return val.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ {1}/g, "&nbsp;");
}

function submit(){
  content = for_safe($("#content").val());
  title = for_safe($("#title").attr("value"));

  if (content.length == 0){
    alert("Please input something");
  } else {
    data = "---\ntags: " + title + "\n---\n" + content
    $.post(
      "/service/gateway/sync_3rd",
      {raw_content: data},
      function(data,status){
        if (status=="success"){
          window.location.assign("/" + title);
        } else {
          alert("Something went wrong: " + status);
        }
      }
    )
  }
}