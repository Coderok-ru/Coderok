<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="author" content="Andrey Lyubichenko, info@coderok.ru">
    <meta name="copyright" content="Coderok">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('/apple-touch-icon.png')}}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('/favicon-32x32.png')}}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('/favicon-16x16.png')}}">
    <link rel="manifest" href="{{asset('/site.webmanifest')}}">

    <meta name="theme-color" content="#a656ff"/>
    <meta
        name="description"
        content="Разработка мобильных приложений под Android и iOS, лендингов, web-приложений и систем управления любой сложности."
    />

    {{--apple tags--}}
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta content="yes" name="apple-touch-fullscreen"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    {{--openGraph--}}
    <meta name="og:title" content="Coderok || Personal Portfolio a Andrey Lyubichenko"/>
    <meta name="og:type" content="developer"/>
    <meta name="og:url" content="https://coderok.ru"/>
    <meta name="og:image" content="{{asset('./img/banner-02.webp')}}"/>
    <meta name="og:site_name" content="Coderok"/>
    <meta name="og:description"
          content="Разработка мобильных приложений под Android и iOS, лендингов, web-приложений и систем управления любой сложности."/>

    <meta name="og:email" content="info@coderok.ru"/>
    <meta name="og:phone_number" content="+7(999)221-33-83"/>

    <title>Coderok || Personal Portfolio a Andrey Lyubichenko</title>

    <!-- Styles -->
    <link rel="stylesheet" href="{{asset('assets/css/vendor/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/vendor/slick.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/vendor/slick-theme.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/vendor/aos.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/plugins/feature.css')}}">
    <!-- Style css -->
    <link rel="stylesheet" href="{{asset('assets/css/style.css')}}">

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(65087863, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/65087863" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
    <!-- Top.Mail.Ru counter -->
    <script type="text/javascript">
        var _tmr = window._tmr || (window._tmr = []);
        _tmr.push({id: "3536367", type: "pageView", start: (new Date()).getTime()});
        (function (d, w, id) {
            if (d.getElementById(id)) return;
            var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
            ts.src = "https://top-fwz1.mail.ru/js/code.js";
            var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
            if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
        })(document, window, "tmr-code");
    </script>
    <noscript><div><img src="https://top-fwz1.mail.ru/counter?id=3536367;js=na" style="position:absolute;left:-9999px;" alt="Top.Mail.Ru" /></div></noscript>
    <!-- /Top.Mail.Ru counter -->


</head>
<body class="template-color-1 spybody" data-spy="scroll" data-bs-target=".navbar-example2" data-offset="150">
<!-- header - developer home -->
<!-- Start Header -->
<header class="rn-header haeder-default black-logo-version header--fixed header--sticky">
    <div class="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
        <!-- Start Header Left -->
        <div class="col-lg-2 col-6">
            <div class="header-left">
                <div class="logo">
                    <a href="#">
                        <img class="main-logo" src="{{asset('./logo/logo-coder.svg')}}" alt="logo">
                    </a>
                </div>
            </div>
        </div>
        <!-- End Header Left -->
        <!-- Start Header Center -->
        <div class="col-lg-10 col-6">
            <div class="header-center">
                <nav id="sideNav" class="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav">
                    <!-- Start Mainmanu Nav -->
                    <ul class="primary-menu nav nav-pills">
                        <li class="nav-item current"><a class="nav-link smoth-animation active" href="#home">Инфо</a>
                        </li>
                        <li class="nav-item"><a class="nav-link smoth-animation" href="#experiences">Услуги</a></li>
                        <li class="nav-item"><a class="nav-link smoth-animation" href="#portfolio">Портфолио</a></li>
                        <li class="nav-item"><a class="nav-link smoth-animation" href="#contacts">Мои контакты</a></li>
                    </ul>
                    <!-- End Mainmanu Nav -->
                </nav>
                <!-- Start Header Right  -->
                <div class="header-right">
                    <label class="switch">
                        <input type="checkbox" id="themeSwitch">
                        <span class="slider round"></span>
                    </label>


                    <div class="hamberger-menu d-block d-xl-none">
                        <i id="menuBtn" class="feather-menu humberger-menu"></i>
                    </div>

                    <div class="close-menu d-block">
                            <span class="closeTrigger">
                                <i data-feather="x"></i>
                            </span>
                    </div>
                </div>
                <!-- End Header Right  -->

            </div>
        </div>
        <!-- End Header Center -->
    </div>
</header>
<!-- End Header Area -->

<!-- Start Popup Mobile Menu  -->
<div class="popup-mobile-menu">
    <div class="inner">
        <div class="menu-top">
            <div class="menu-header">
                <a class="logo" href="#">
                    <img class="mobile-logo"  src="{{asset('./logo/logo-coder.svg')}}" alt="logo">
                </a>
                <div class="close-button">
                    <button class="close-menu-activation close"><i data-feather="x"></i></button>
                </div>
            </div>
            <p class="discription">Разработка мобильных и веб приложений, ботов и mini apps.
            </p>
        </div>
        <div class="content">
            <ul class="primary-menu nav nav-pills onepagenav">
                <li class="nav-item current"><a class="nav-link smoth-animation active" href="#home">Инфо</a>
                </li>
                <li class="nav-item"><a class="nav-link smoth-animation" href="#experiences">Услуги</a></li>
                <li class="nav-item"><a class="nav-link smoth-animation" href="#portfolio">Портфолио</a></li>
                <li class="nav-item"><a class="nav-link smoth-animation" href="#contacts">Мои контакты</a></li>
            </ul>
            <!-- social sharea area -->
            <div class="social-share-style-1 mt--40">
                <span class="title">Для связи со мной</span>
                <ul class="social-share d-flex liststyle">
                    <li class="instagram"><a href="https://t.me/coderok_official">
                            <i data-feather="send"></i>
                        </a>
                    </li>
                    <li class="linkedin"><a href="https://wa.me/79992213383?text=CODEROK.RU%20%7C%20%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20">
                            <i data-feather="message-circle"></i>
                        </a>
                    </li>
                    <li class="linkedin"><a href="tel:+79992213383">
                            <i data-feather="phone-call"></i>
                        </a>
                    </li>
                    <li class="linkedin"><a href="mailto:info@coderok.ru">
                            <i data-feather="mail"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- end -->
        </div>
    </div>
</div>
<!-- End Popup Mobile Menu  -->

<main class="main-page-wrapper">

    <!-- Start Slider Area -->
    <div id="home" class="rn-slide-area">
        <div class="slide slider-style-3">
            <div class="container">
                <div class="row slider-wrapper">
                    <div class="order-2 order-xl-1 col-lg-12 col-xl-5 mt_lg--50 mt_md--50 mt_sm--50">
                        <div class="slider-info">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-12">
                                    <div class="user-info-top">
                                        <div class="user-info-header">
                                            <div class="user">
                                                <i data-feather="user"></i>
                                            </div>
                                            <h2 class="title">
                                                Привет, меня зовут <span>Андрей</span>
                                            </h2>
                                            <p class="disc">Разработчик мобильных и web приложений с креативным мышлением и высокими стандартами к качеству работы.</p>
                                        </div>
                                        <div class="user-info-footer">
                                            <div class="info">
                                                <i data-feather="code"></i>
                                                <span>Web developer</span>
                                            </div>
                                            <div class="info">
                                                <i data-feather="smartphone"></i>
                                                <span>Mobile app developer</span>
                                            </div>
                                            <div class="info">
                                                <i data-feather="pen-tool"></i>
                                                <span>Web designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-12 col-lg-12 col-12">
                                    <div class="user-info-bottom">
                                        <span>Посмотрите мое резюме или сразу свяжитесь со мной: </span>
                                        <div class="button-wrapper d-flex">
                                            <a class="rn-btn mr--30" href="{{asset('assets/images/contact/Любиченко Андрей.pdf')}}" target="_blank"><span>СКАЧАТЬ РЕЗЮМЕ</span></a>
                                            <a class="rn-btn" href="https://t.me/coderok_official" target="_blank"><span>НАПИСАТЬ МНЕ</span></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="order-1 order-xl-2 col-lg-12 col-xl-7">
                        <div class="background-image-area">
                            <div class="thumbnail-image">
                                <img src="{{asset('./img/banner-02.webp')}}" alt="Personal Portfolio">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Slider Area -->

    <!-- Start Experience area -->
    <div id="experiences" class="rn-experience-area section-separator rn-section-gap">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true"
                         class="section-title text-center">
                        <span class="subtitle">Опыт более 13 лет</span>
                        <h2 class="title">Мои услуги</h2>
                    </div>
                </div>
            </div>
            <div class="row mt--10">
                <div class="col-12 mt_experience">

                    <!-- single skills -->
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true"
                         class="experience-style-two">
                        <div class="experience-left">
                            <div class="experience-image">
                                <img src="{{asset('assets/images/portfolio/web_img.svg')}}" alt="web image">
                            </div>
                            <div class="experience-center">
                                <span class="date">Web development</span>
                                <h4 class="experience-title">
                                    Разработка веб приложений
                                </h4>
                                <h6 class="subtitle">
                                    Сайт любой сложности и направленности
                                </h6>
                                <p class="disc">От лендинга до сложных CRM систем</p>
                            </div>
                        </div>
                        <div class="experience-right">
                            <div class="experience-footer">
                                <a class="rn-btn" href="https://t.me/coderok_official" target="_blank"><span>ЗАКАЗАТЬ</span></a>
                            </div>
                        </div>
                    </div>
                    <!-- single skills -->

                    <!-- single skills -->
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-once="true"
                         class="experience-style-two">
                        <div class="experience-left">
                            <div class="experience-image">
                                <img src="{{asset('assets/images/portfolio/mobile_img.svg')}}" alt="mobile image">
                            </div>
                            <div class="experience-center">
                                <span class="date">Mobile App development</span>
                                <h4 class="experience-title">
                                    Разработка мобильных приложений
                                </h4>
                                <h6 class="subtitle">
                                    Под Android, iOS, Windows и MacOS
                                </h6>
                                <p class="disc">От дизайна до выпуска готового приложения</p>
                            </div>
                        </div>
                        <div class="experience-right">
                            <div class="experience-footer">
                                <a class="rn-btn" href="https://t.me/coderok_official" target="_blank"><span>ЗАКАЗАТЬ</span></a>
                            </div>
                        </div>
                    </div>
                    <!-- single skills -->

                    <!-- single skills -->
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true"
                         class="experience-style-two">
                        <div class="experience-left">
                            <div class="experience-image">
                                <img src="{{asset('assets/images/portfolio/bot_img.svg')}}" alt="bot image">
                            </div>
                            <div class="experience-center">
                                <span class="date">Web apps</span>
                                <h4 class="experience-title">
                                    Разработка чат ботов
                                </h4>
                                <h6 class="subtitle">
                                    И Mini Apps для Telegram и VK
                                </h6>
                                <p class="disc">От простых ботов до приложений Ecommerce</p>
                            </div>
                        </div>
                        <div class="experience-right">
                            <div class="experience-footer">
                                <a class="rn-btn" href="https://t.me/coderok_official" target="_blank"><span>ЗАКАЗАТЬ</span></a>
                            </div>
                        </div>
                    </div>
                    <!-- single skills -->

                </div>
            </div>
        </div>
    </div>
    <!-- End Experience area -->

    <!-- Start News Area -->
    <div class="rn-blog-area rn-section-gap section-separator" id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true"
                         class="section-title text-center">
                        <span class="subtitle">Коммерческая разработка</span>
                        <h2 class="title">Мои работы</h2>
                    </div>
                </div>
            </div>
            <div class="row row--25 mt--30 mt_md--10 mt_sm--10">

                <!-- Start Single blog -->
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true"
                     class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
                    <div class="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalIvinsight">
                        <div class="inner">
                            <div class="thumbnail">
                                <a href="javascript:void(0)">
                                    <img src="{{asset('assets/images/portfolio/ivinsight.png')}}" alt="Personal Portfolio Images">
                                </a>
                            </div>
                            <div class="content">
                                <div class="category-info">
                                    <div class="category-list">
                                        <a href="javascript:void(0)">Frontend, REST API, Backend, SEO</a>
                                    </div>

                                </div>
                                <h4 class="title"><a href="javascript:void(0)">Ivinsight - онлайн школа осознанного питания
                                        <i class="feather-arrow-up-right"></i></a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single blog -->

                <!-- Start Single blog -->
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="150" data-aos-once="true"
                     class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
                    <div class="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalMopup">
                        <div class="inner">
                            <div class="thumbnail">
                                <a href="javascript:void(0)">
                                    <img src="{{asset('assets/images/portfolio/mopup.png')}}" alt="Personal Portfolio Images">
                                </a>
                            </div>
                            <div class="content">
                                <div class="category-info">
                                    <div class="category-list">
                                        <a href="javascript:void(0)">Frontend, API</a>
                                    </div>
                                </div>
                                <h4 class="title"><a href="javascript:void(0)">Mop'up - сервис по заказу клининга на дом <i
                                            class="feather-arrow-up-right"></i></a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single blog -->

                <!-- Start Single blog -->
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-once="true"
                     class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
                    <div class="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalSleep">
                        <div class="inner">
                            <div class="thumbnail">
                                <a href="javascript:void(0)">
                                    <img src="{{asset('assets/images/portfolio/sleep.png')}}" alt="Personal Portfolio Images">
                                </a>
                            </div>
                            <div class="content">
                                <div class="category-info">
                                    <div class="category-list">
                                        <a href="javascript:void(0)">Frontend</a>
                                    </div>
                                </div>
                                <h4 class="title"><a href="javascript:void(0)">SlipStream - крытый картинг в СПб<i class="feather-arrow-up-right"></i></a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single blog -->

            </div>

            <div class="row row--25 mt--30 mt_md--10 mt_sm--10">

                <!-- Start Single blog -->
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true"
                     class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
                    <div class="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalMopAdmin">
                        <div class="inner">
                            <div class="thumbnail">
                                <a href="javascript:void(0)">
                                    <img src="{{asset('assets/images/portfolio/mopup_admin.png')}}" alt="Personal Portfolio Images">
                                </a>
                            </div>
                            <div class="content">
                                <div class="category-info">
                                    <div class="category-list">
                                        <a href="javascript:void(0)">Frontend, Backend, REST API, mySQL</a>
                                    </div>

                                </div>
                                <h4 class="title"><a href="javascript:void(0)">Система управления контентом и заказами для приложений и сайта
                                        <i class="feather-arrow-up-right"></i></a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single blog -->

                <!-- Start Single blog -->
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="150" data-aos-once="true"
                     class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
                    <div class="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalMopBot">
                        <div class="inner">
                            <div class="thumbnail">
                                <a href="javascript:void(0)">
                                    <img src="{{asset('assets/images/portfolio/bot_mopup.png')}}" alt="Personal Portfolio Images">
                                </a>
                            </div>
                            <div class="content">
                                <div class="category-info">
                                    <div class="category-list">
                                        <a href="javascript:void(0)">Backend, REST API, TelegramAPI</a>
                                    </div>
                                </div>
                                <h4 class="title"><a href="javascript:void(0)">Telegram бот для заказа клининговых услуг на дом.<i
                                            class="feather-arrow-up-right"></i></a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single blog -->

                <!-- Start Single blog -->
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-once="true"
                     class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
                    <div class="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalMopPro">
                        <div class="inner">
                            <div class="thumbnail">
                                <a href="javascript:void(0)">
                                    <img src="{{asset('assets/images/portfolio/mop_cleaner.png')}}" alt="Personal Portfolio Images">
                                </a>
                            </div>
                            <div class="content">
                                <div class="category-info">
                                    <div class="category-list">
                                        <a href="javascript:void(0)">Android app</a>
                                    </div>
                                </div>
                                <h4 class="title"><a href="javascript:void(0)">Приложение для исполнителей сервиса Mop'up<i class="feather-arrow-up-right"></i></a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single blog -->

            </div>

            <div class="row row--25 mt--30 mt_md--10 mt_sm--10">

                <!-- Start Single blog -->
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true"
                     class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
                    <div class="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalMopCli">
                        <div class="inner">
                            <div class="thumbnail">
                                <a href="javascript:void(0)">
                                    <img src="{{asset('assets/images/portfolio/mop_clients.png')}}" alt="Personal Portfolio Images">
                                </a>
                            </div>
                            <div class="content">
                                <div class="category-info">
                                    <div class="category-list">
                                        <a href="javascript:void(0)">Android & iOS app</a>
                                    </div>

                                </div>
                                <h4 class="title"><a href="javascript:void(0)">Приложение для клиентов сервиса Mop'up
                                        <i class="feather-arrow-up-right"></i></a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single blog -->

                <!-- Start Single blog -->
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="150" data-aos-once="true"
                     class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
                    <div class="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                        <div class="inner">
                            <div class="thumbnail">
                                <a href="javascript:void(0)">
                                    <img src="{{asset('assets/images/portfolio/recipes.png')}}" alt="Personal Portfolio Images">
                                </a>
                            </div>
                            <div class="content">
                                <div class="category-info">
                                    <div class="category-list">
                                        <a href="javascript:void(0)">Android & iOS app</a>
                                    </div>
                                </div>
                                <h4 class="title"><a href="javascript:void(0)">Приложение с рецептами для Ivinsight<i
                                            class="feather-arrow-up-right"></i></a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single blog -->

                <!-- Start Single blog -->
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-once="true"
                     class="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
                    <div class="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                        <div class="inner">
                            <div class="thumbnail">
                                <a href="javascript:void(0)">
                                    <img src="{{asset('assets/images/portfolio/recipes_admin.png')}}" alt="Personal Portfolio Images">
                                </a>
                            </div>
                            <div class="content">
                                <div class="category-info">
                                    <div class="category-list">
                                        <a href="javascript:void(0)">Frontend, Backend, REST API, mySQL</a>
                                    </div>
                                </div>
                                <h4 class="title"><a href="javascript:void(0)">CMS для приложений и телеграм бота с рецептами Ivinsight<i class="feather-arrow-up-right"></i></a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single blog -->

            </div>

            <div class="row row--25 mt--30 mt_md--10 mt_sm--10">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" class="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
                    <div class="rn-service">
                        <div class="inner text-center">
                            <div class="icon">
                                <i data-feather="lock"></i>
                            </div>
                            <div class="content">
                                <h4 class="title"><a href="https://ru.wikipedia.org/wiki/Соглашение_о_неразглашении">И еще много работ с кем подписано NDA.</a></h4>
                                <p class="description">А так же работ в которых мною были разработаны и внедрены отдельные компоненты.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ENd Mews Area -->
    <!-- Modal Portfolio Body area Start -->
    <div class="modal fade" id="exampleModalIvinsight" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i data-feather="x"></i></span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row align-items-center">

                        <div class="col-lg-6">
                            <div class="portfolio-popup-thumbnail">
                                <div class="image">
                                    <img class="w-100" src="{{asset('assets/images/portfolio/ivinsight.png')}}" alt="slide">
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="text-content">
                                <h3>
                                    <span>Frontend, Backend, REST API, SEO, mySQL, PWA</span> Ivinsight
                                </h3>
                                <p class="mb--30">Сайт разработан на Laravel c применением Vue3 composition api.</p>
                                <p>Были написаны интерактивные квизы и тесты для пользователей, а так же сложные калькуляторы и внедрено получение рецептов блюд из сторонней базы данных.</p>
                                <div class="button-group mt--20">

                                    <a href="https://ivinsight.ru" target="_blank" class="rn-btn">
                                        <span>ОТКРЫТЬ</span>
                                        <i data-feather="chevron-right"></i>
                                    </a>
                                </div>

                            </div>
                            <!-- End of .text-content -->
                        </div>
                    </div>
                    <!-- End of .row Body-->
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal Portfolio area -->
    <!-- Modal Portfolio Body area Start -->
    <div class="modal fade" id="exampleModalMopup" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i data-feather="x"></i></span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row align-items-center">

                        <div class="col-lg-6">
                            <div class="portfolio-popup-thumbnail">
                                <div class="image">
                                    <img class="w-100" src="{{asset('assets/images/portfolio/mopup.png')}}" alt="slide">
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="text-content">
                                <h3>
                                    <span>Frontend, REST API, SEO, mySQL, PWA, Acquiring, Maps</span> Mopup
                                </h3>
                                <p class="mb--30">Сайт разработан на Laravel c применением Vue3 composition api.</p>
                                <p>Сайт написан по предоставленному макету Figma. Основной задачей являлось разработка формы заказа услуги с интерактивным подсчетом итоговой суммы зависящей от выбранного пользователем города.</p>
                                <div class="button-group mt--20">

                                    <a href="https://mopup.ru" target="_blank" class="rn-btn">
                                        <span>ОТКРЫТЬ</span>
                                        <i data-feather="chevron-right"></i>
                                    </a>
                                </div>

                            </div>
                            <!-- End of .text-content -->
                        </div>
                    </div>
                    <!-- End of .row Body-->
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal Portfolio area -->
    <!-- Modal Portfolio Body area Start -->
    <div class="modal fade" id="exampleModalSleep" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i data-feather="x"></i></span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row align-items-center">

                        <div class="col-lg-6">
                            <div class="portfolio-popup-thumbnail">
                                <div class="image">
                                    <img class="w-100" src="{{asset('assets/images/portfolio/sleep.png')}}" alt="slide">
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="text-content">
                                <h3>
                                    <span>Frontend, SEO, Maps</span> SlipStream
                                </h3>
                                <p class="mb--30">Сайт полностью разработан на Laravel </p>
                                <p>Статичный сайт c интегрированной и стилизованной под общий дизайн картой Mapbox</p>
                                <div class="button-group mt--20">

                                    <a href="https://slipstream-karting.ru/" target="_blank" class="rn-btn">
                                        <span>ОТКРЫТЬ</span>
                                        <i data-feather="chevron-right"></i>
                                    </a>
                                </div>

                            </div>
                            <!-- End of .text-content -->
                        </div>
                    </div>
                    <!-- End of .row Body-->
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal Portfolio area -->
    <!-- Modal Portfolio Body area Start -->
    <div class="modal fade" id="exampleModalMopAdmin" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i data-feather="x"></i></span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row align-items-center">

                        <div class="col-lg-6">
                            <div class="portfolio-popup-thumbnail">
                                <div class="image">
                                    <img class="w-100" src="{{asset('assets/images/portfolio/mopup_admin.png')}}" alt="slide">
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="text-content">
                                <h3>
                                    <span>Frontend, Backend, REST API, mySQL, Acquiring, YandexMaps, Push</span> Админ панель Mopup
                                </h3>
                                <p class="mb--30">Админ панель на Laravel </p>
                                <p>Админ панель для управления контентом на сайте, управления исполнителями и клиентами, push-уведомлениями и полная интеграция с мобильными приложениями (для исполнителей и клиентов) для управления заказами. Автоматические задачи/задачи по расписанию. Так же встроен интернет эквайринг для формирования ссылки на оплату и контроля статуса платежа. Данная админка находится в продакшене у клиента и носит конфиденциальный характер.</p>
{{--                                <div class="button-group mt--20">--}}

{{--                                    <a href="https://slipstream-karting.ru/" target="_blank" class="rn-btn">--}}
{{--                                        <span>ОТКРЫТЬ</span>--}}
{{--                                        <i data-feather="chevron-right"></i>--}}
{{--                                    </a>--}}
{{--                                </div>--}}

                            </div>
                            <!-- End of .text-content -->
                        </div>
                    </div>
                    <!-- End of .row Body-->
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal Portfolio area -->
    <!-- Modal Portfolio Body area Start -->
    <div class="modal fade" id="exampleModalMopBot" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i data-feather="x"></i></span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row align-items-center">

                        <div class="col-lg-6">
                            <div class="portfolio-popup-thumbnail">
                                <div class="image">
                                    <img class="w-100" src="{{asset('assets/images/portfolio/bot_mopup.png')}}" alt="slide">
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="text-content">
                                <h3>
                                    <span>Backend, REST API, TelegramAPI, Webhook,</span> Telegram бот
                                </h3>
                                <p class="mb--30">Telegram бот с встроенным mini app </p>
                                <p>Встроенное приложение позволяет прямо в боте воспользоваться формой заказа клининговых услуг на дом.</p>
                                <div class="button-group mt--20">

                                    <a href="https://t.me/Mopup_Cleaning_Bot" target="_blank" class="rn-btn">
                                        <span>ОТКРЫТЬ</span>
                                        <i data-feather="chevron-right"></i>
                                    </a>
                                </div>

                            </div>
                            <!-- End of .text-content -->
                        </div>
                    </div>
                    <!-- End of .row Body-->
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal Portfolio area -->
    <!-- Modal Portfolio Body area Start -->
    <div class="modal fade" id="exampleModalMopPro" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i data-feather="x"></i></span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row align-items-center">

                        <div class="col-lg-6">
                            <div class="portfolio-popup-thumbnail">
                                <div class="image">
                                    <img class="w-100" src="{{asset('assets/images/portfolio/mop_cleaner.png')}}" alt="slide">
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="text-content">
                                <h3>
                                    <span>Flutter, Dart, API, FireBase, OneSignal, MapBox</span> Mop'up cleaner PRO
                                </h3>
                                <p class="mb--30">Мобильное приложение для исполнителей сервиса Mop'up</p>
                                <p>Приложение позволяет просматривать заказы на карте по адресу, принимать и отклонять их, контролировать статус заказа, а так же в приложение встроен чат в реальном времени с поддержкой куратора.</p>
                                <div class="button-group mt--20">

                                    <a href="https://play.google.com/store/apps/details?id=com.coderok.cleanerpro" target="_blank" class="rn-btn">
                                        <span>GooglePlay</span>
                                        <i data-feather="chevron-right"></i>
                                    </a>
                                </div>

                            </div>
                            <!-- End of .text-content -->
                        </div>
                    </div>
                    <!-- End of .row Body-->
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal Portfolio area -->
    <!-- Modal Portfolio Body area Start -->
    <div class="modal fade" id="exampleModalMopCli" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i data-feather="x"></i></span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row align-items-center">

                        <div class="col-lg-6">
                            <div class="portfolio-popup-thumbnail">
                                <div class="image">
                                    <img class="w-100" src="{{asset('assets/images/portfolio/mop_clients.png')}}" alt="slide">
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="text-content">
                                <h3>
                                    <span>Flutter, Dart, API, FireBase, OneSignal, MapBox</span> Mop'up
                                </h3>
                                <p class="mb--30">Мобильное приложение для клиентов сервиса Mop'up</p>
                                <p>Приложение для заказа клининговых услуг с возможностью просмотра текущего статуса заказа, пуш уведомлениями.</p>
                                <div class="button-group mt--20">

                                    <a href="https://play.google.com/store/apps/details?id=com.coderok.mopup.mopup_client" target="_blank" class="rn-btn">
                                        <span>GooglePlay</span>
                                        <i data-feather="chevron-right"></i>
                                    </a>
                                    <a href="#" class="rn-btn" disabled>
                                        <span>AppStore</span>
                                        <i data-feather="chevron-right"></i>
                                    </a>
                                </div>

                            </div>
                            <!-- End of .text-content -->
                        </div>
                    </div>
                    <!-- End of .row Body-->
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal Portfolio area -->

    <!-- Back to  top Start -->
    <div class="backto-top">
        <div>
            <i data-feather="arrow-up"></i>
        </div>
    </div>
    <!-- Back to top end -->
</main>

<!-- Rn footer area Start -->
<div class="rn-contact-area rn-section-gap section-separator" id="contacts">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title text-center">
                    <span class="subtitle">ПО ВОПРОСАМ СОТРУДНИЧЕСТВА И ПРЕДЛОЖЕНИЙ</span>
                    <h2 class="title">Мои контакты</h2>
                </div>
            </div>
        </div>

        <div class="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
            <div class="col-lg-5">
                <div class="contact-about-area">
                    <div class="thumbnail">
                        <img src="{{asset('assets/images/about/contact.webp')}}" alt="contact-img">
                    </div>
                </div>
            </div>
            <div data-aos-delay="600" class="col-lg-7 contact-input">
                <div class="contact-about-area">
                    <div class="title-area">
                        <h4 class="title">Andrey Lyubichenko</h4>
                        <span>/ Coderok</span>
                    </div>
                    <div class="description">
                        <p>Я принимаю как разовые подряды, так и долгосрочные контракты в области разработки.
                        </p>
                        <span class="phone">Телефон: <a href="tel:+79992213383">+7(999)221-33-83</a></span>
                        <span class="mail">Email: <a href="mailto:info@coderok.ru">info@coderok.ru</a></span>
                    </div>
                    <div class="social-area">
                        <div class="social-icone">
                            <a href="https://t.me/coderok_official"><i data-feather="send"></i></a>
                            <a href="https://wa.me/79992213383?text=CODEROK.RU%20%7C%20%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20"><i data-feather="message-circle"></i></a>
                            <a href="tel:+79992213383"><i data-feather="phone-call"></i></a>
                            <a href="mailto:info@coderok.ru"><i data-feather="mail"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Start Footer Area -->
<div class="rn-footer-area rn-section-gap section-separator">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="footer-area text-center">

                    <div class="main-logo">
                            <img class="main-logo" src="{{asset('logo/logo-coder.svg')}}" alt="logo">
                    </div>

                    <p class="description mt--30">© <span id="year"></span>. All rights reserved by <a target="_blank" href="#">Coderok || Andrey Lyubichenko.</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Footer Area -->
<!-- Rn footer area end -->
<!-- JS ============================================ -->
<script src="{{asset('assets/js/vendor/jquery.js')}}"></script>
<script src="{{asset('assets/js/vendor/modernizer.min.js')}}"></script>
<script src="{{asset('assets/js/vendor/feather.min.js')}}"></script>
<script src="{{asset('assets/js/vendor/slick.min.js')}}"></script>
<script src="{{asset('assets/js/vendor/bootstrap.js')}}"></script>
<script src="{{asset('assets/js/vendor/text-type.js')}}"></script>
<script src="{{asset('assets/js/vendor/wow.js')}}"></script>
<script src="{{asset('assets/js/vendor/aos.js')}}"></script>
<script src="{{asset('assets/js/vendor/particles.js')}}"></script>
<script src="{{asset('assets/js/vendor/jquery-one-page-nav.js')}}"></script>
<script>
    const currentYear = new Date().getFullYear();
    document.getElementById('year').innerHTML = currentYear.toString();
</script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const body = document.body;
        const themeSwitch = document.getElementById('themeSwitch');

        // Проверяем, сохранён ли ранее выбранный темный режим в localStorage и устанавливаем его
        const storedTheme = localStorage.getItem('white-version');
        if (storedTheme === 'true') {
            body.classList.add('white-version');
            themeSwitch.checked = true;
        } else if (storedTheme === 'false') {
            body.classList.remove('white-version');
            themeSwitch.checked = false;
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            // Системное предпочтение установлено на светлую тему и нет сохранённого выбора
            body.classList.add('white-version');
            themeSwitch.checked = true;
            localStorage.setItem('white-version', 'true');
        }

        // Обработчик события изменения переключателя
        themeSwitch.addEventListener('change', function () {
            if (this.checked) {
                body.classList.add('white-version');
                localStorage.setItem('white-version', 'true');
            } else {
                body.classList.remove('white-version');
                localStorage.setItem('white-version', 'false');
            }
        });
    });
</script>
<!-- main JS -->
<script src="{{asset('assets/js/main.js')}}"></script>
</body>
</html>
