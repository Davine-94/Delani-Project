$(document).ready(function(){
    $("#dImage").click(function(){
      $("#dImage").slideDown().hide();
      $("#dDevelopment").show();
    });
    $("#dDevelopment").click(function(){
      $("#dDevelopment").slideUp();
      $("#dImage").slideDown();
    });
  });
  $("#dDevelopment").click(function(){
    $("#dDevelopment").slideUp();
    $("#dImage").slideDown();
  });

$(document).ready(function(){
  $("#dImage").click(function(){
    $("#dImage").slideDown().hide();
    $("#dDesign").show();
  });
  $("#dDesign").click(function(){
    $("#dDesign").slideUp();
    $("#dImage").slideDown();
  });
});

$(document).ready(function(){
  $("#pImage").click(function(){
    $("#pImage").slideDown().hide();
    $("#pManagement").show();
  });
  $("#pManagement").click(function(){
    $("#pManagement").slideUp();
    $("#pImage").slideDown();
  });
});

$(document).ready(function(){
    $("#work-1").mouseover(function(){
      $("#layover").show();
    }).mouseout(function(){
      $("#layover").hide();
    });
  });

$(document).ready(function(){
$("#work-2").mouseover(function(){
$("#layover1").show();
}).mouseout(function(){
$("#layover1").hide();
});
});

$(document).ready(function(){
    $("#work-3").mouseover(function(){
      $("#layover2").show();
    }).mouseout(function(){
      $("#layover2").hide();
    });
  });

$(document).ready(function(){
$("#work-4").mouseover(function(){
$("#layover3").show();
}).mouseout(function(){
$("#layover3").hide();
});
});

$(document).ready(function(){
  $("#work-5").mouseover(function(){
  $("#layover4").show();
  }).mouseout(function(){
  $("#layover4").hide();
  });
  });

$(document).ready(function(){
    $("#work-6").mouseover(function(){
    $("#layover5").show();
    }).mouseout(function(){
    $("#layover5").hide();
    });
    });
  
$(document).ready(function(){
      $("#work-7").mouseover(function(){
      $("#layover6").show();
      }).mouseout(function(){
      $("#layover6").hide();
      });
      });
$(document).ready(function(){
        $("#work-8").mouseover(function(){
        $("#layover7").show();
        }).mouseout(function(){
        $("#layover7").hide();
        });
        });
let collectInput = () => {
    if ($(`#userName`).val() == ``) {
        alert(`Please provide your full names`);
    } else if ($(`#userMail`).val() == ``) {
        alert(`Please provide your E-mail address`)
             }
    else if ($(`#userMessage`).val() == ``) {
        alert(`We'd love to hear from you. Please fill it in`)
                  }
    else {userName = $(`#userName`).val();
        alert(userName + ` we have recieved your message. Thank you for reaching out to us`)
                  }
              }