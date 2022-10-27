import Model from '../model'

export default class {
  constructor(){

    this.objects ={
      body  : $('body'),
      header : $('.l-header'),
      pcMenuBtn : $('.js-pc-menu-opner'),
      spMenuBtn : $('.js-sp-menu-opner'),
      spMenu : $('.p-navigation-sp'),
      pcMenu : $('.js-header-menu'),
      spMenuMp : $('.p-navigation-sp__block'),
      localnav: $('.p-local-navigation')
    }

    this.scroll = {
      current  : 0,
      past    : 0,
      initialloc: 0,
      currentloc: 0
      //header : $('.l-header')
    }

    this.config = {
      offset: $('.l-header__inner').height(),
      // offset: 60,
    }
    if ( !this.objects.header.hasClass('l-header--simple') ){
      this.init();
      this.bindEvents();
    }
  }

  init(){
    this.objects.body.css('padding-top',this.config.offset+'px')
    this.objects.header.css('position','absolute');
    if ( this.objects.localnav.length > 0 ) {
      this.scroll.initialloc =  $('.p-local-navigation').offset().top;
      this.scroll.currentloc = $('.p-local-navigation').offset().top + $('.p-local-navigation').height();
      $('.l-contents-navigation').css('padding-top',this.objects.localnav.height()+'px');
      this.objects.localnav.removeClass('is-scroll').css('position','absolute');
    }
  }
  scrollheader(scroll){
    var past    = scroll.current
    var current = $(window).scrollTop();
    var currentloc = 0;

    $("body").css('padding-top',$('.l-header__inner').height()+'px')

    if ( current >= past ) {
      this.objects.body.removeClass('is-scroll-up');
      this.objects.body.addClass('is-scroll-down');
      if ( this.objects.localnav.length > 0 ) {
        currentloc = scroll.initialloc + $('.p-local-navigation').height();
      }
    } else {
      this.objects.body.addClass('is-scroll-up');
      this.objects.body.removeClass('is-scroll-down');
      if ( this.objects.localnav.length > 0 ) {
        currentloc = scroll.initialloc - $('.l-header__inner').height();
      }
    }

    if ( current > this.config.offset ){
      this.objects.header.addClass('is-scroll').css('position','fixed');
    } else {
      this.objects.header.removeClass('is-scroll').css('position','absolute');
    }

    // console.log(this.objects.localnav);
    if ( this.objects.localnav.length > 0 ) {
      if ( current > currentloc ){
        this.objects.localnav.addClass('is-scroll').css('position','fixed');
        this.objects.localnav.addClass('is-scroll').css('top',this.objects.localnav.height()+'px');
      } else {
        this.objects.localnav.removeClass('is-scroll').css('position','absolute');
        this.objects.localnav.removeClass('is-scroll').css('top','0px');
      }
    }


    var ret = {
      current : current ,
      past : past
    }
    return ret;
  }

  mpSilderSwitcher(mql,tg){
    // this.config.offset = $('.l-header__inner').height();
    $("body").css('padding-top',$('.l-header__inner').height()+'px')
    // console.log(tg);
    // if ( tg.localnav.length > 0 ) {

    // }
  }

  bindEvents(){

    this.objects.pcMenuBtn.on('click', (e)=>{
      if ( !Model.info.isSP) {
        if ( this.objects.pcMenuBtn.hasClass('is-active') ){
          this.objects.pcMenuBtn.removeClass('is-active');
          this.objects.body.removeClass('is-menu-open');
        } else {
          this.objects.pcMenuBtn.addClass('is-active');
          this.objects.body.addClass('is-menu-open');
        }
      }
    })

    this.objects.spMenuBtn.on('click', (e)=>{
      if ( Model.info.isSP) {
        if ( this.objects.spMenuBtn.hasClass('is-active') ){
          this.objects.spMenuBtn.removeClass('is-active');
          this.objects.spMenu.removeClass('is-active');
          this.objects.body.removeClass('is-menu-open');
          $(window).scrollTop(this.scrollPos);
        } else {
          this.scrollPos = $(window).scrollTop();
          this.objects.spMenuBtn.addClass('is-active');
          this.objects.spMenu.addClass('is-active');
          this.objects.body.addClass('is-menu-open');
        }
        return false;
      }
    })

    this.objects.pcMenu.find('.p-header-menu__item').each(function(e){
      var head = $(this).find('.p-header-menu__heading');
      var menu = $(this).find('.p-header-menu__lower');
      head.on('click',function(f){
        f.preventDefault()
        if ( $(this).hasClass('is-active') ){
          head.removeClass('is-active');
          menu.removeClass('is-active');
        }else{
          $('.p-header-menu__heading').removeClass('is-active');
          $('.p-header-menu__lower').removeClass('is-active');
          head.addClass('is-active');
          menu.addClass('is-active');
        }
        return false;
      })

    })
    this.objects.spMenuMp.each(function(e){
      var head = $(this).find('.p-navigation-sp__heading');
      var menu = $(this).find('.p-navigation-sp__top');

      head.on('click',function(f){
        f.preventDefault()
        if ( $(this).hasClass('is-active') ){
          $('.p-navigation-sp__heading').removeClass('is-active');
          $('.p-navigation-sp__top').removeClass('is-active');
          head.removeClass('is-active');
          menu.removeClass('is-active');
        }else{
          $('.p-navigation-sp__heading').removeClass('is-active');
          $('.p-navigation-sp__top').removeClass('is-active');
          head.addClass('is-active');
          menu.addClass('is-active');
        }
        return false;
      })
    });

    window.addEventListener( "scroll",  (e)=>{
      var ret = this.scrollheader(this.scroll);
      this.scroll.current = ret.current
      this.scroll.past = ret.past
    })

    var mql = window.matchMedia('screen and (min-width: 768px)');
    mql.addListener(this.mpSilderSwitcher);
    // console.log(this.objects);
    this.mpSilderSwitcher(mql,this.objects);

  }
}
