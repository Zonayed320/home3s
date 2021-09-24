$('body').bind("contextmenu",function(e){
    alert(' Uhhhu... 😊 This Example Protected by Zonayed Ahamad')
    return false;
});

$('.make').click(function(){
    $(this).slideUp().hide();
    $('.break').slideDown(1000);
});
$('.break').click(function(){
    $(this).slideUp().hide();
    $('.make').slideDown(1000);
});
