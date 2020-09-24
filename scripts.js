window.addEventListener('load', function(){

    let container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);

        let categoryes = document.createElement('div');
            categoryes.classList.add('categoryes');
            document.querySelector('.container').appendChild(categoryes);

                let button1 = document.createElement('button');
                    button1.classList.add('button1');
                    document.querySelector('.categoryes').appendChild(button1);
                    button1.innerHTML = 'Определения';
                    button1.addEventListener('click', function(event){

                        let balls = document.createElement('div');
                            balls.classList.add('balls');
                            document.querySelector('.container').appendChild(balls);
            
                            let balls1 = document.createElement('div');
                                balls1.classList.add('balls1');
                                document.querySelector('.balls').appendChild(balls1);

                                let button10 = document.createElement('button');
                                    button10.classList.add('button10');
                                    document.querySelector('.balls1').appendChild(button10);
                                    button10.innerHTML = '10 баллов';
                                    button10.addEventListener('click', function(event){
                    
                                    let popupBlock = document.createElement('div');
                                        popupBlock.classList.add('popupBlock');
                                        popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
                                        document.querySelector('.container').appendChild(popupBlock);
                            
                                    let popupText = document.createElement('p');
                                        popupText.classList.add('popupText');
                                        document.querySelector('.popupBlock').appendChild(popupText);
                                        popupText.innerHTML = 'Тип рынка, при котором вся отрасль состоит из одной фирмы, где существует только один продавец, а у его товара нет заменителей';
                                    
                                        let buttons = document.createElement('div');
                                            buttons.classList.add('buttonS');
                                            document.querySelector('.popupBlock').appendChild(buttons);
                                    
                                    let musicAdd = document.createElement('button');
                                    musicAdd.classList.add('music');
                                        document.querySelector('.buttonS').appendChild(musicAdd);
                                        musicAdd.innerHTML = 'Время на обдумывание';
                                    let audio = new Audio();
                                        audio.src = 'music.mp3.mp3';
                                    
                                    musicAdd.addEventListener('click', function(event){
                                        if (audio.paused) {
                                            audio.play();
                                            musicAdd.innerHTML = "Пауза";
                                        } else {
                                            audio.pause();
                                            musicAdd.innerHTML = "Играть";
                                        }
                                    });
                                    
                                    let popupButton = document.createElement('button');
                                        popupButton.classList.add('popup_button');
                                        document.querySelector('.buttonS').appendChild(popupButton);
                                        popupButton.innerHTML = 'Закрыть';
                                        popupButton.addEventListener('click', function(event){
                                            popupBlock.remove();
                                            button10.style.textDecoration = "line-through";
                                        });
                                });

                                let button20 = document.createElement('button');
                                    button20.classList.add('button20');
                                    document.querySelector('.balls1').appendChild(button20);
                                    button20.innerHTML = '20 баллов';
                                    button20.addEventListener('click', function(event){
                
                                    let popupBlock = document.createElement('div');
                                        popupBlock.classList.add('popupBlock');
                                        popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
                                        document.querySelector('.container').appendChild(popupBlock);
                                
                                    let popupText = document.createElement('p');
                                        popupText.classList.add('popupText');
                                        document.querySelector('.popupBlock').appendChild(popupText);
                                        popupText.innerHTML = 'Монополия, обеспечивающая сверхприбыль за счет новаторской деятельности.';

                                        let buttons = document.createElement('div');
                                        buttons.classList.add('buttonS');
                                        document.querySelector('.popupBlock').appendChild(buttons);
                                
                                let musicAdd = document.createElement('button');
                                musicAdd.classList.add('music');
                                    document.querySelector('.buttonS').appendChild(musicAdd);
                                    musicAdd.innerHTML = 'Время на обдумывание';
                                let audio = new Audio();
                                    audio.src = 'music.mp3.mp3';
                                
                                musicAdd.addEventListener('click', function(event){
                                    if (audio.paused) {
                                        audio.play();
                                        musicAdd.innerHTML = "Пауза";
                                    } else {
                                        audio.pause();
                                        musicAdd.innerHTML = "Играть";
                                    }
                                });
                                
                                let popupButton = document.createElement('button');
                                    popupButton.classList.add('popup_button');
                                    document.querySelector('.buttonS').appendChild(popupButton);
                                    popupButton.innerHTML = 'Закрыть';
                                    popupButton.addEventListener('click', function(event){
                                        popupBlock.remove();
                                        button20.style.textDecoration = "line-through";
                                    });
                                });

                                    let button30 = document.createElement('button');
                                    button30.classList.add('button30');
                                    document.querySelector('.balls1').appendChild(button30);
                                    button30.innerHTML = '30 баллов';
                                    button30.addEventListener('click', function(event){

                                    let popupBlock = document.createElement('div');
                                        popupBlock.classList.add('popupBlock');
                                        popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
                                        document.querySelector('.container').appendChild(popupBlock);
                            
                                    let popupText = document.createElement('p');
                                        popupText.classList.add('popupText');
                                        document.querySelector('.popupBlock').appendChild(popupText);
                                        popupText.innerHTML = 'Создание, использование и распространение нового средства, продукта, процесса (технического, экономического, организационного, культурного и др';

                                        let buttons = document.createElement('div');
                                        buttons.classList.add('buttonS');
                                        document.querySelector('.popupBlock').appendChild(buttons);
                                
                                let musicAdd = document.createElement('button');
                                musicAdd.classList.add('music');
                                    document.querySelector('.buttonS').appendChild(musicAdd);
                                    musicAdd.innerHTML = 'Время на обдумывание';
                                let audio = new Audio();
                                    audio.src = 'music.mp3.mp3';
                                
                                musicAdd.addEventListener('click', function(event){
                                    if (audio.paused) {
                                        audio.play();
                                        musicAdd.innerHTML = "Пауза";
                                    } else {
                                        audio.pause();
                                        musicAdd.innerHTML = "Играть";
                                    }
                                });
                                
                                let popupButton = document.createElement('button');
                                    popupButton.classList.add('popup_button');
                                    document.querySelector('.buttonS').appendChild(popupButton);
                                    popupButton.innerHTML = 'Закрыть';
                                    popupButton.addEventListener('click', function(event){
                                        popupBlock.remove();
                                        button30.style.textDecoration = "line-through";
                                    });
                                            });
                                        let button40 = document.createElement('button');
                                        button40.classList.add('button20');
                                        document.querySelector('.balls1').appendChild(button40);
                                        button40.innerHTML = '40 баллов';
                                        button40.addEventListener('click', function(event){
                    
                                        let popupBlock = document.createElement('div');
                                            popupBlock.classList.add('popupBlock');
                                            popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
                                            document.querySelector('.container').appendChild(popupBlock);
                                
                                        let popupText = document.createElement('p');
                                        popupText.classList.add('popupText');
                                            document.querySelector('.popupBlock').appendChild(popupText);
                                            popupText.innerHTML = 'Порождение нововведений, вознаграждение за техническое и организационное новаторство';

                                            let buttons = document.createElement('div');
                                            buttons.classList.add('buttonS');
                                            document.querySelector('.popupBlock').appendChild(buttons);
                                    
                                    let musicAdd = document.createElement('button');
                                    musicAdd.classList.add('music');
                                        document.querySelector('.buttonS').appendChild(musicAdd);
                                        musicAdd.innerHTML = 'Время на обдумывание';
                                    let audio = new Audio();
                                        audio.src = 'music.mp3.mp3';
                                    
                                    musicAdd.addEventListener('click', function(event){
                                        if (audio.paused) {
                                            audio.play();
                                            musicAdd.innerHTML = "Пауза";
                                        } else {
                                            audio.pause();
                                            musicAdd.innerHTML = "Играть";
                                        }
                                    });
                                    
                                    let popupButton = document.createElement('button');
                                        popupButton.classList.add('popup_button');
                                        document.querySelector('.buttonS').appendChild(popupButton);
                                        popupButton.innerHTML = 'Закрыть';
                                        popupButton.addEventListener('click', function(event){
                                            popupBlock.remove();
                                            button40.style.textDecoration = "line-through";
                                        });
                                });
                                    let button50 = document.createElement('button');
                                        button50.classList.add('button50');
                                        document.querySelector('.balls1').appendChild(button50);
                                        button50.innerHTML = '50 баллов';
                                        button50.addEventListener('click', function(event){
                    
                                        let popupBlock = document.createElement('div');
                                            popupBlock.classList.add('popupBlock');
                                            popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
                                            document.querySelector('.container').appendChild(popupBlock);
                                
                                        let popupText = document.createElement('p');
                                        popupText.classList.add('popupText');
                                            document.querySelector('.popupBlock').appendChild(popupText);
                                            popupText.innerHTML = 'Движение, при котором товары и деньги движутся навстречу друг другу по давно установившимся путям.';

                                            let buttons = document.createElement('div');
                                            buttons.classList.add('buttonS');
                                            document.querySelector('.popupBlock').appendChild(buttons);
                                    
                                    let musicAdd = document.createElement('button');
                                    musicAdd.classList.add('music');
                                        document.querySelector('.buttonS').appendChild(musicAdd);
                                        musicAdd.innerHTML = 'Время на обдумывание';
                                    let audio = new Audio();
                                        audio.src = 'music.mp3.mp3';
                                    
                                    musicAdd.addEventListener('click', function(event){
                                        if (audio.paused) {
                                            audio.play();
                                            musicAdd.innerHTML = "Пауза";
                                        } else {
                                            audio.pause();
                                            musicAdd.innerHTML = "Играть";
                                        }
                                    });
                                    
                                    let popupButton = document.createElement('button');
                                        popupButton.classList.add('popup_button');
                                        document.querySelector('.buttonS').appendChild(popupButton);
                                        popupButton.innerHTML = 'Закрыть';
                                        popupButton.addEventListener('click', function(event){
                                            popupBlock.remove();
                                            button50.style.textDecoration = "line-through";
                                        });
                                });
        });

    let button2 = document.createElement('button');
        button2.classList.add('button2');
        document.querySelector('.categoryes').appendChild(button2);
        button2.innerHTML = 'Шумпетер';
        button2.addEventListener('click', function(event){

            let balls = document.createElement('div');
                            balls.classList.add('balls');
                            document.querySelector('.container').appendChild(balls);

            let balls2 = document.createElement('div');
                balls2.classList.add('balls2');
                document.querySelector('.balls').appendChild(balls2);

                                let button10 = document.createElement('button');
                                button10.classList.add('button10');
                                document.querySelector('.balls2').appendChild(button10);
                                button10.innerHTML = '10 баллов';
                                button10.addEventListener('click', function(event){

                                    let popupBlock = document.createElement('div');
                                    popupBlock.classList.add('popupBlock');
                                    popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
                                    document.querySelector('.container').appendChild(popupBlock);
                            
                                    let popupText = document.createElement('p');
                                    popupText.classList.add('popupText');
                                        document.querySelector('.popupBlock').appendChild(popupText);
                                        popupText.innerHTML = 'Как Й. Шумпетер называл конкуренцию, основанную на снижении издержек производства и повышении качества продукции за счет технических, организационных и управленческих новаций.';

                                        let buttons = document.createElement('div');
                                        buttons.classList.add('buttonS');
                                        document.querySelector('.popupBlock').appendChild(buttons);
                                
                                let musicAdd = document.createElement('button');
                                musicAdd.classList.add('music');
                                    document.querySelector('.buttonS').appendChild(musicAdd);
                                    musicAdd.innerHTML = 'Время на обдумывание';
                                let audio = new Audio();
                                    audio.src = 'music.mp3.mp3';
                                
                                musicAdd.addEventListener('click', function(event){
                                    if (audio.paused) {
                                        audio.play();
                                        musicAdd.innerHTML = "Пауза";
                                    } else {
                                        audio.pause();
                                        musicAdd.innerHTML = "Играть";
                                    }
                                });
                                
                                let popupButton = document.createElement('button');
                                    popupButton.classList.add('popup_button');
                                    document.querySelector('.buttonS').appendChild(popupButton);
                                    popupButton.innerHTML = 'Закрыть';
                                    popupButton.addEventListener('click', function(event){
                                        popupBlock.remove();
                                        button10.style.textDecoration = "line-through";
                                    });
                                    });

                                    let button20 = document.createElement('button');
                                    button20.classList.add('button20');
                                    document.querySelector('.balls2').appendChild(button20);
                                    button20.innerHTML = '20 баллов';
                                    button20.addEventListener('click', function(event){

                                    let popupBlock = document.createElement('div');
                                    popupBlock.classList.add('popupBlock');
                                    popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
                                    document.querySelector('.container').appendChild(popupBlock);
                            
                                    let popupText = document.createElement('p');
                                    popupText.classList.add('popupText');
                                        document.querySelector('.popupBlock').appendChild(popupText);
                                        popupText.innerHTML = 'ЭТО шумпетер называл четвертым фактором производства, неизвестного классикам.';

                                        let buttons = document.createElement('div');
                                        buttons.classList.add('buttonS');
                                        document.querySelector('.popupBlock').appendChild(buttons);
                                
                                let musicAdd = document.createElement('button');
                                musicAdd.classList.add('music');
                                    document.querySelector('.buttonS').appendChild(musicAdd);
                                    musicAdd.innerHTML = 'Время на обдумывание';
                                let audio = new Audio();
                                    audio.src = 'music.mp3.mp3';
                                
                                musicAdd.addEventListener('click', function(event){
                                    if (audio.paused) {
                                        audio.play();
                                        musicAdd.innerHTML = "Пауза";
                                    } else {
                                        audio.pause();
                                        musicAdd.innerHTML = "Играть";
                                    }
                                });
                                
                                let popupButton = document.createElement('button');
                                    popupButton.classList.add('popup_button');
                                    document.querySelector('.buttonS').appendChild(popupButton);
                                    popupButton.innerHTML = 'Закрыть';
                                    popupButton.addEventListener('click', function(event){
                                        popupBlock.remove();
                                        button20.style.textDecoration = "line-through";
                                    });
                            });

                            let button30 = document.createElement('button');
                            button30.classList.add('button30');
                            document.querySelector('.balls2').appendChild(button30);
                            button30.innerHTML = '30 баллов';
                            button30.addEventListener('click', function(event){

                            let popupBlock = document.createElement('div');
                            popupBlock.classList.add('popupBlock');
                            popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
                            document.querySelector('.container').appendChild(popupBlock);

                            let popupText = document.createElement('p');
                            popupText.classList.add('popupText');
                                document.querySelector('.popupBlock').appendChild(popupText);
                                popupText.innerHTML = 'Джефф Безос говорил «Принимая утром душ, наши конкуренты думают о том, как обойти того или иного соперника. Мы же в душе думаем об ЭТОМ, ЭТО сделает жизнь клиента лучше.“ Шумпетер рассматривал динамическую конкуренцию, которая основана на меняющихся экономических условиях производства товаров. ЭТО является важнейшим фактором конкурентоспособности, изменяющим эти условия?';

                                let buttons = document.createElement('div');
                                buttons.classList.add('buttonS');
                                document.querySelector('.popupBlock').appendChild(buttons);
                        
                        let musicAdd = document.createElement('button');
                        musicAdd.classList.add('music');
                            document.querySelector('.buttonS').appendChild(musicAdd);
                            musicAdd.innerHTML = 'Время на обдумывание';
                        let audio = new Audio();
                            audio.src = 'music.mp3.mp3';
                        
                        musicAdd.addEventListener('click', function(event){
                            if (audio.paused) {
                                audio.play();
                                musicAdd.innerHTML = "Пауза";
                            } else {
                                audio.pause();
                                musicAdd.innerHTML = "Играть";
                            }
                        });
                        
                        let popupButton = document.createElement('button');
                            popupButton.classList.add('popup_button');
                            document.querySelector('.buttonS').appendChild(popupButton);
                            popupButton.innerHTML = 'Закрыть';
                            popupButton.addEventListener('click', function(event){
                                popupBlock.remove();
                                button30.style.textDecoration = "line-through";
                            });
                    });
                                    let button40 = document.createElement('button');
                                    button40.classList.add('button20');
                                    document.querySelector('.balls2').appendChild(button40);
                                    button40.innerHTML = '40 баллов';
                                    button40.addEventListener('click', function(event){

                                    let popupBlock = document.createElement('div');
                                    popupBlock.classList.add('popupBlock');
                                    popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
                                    document.querySelector('.container').appendChild(popupBlock);
                            
                                    let popupText = document.createElement('p');
                                    popupText.classList.add('popupText');
                                        document.querySelector('.popupBlock').appendChild(popupText);
                                        popupText.innerHTML = 'Одним из примеров ЭТОГО процесса является появление книжного онлайн магазина. Пример - онлайн магазин Amazon, который предоставил покупателям не только более выгодные цены, но также более разнообразную продукцию,чем привычные всем нам книжные магазины.';

                                        let buttons = document.createElement('div');
                                        buttons.classList.add('buttonS');
                                        document.querySelector('.popupBlock').appendChild(buttons);
                                
                                let musicAdd = document.createElement('button');
                                musicAdd.classList.add('music');
                                    document.querySelector('.buttonS').appendChild(musicAdd);
                                    musicAdd.innerHTML = 'Время на обдумывание';
                                let audio = new Audio();
                                    audio.src = 'music.mp3.mp3';
                                
                                musicAdd.addEventListener('click', function(event){
                                    if (audio.paused) {
                                        audio.play();
                                        musicAdd.innerHTML = "Пауза";
                                    } else {
                                        audio.pause();
                                        musicAdd.innerHTML = "Играть";
                                    }
                                });
                                
                                let popupButton = document.createElement('button');
                                    popupButton.classList.add('popup_button');
                                    document.querySelector('.buttonS').appendChild(popupButton);
                                    popupButton.innerHTML = 'Закрыть';
                                    popupButton.addEventListener('click', function(event){
                                        popupBlock.remove();
                                        button40.style.textDecoration = "line-through";
                                    });
                            });
                                let button50 = document.createElement('button');
                                    button50.classList.add('button50');
                                    document.querySelector('.balls2').appendChild(button50);
                                    button50.innerHTML = '50 баллов';
                                    button50.addEventListener('click', function(event){

                                    let popupBlock = document.createElement('div');
                                    popupBlock.classList.add('popupBlock');
                                    popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
                                    document.querySelector('.container').appendChild(popupBlock);
                            
                                    let popupText = document.createElement('p');
                                    popupText.classList.add('popupText');
                                        document.querySelector('.popupBlock').appendChild(popupText);
                                        popupText.innerHTML = 'Поставьте в ряд столько почтовых карет, сколько пожелаете — железной дороги у Вас при этом не получится. О чем так говорил Шумпетер?';

                                        let buttons = document.createElement('div');
                                        buttons.classList.add('buttonS');
                                        document.querySelector('.popupBlock').appendChild(buttons);
                                
                                let musicAdd = document.createElement('button');
                                musicAdd.classList.add('music');
                                    document.querySelector('.buttonS').appendChild(musicAdd);
                                    musicAdd.innerHTML = 'Время на обдумывание';
                                let audio = new Audio();
                                    audio.src = 'music.mp3.mp3';
                                
                                musicAdd.addEventListener('click', function(event){
                                    if (audio.paused) {
                                        audio.play();
                                        musicAdd.innerHTML = "Пауза";
                                    } else {
                                        audio.pause();
                                        musicAdd.innerHTML = "Играть";
                                    }
                                });
                                
                                let popupButton = document.createElement('button');
                                    popupButton.classList.add('popup_button');
                                    document.querySelector('.buttonS').appendChild(popupButton);
                                    popupButton.innerHTML = 'Закрыть';
                                    popupButton.addEventListener('click', function(event){
                                        popupBlock.remove();
                                        button50.style.textDecoration = "line-through";
                                    });
                            });
        });

        let button3 = document.createElement('button');
        button3.classList.add('button3');
        document.querySelector('.categoryes').appendChild(button3);
        button3.innerHTML = 'Ассоциации';
        button3.addEventListener('click', function(event){

            let balls = document.createElement('div');
                        balls.classList.add('balls');
                        document.querySelector('.container').appendChild(balls);

            let balls3 = document.createElement('div');
                balls3.classList.add('balls3');
                document.querySelector('.balls').appendChild(balls3);


            let button10 = document.createElement('button');
            button10.classList.add('button10');
            document.querySelector('.balls3').appendChild(button10);
            button10.innerHTML = '10 баллов';
            button10.addEventListener('click', function(event){

                let popupBlock = document.createElement('div');
                popupBlock.classList.add('popupBlock');
                popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
                document.querySelector('.container').appendChild(popupBlock);
        
                let popupText = document.createElement('p');
                    popupText.classList.add('popupText');
                    document.querySelector('.popupBlock').appendChild(popupText);
                    popupText.innerHTML += "<img src='/img/monopoly1.jpg'><img src='/img/monopoly2.jpg'>";

                    let buttons = document.createElement('div');
                    buttons.classList.add('buttonS');
                    document.querySelector('.popupBlock').appendChild(buttons);
            
            let musicAdd = document.createElement('button');
            musicAdd.classList.add('music');
                document.querySelector('.buttonS').appendChild(musicAdd);
                musicAdd.innerHTML = 'Время на обдумывание';
            let audio = new Audio();
                audio.src = 'music.mp3.mp3';
            
            musicAdd.addEventListener('click', function(event){
                if (audio.paused) {
                    audio.play();
                    musicAdd.innerHTML = "Пауза";
                } else {
                    audio.pause();
                    musicAdd.innerHTML = "Играть";
                }
            });
            
            let popupButton = document.createElement('button');
                popupButton.classList.add('popup_button');
                document.querySelector('.buttonS').appendChild(popupButton);
                popupButton.innerHTML = 'Закрыть';
                popupButton.addEventListener('click', function(event){
                    popupBlock.remove();
                    button10.style.textDecoration = "line-through";
                });
                });

                let button20 = document.createElement('button');
                button20.classList.add('button20');
                document.querySelector('.balls3').appendChild(button20);
                button20.innerHTML = '20 баллов';
                button20.addEventListener('click', function(event){

                let popupBlock = document.createElement('div');
                popupBlock.classList.add('popupBlock');
                popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
                document.querySelector('.container').appendChild(popupBlock);
        
                let popupText = document.createElement('p');
                popupText.classList.add('popupText');
                    document.querySelector('.popupBlock').appendChild(popupText);
                    popupText.innerHTML += "<img src='/img/dynamica1.jpg'><img src='/img/dynamica2.jpg'>";

                    let buttons = document.createElement('div');
                    buttons.classList.add('buttonS');
                    document.querySelector('.popupBlock').appendChild(buttons);
            
            let musicAdd = document.createElement('button');
            musicAdd.classList.add('music');
                document.querySelector('.buttonS').appendChild(musicAdd);
                musicAdd.innerHTML = 'Время на обдумывание';
            let audio = new Audio();
                audio.src = 'music.mp3.mp3';
            
            musicAdd.addEventListener('click', function(event){
                if (audio.paused) {
                    audio.play();
                    musicAdd.innerHTML = "Пауза";
                } else {
                    audio.pause();
                    musicAdd.innerHTML = "Играть";
                }
            });
            
            let popupButton = document.createElement('button');
                popupButton.classList.add('popup_button');
                document.querySelector('.buttonS').appendChild(popupButton);
                popupButton.innerHTML = 'Закрыть';
                popupButton.addEventListener('click', function(event){
                    popupBlock.remove();
                    button20.style.textDecoration = "line-through";
                });
        });

        let button30 = document.createElement('button');
        button30.classList.add('button30');
        document.querySelector('.balls3').appendChild(button30);
        button30.innerHTML = '30 баллов';
        button30.addEventListener('click', function(event){

        let popupBlock = document.createElement('div');
        popupBlock.classList.add('popupBlock');
        popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
        document.querySelector('.container').appendChild(popupBlock);

        let popupText = document.createElement('p');
        popupText.classList.add('popupText');
            document.querySelector('.popupBlock').appendChild(popupText);
            popupText.innerHTML += "<img src='/img/pribil1.jpg'><img src='/img/pribil2.jpg'><img src='/img/pribil3.jpg'>";
            let buttons = document.createElement('div');
            buttons.classList.add('buttonS');
            document.querySelector('.popupBlock').appendChild(buttons);
    
    let musicAdd = document.createElement('button');
    musicAdd.classList.add('music');
        document.querySelector('.buttonS').appendChild(musicAdd);
        musicAdd.innerHTML = 'Время на обдумывание';
    let audio = new Audio();
        audio.src = 'music.mp3.mp3';
    
    musicAdd.addEventListener('click', function(event){
        if (audio.paused) {
            audio.play();
            musicAdd.innerHTML = "Пауза";
        } else {
            audio.pause();
            musicAdd.innerHTML = "Играть";
        }
    });
    
    let popupButton = document.createElement('button');
        popupButton.classList.add('popup_button');
        document.querySelector('.buttonS').appendChild(popupButton);
        popupButton.innerHTML = 'Закрыть';
        popupButton.addEventListener('click', function(event){
            popupBlock.remove();
            button30.style.textDecoration = "line-through";
        });
});
                let button40 = document.createElement('button');
                button40.classList.add('button20');
                document.querySelector('.balls3').appendChild(button40);
                button40.innerHTML = '40 баллов';
                button40.addEventListener('click', function(event){

                let popupBlock = document.createElement('div');
                popupBlock.classList.add('popupBlock');
                popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
                document.querySelector('.container').appendChild(popupBlock);
        
                let popupText = document.createElement('p');
                popupText.classList.add('popupText');
                    document.querySelector('.popupBlock').appendChild(popupText);
                    popupText.innerHTML += "<img src='/img/bariel1.jpg'><img src='/img/bariel2.jpg'><img src='/img/bariel3.jpg'>";

                    let buttons = document.createElement('div');
                    buttons.classList.add('buttonS');
                    document.querySelector('.popupBlock').appendChild(buttons);
            
            let musicAdd = document.createElement('button');
            musicAdd.classList.add('music');
                document.querySelector('.buttonS').appendChild(musicAdd);
                musicAdd.innerHTML = 'Время на обдумывание';
            let audio = new Audio();
                audio.src = 'music.mp3.mp3';
            
            musicAdd.addEventListener('click', function(event){
                if (audio.paused) {
                    audio.play();
                    musicAdd.innerHTML = "Пауза";
                } else {
                    audio.pause();
                    musicAdd.innerHTML = "Играть";
                }
            });
            
            let popupButton = document.createElement('button');
                popupButton.classList.add('popup_button');
                document.querySelector('.buttonS').appendChild(popupButton);
                popupButton.innerHTML = 'Закрыть';
                popupButton.addEventListener('click', function(event){
                    popupBlock.remove();
                    button40.style.textDecoration = "line-through";
                });
        });
            let button50 = document.createElement('button');
                button50.classList.add('button50');
                document.querySelector('.balls3').appendChild(button50);
                button50.innerHTML = '50 баллов';
                button50.addEventListener('click', function(event){

                let popupBlock = document.createElement('div');
                popupBlock.classList.add('popupBlock');
                popupBlock.setAttribute("style", "visibility:visible; opacity:0.9;");
                document.querySelector('.container').appendChild(popupBlock);
        
                let popupText = document.createElement('p');
                    popupText.classList.add('popupText');
                    document.querySelector('.popupBlock').appendChild(popupText);
                    popupText.innerHTML += "<img src='/img/deneshca1.jpg'><img src='/img/deneshca2.jpg'>";

                    let buttons = document.createElement('div');
                    buttons.classList.add('buttonS');
                    document.querySelector('.popupBlock').appendChild(buttons);
            
            let musicAdd = document.createElement('button');
            musicAdd.classList.add('music');
                document.querySelector('.buttonS').appendChild(musicAdd);
                musicAdd.innerHTML = 'Время на обдумывание';
            let audio = new Audio();
                audio.src = 'music.mp3.mp3';
            
            musicAdd.addEventListener('click', function(event){
                if (audio.paused) {
                    audio.play();
                    musicAdd.innerHTML = "Пауза";
                } else {
                    audio.pause();
                    musicAdd.innerHTML = "Играть";
                }
            });
            
            let popupButton = document.createElement('button');
                popupButton.classList.add('popup_button');
                document.querySelector('.buttonS').appendChild(popupButton);
                popupButton.innerHTML = 'Закрыть';
                popupButton.addEventListener('click', function(event){
                    popupBlock.remove();
                    button50.style.textDecoration = "line-through";
                });
            });
        });

});