$(function(){
  $('form').on('submit',function(e){
    console.log('送信ボタンが押されました');
    e.preventDefault();
  });
});