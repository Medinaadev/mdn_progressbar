$(function(){

    $('.progress').css('opacity', '0')

    window.addEventListener('message', function(event){
        let data = event.data

        if (data.action == 'open'){
            Progress(data)
        };
    });

    function Progress(data){
        data = data.data

        $('.progress-text').html(data.message);
        
        if (data.color){
            $('.progress-inside').css('background-color', data.color)
        }else{
            $('.progress-inside').css('background-color', '#0053cf')
        };

        $('.progress').css('opacity', '1')

        $('.progress-inside').css({'width': '0%'}).animate({'width': '100%'}, data.time)

        setTimeout(function(){
            $('.progress').css('opacity', '0')
            setTimeout(function(){
                $.post('https://mdn_progressbar/finish')
            }, 500)
        }, data.time - 250)
    };

});