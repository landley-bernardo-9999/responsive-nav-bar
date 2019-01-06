var $select = $("<select></select>");

$select.change(function(){
    window.location = $select.val();
});

$("#mainmenu").append($select);

$("#mainmenu a").each(function(){
    var $option = $("<option></option>");

    $option.val($(this).attr("href"));
    $option.text($(this).text());

    if($(this).parent().hasClass("selected")){
        $option.prop("selected", true);
    }

    $select.append($option);
});