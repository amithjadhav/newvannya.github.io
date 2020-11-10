$(document).ready(function() {
"use strict";

//--------------------------------------------------------------------------------------------------------------------------------- 
//Form Lable Animation

	$(".matInput").focus(function(){
		$(this).parent().addClass("isActive isCompleted");
	});
		 
	$(".matInput").focusout(function(){
		if($(this).val() === ""){
		$(this).parent().removeClass("isCompleted");
		$(this).parent().removeClass("isActive");
			}
	});
	

//--------------------------------------------------------------------------------------------------------------------------------- 
//Forget Password	

	$('.for-pass').on('click', function() {
		$('.landing-form').fadeOut(function() {
			$('.forgot-form').fadeIn();
        });
    });	
	
	$('.forget-back').on('click', function() {
		$('.forgot-form').fadeOut(function() {
			$('.landing-form').fadeIn();
		});
    });
	
		
//--------------------------------------------------------------------------------------------------------------------------------- 
//Forgot Password Email & Mobile Options
	
	$(".subm").click(function(){
		var radioValue = $("input[name='gender']:checked").val();
		if(radioValue === "Email"){
			$('.reset-ext').fadeOut(function() {
				$('.email_box').fadeIn();
			});
        }
		else{
			$('.reset-ext').fadeOut(function() {
				$('.mobile_box').fadeIn();
			});
         }
	});
	
	$('#back-forg-pass').on('click', function() {
		$('.email_box').fadeOut(function() {
			$('.reset-ext').fadeIn(1000);
		});
	});
	
	$('#back-forg-pass-mobile').on('click', function() {
		$('.mobile_box').fadeOut(function(){
			$('.reset-ext').fadeIn(1000);
		});
	});	
		
			
//--------------------------------------------------------------------------------------------------------------------------------- 
//Registration Form		

	$('.reg-here').on('click', function() {
		$('.landing-form').fadeOut(function() {
			$('.signup').fadeIn();
            //$('.verif_msg').fadeIn();
        });
    });	
	
	$('.regi-back').on('click', function() {
		$('.signup').fadeOut(function() {
			$('.landing-form').fadeIn();
        });
    });	
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Account Registered Message	

	$('#accountSuccessful').on('click', function() {
		$('.accountVeri').fadeOut(function() {
			$('.accountSuccessful').fadeIn();
		});
    });	
	

//--------------------------------------------------------------------------------------------------------------------------------- 
//model popup

	$(function(){
		var appendthis =  ("<div class='modalOverlay js-modal-close'></div>");
		$('input[data-modal-id]').click(function(e) {
			e.preventDefault();
			$("body").append(appendthis);
			$(".modalOverlay").fadeTo(500, 0.7);
    		//$(".js-modalbox").fadeIn(500);
			var modalBox = $(this).attr('data-modal-id');
			$('#'+modalBox).fadeIn($(this).data());
		});
		
		$(".js-modal-close, .modalOverlay").click(function() {
			$(".modal, .modalOverlay").fadeOut(500, function() {
				$(".modalOverlay").remove();
			});
		});
	});
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Reset Password	

	$('#resetPass').on('click', function() {
		$('.forgot-form').fadeOut(function() {
			$('.resetPass').fadeIn();
        });
    });	
	
	$('#reset-pass').on('click', function() {
		$('.forgot-form').fadeOut(function() {
			$('.resetPass').fadeIn();
        });
    });
	
		
//--------------------------------------------------------------------------------------------------------------------------------- 
//Login Page to Index Page Redirect

	$("#login").click(function(){
        $(".landingLogo").animate({"opacity" : "0", "padding" : "0"}, 500);
		$(".formAll").fadeOut(700);
		setTimeout("location.href = 'index.html'", 1000);
    });	
	
	$(".inner-left").addClass("inner-left-loading");
	$(".inner-right").addClass("inner-right-loading");
	
	$(".inner-content .logo").delay(1000).animate({"opacity": "1"}, 1000);
	$(".nav-bar").delay(1000).animate({"opacity": "1"}, 1000);
	
		
//--------------------------------------------------------------------------------------------------------------------------------- 
//Tab Pages
	
	$('.inner-left').load(function(){
		$(this).removeClass("inner-left-close");
		});
		
	$('.inner-right').load(function(){
		$(this).removeClass("inner-right-close");
		});	

	$('.nav-bar ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('.nav-bar ul.tabs li').removeClass('current');
		$('#details').animate({"opacity":"0"}, 50).removeClass('feature-open');	
		$('#feature').animate({"opacity":"0"}, 50).removeClass('feature-open');
		$('#mainpage').fadeIn();
		$("#membershipPlan").animate({"opacity":"0"}, 100).removeClass("feature-open");
		$('#lifeList').animate({"opacity":"0"}, 100).removeClass('feature-open');
		$('#prefe').animate({"opacity":"0"}, 100).removeClass('feature-open');
		$('#trandingUser').animate({"opacity":"0"}, 100).removeClass('feature-open');
		$('#search').delay(0).fadeOut();	
		$('#vocal').delay(0).fadeOut();
		$(".sectionMain").delay(5000).removeClass( "blurSec");
		$(".whiteWrap").delay(5000).removeClass( "blurSec" );
		$('.right-search').css({"display": "block"});
		$('#search-close').css({"display": "none"});
		$('#profile').delay(0).fadeOut();
		$('.right-setting').css({"display": "block"});
		$('#profile-close').css({"display": "none"});	
		$(".sectionMain").delay(5000).removeClass( "blurSec");	
		$(".whiteWrap").delay(5000).removeClass( "blurSec");
		$.jPlayer.pause(); 
		$(".inner-left").addClass("inner-left-close").delay(1000).queue(function(next){
			$(this).removeClass("inner-left-close");
			next();
			});
			
		$(".inner-right").addClass("inner-right-close").delay(1000).queue(function(next){
			$(this).removeClass("inner-right-close");
			$("#mainpage").fadeIn();
			next();
			});	
				
		$('.tab-content').removeClass('current').stop().animate({"opacity" : "0"}, 500);
		$(this).addClass('current').stop();
		$("#"+tab_id).addClass('current' ).stop().animate({"opacity" : "1"}, 500);
	});
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Right Side main Nagivation

	var action = 1;
	$('.right-nav').on("click", viewMenu);
	function viewMenu(){
		if( action === 1){
			$('.inner-right').addClass( "inner-left-close" );
			$('.right-nav').addClass( "change" );
			$('.main-nav').slideDown();
			$('.innerMiddleOpacity').css('display', 'block');
			$('.innerMiddle').addClass( "blurSec" );
			action = 2;
		} else{
			$('.inner-right').removeClass( "inner-left-close" );
			$('.right-nav').removeClass( "change" );
			$('.main-nav').slideUp();
			$('.innerMiddleOpacity').css('display', 'none');
			$('.innerMiddle').removeClass( "blurSec" );
			action = 1;
			}
		}


	//$('.right-nav').on('click', function(){
//		$('.menu-area').fadeIn(function(){
//			$('.navi').show().animate({'right':'0px', 'opacity': '1'});
//		});
//	});
//	
//	$('.user_logout').on('click', function(){
//		$('.navi').animate({'right':'-300px', 'opacity': '1'});
//		$('.menu-area').fadeOut();
//	});
//	
//	$('.close_profile').on('click', function(){
//		$('.navi').animate({'right':'-300px', 'opacity': '1'});
//		$('.menu-area').fadeOut();
//	});	
		
		
//--------------------------------------------------------------------------------------------------------------------------------- 
//Right Side Accordian Menu

	var nav = function () {
        $('.gw-nav > li > a').click(function () {
            var gw_nav = $('.gw-nav');
            gw_nav.find('li').removeClass('active');
            $('.gw-nav > li > ul > li').removeClass('active');

            var checkElement = $(this).parent();
            var ulDom = checkElement.find('.gw-submenu')[0];

            if (ulDom === undefined) {
                checkElement.addClass('active');
                $('.gw-nav').find('li').find('ul:visible').slideUp();
                return;
            }
            if (ulDom.style.display !== 'block') {
                gw_nav.find('li').find('ul:visible').slideUp();
                gw_nav.find('li.init-arrow-up').removeClass('init-arrow-up').addClass('arrow-down');
                gw_nav.find('li.arrow-up').removeClass('arrow-up').addClass('arrow-down');
                checkElement.removeClass('init-arrow-down');
                checkElement.removeClass('arrow-down');
                checkElement.addClass('arrow-up');
                checkElement.addClass('active');
                checkElement.find('ul').slideDown(300);
            } else {
                checkElement.removeClass('init-arrow-up');
                checkElement.removeClass('arrow-up');
                checkElement.removeClass('active');
                checkElement.addClass('arrow-down');
                checkElement.find('ul').slideUp(300);

            }
        });
		
        $('.gw-nav > li > ul > li > a').click(function () {
            $(this).parent().parent().parent().removeClass('active');
            $('.gw-nav > li > ul > li').removeClass('active');
            $(this).parent().addClass('active');
        });
    };
    nav();
	
	$('.innerMiddleOpacity').on('click', function(){	
		//$(".inner-right").animate({"width" : "200px",});
		//$('.main-nav').slideUp();
		//$('.right-nav').removeClass( "change" );
		//$('.innerMiddleOpacity').fadeOut();
		//$('.inner-right').removeClass( "inner-left-close" );
		//$('.right-nav').removeClass( "change" );		
		//$('.innerMiddle').removeClass( "blurSec" );
		
		$('.inner-right').removeClass( "inner-left-close" );
		$('.right-nav').removeClass( "change" );
		$('.main-nav').slideUp();
		$('.innerMiddleOpacity').css('display', 'none');
		$('.innerMiddle').removeClass( "blurSec" );
	});	
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Main Image Discription

	$(".sectionMainDetails").stop().delay(500).animate({"opacity" : "0", "left" : "-200px"}, 500);
	$("#main-page-image").hover(function(){
		$(".sectionMainDetails").stop().animate({"opacity" : "1", "left" : "0"}, 500);
	}, function(){
		$(".sectionMainDetails").stop().animate({"opacity" : "0", "left" : "-200px"}, 500);
	});
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Previous Feature Content	

	$(".previousFeatureBtn").click(function(){
		$('#mainpage').fadeOut();
		$('#feature').animate({"opacity":"1"}, 100).addClass('feature-open');	
		});
		
	$("#feature-page").click(function(){
		$('#feature').animate({"opacity":"0"}, 50).removeClass('feature-open');
		$('#mainpage').fadeIn();
		});		
		

//--------------------------------------------------------------------------------------------------------------------------------- 
//Full Details Model Popup	

	$('#view-details, #view-de1, #view-de2, #view-de3, #view-de4, #view-de5, #view-de6, #view-de7, #view-de8, #view-de9, #view-de10, #view-de11, #view-de12, #view-de13, #view-de14, #view-de15, #view-de16, #view-de17, #view-de18, #view-de19, #view-de20, #view-de21, #view-de22, .sectionMainDetails, #main-page-image').on('click', function() {
		$('#details').addClass('feature-open');
		$("#mainpage").fadeOut();
		//Bird Dtails Context menu
		$('.fade_icon').removeClass('off').addClass('on').delay(2500).fadeOut();
		$('.cmTrigger').stop().delay(3000).queue(function(){
			$(this).css('pointer-events', 'auto');		
		});
		$('#detailtxtarea').addClass('menubgnone');		
	});	
	
	$('.detailClose').on('click', function() {
		$('#details').animate({"opacity":"0"}, 50).removeClass('feature-open');	
		$("#mainpage").fadeIn();
		$('.fade_icon').addClass('off').removeClass('on').fadeIn();
		$('.details .whiteWrapContent').animate({"scrollTop" : 0}, function(){
			$('.slimScrollBar').animate({top: 0});	
		});
		$.jPlayer.pause();
    });
		
	
//	$('.cmTrigger, .menubg').click(function(){
//		$('#detailtxtarea').toggleClass('menubgnone');
//		if($('#detailtxtarea').hasClass('menubgnone')){
//			$('.conMenu').slideToggle('100');	
//			$('.contWrapper').delay(5000).removeClass('contActive');
//			$('.conMenu ul > li > span').animate({"left":"-300px", "opacity":"0"});
//			$('#detailtxtarea').removeClass('menubg');
//			$('#detailtxtarea').addClass('menubgnone');			
//		}else{
//			$('.contWrapper').addClass('contActive');
//			$('.conMenu').slideToggle('fast');
//			$('.conMenu ul > li > span').animate({"left":"-308px", "opacity":"1"});
//			$('#detailtxtarea').addClass('menubg');
//			$('#detailtxtarea').removeClass('menubgnone');
//		}			
//	});
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Ref.size Model	
	
	$('.refSize').on('click', function() {
		$('.refSizeDetails').slideDown('fast');
		$('#detailtxtarea').removeClass('menubgnone');
	});
	
	$('.refClose').on('click', function() {
		$('.refSizeDetails').slideUp('fast');
		$('#detailtxtarea').addClass('menubgnone');
	});
	
	$('.menubg').on('click', function() {
		$('.refSizeDetails').slideUp('fast');
		$('#detailtxtarea').addClass('menubgnone');
	});
	
//	$('.ref_size a').on('click', function() { 
//		$('#refSize').fadeIn();
//		$('.view-detail-cont').addClass( "blurSec" );
//		$('.innerMiddle').addClass( "blurSec" );
//    });
	
//	$('#refSize .close').on('click', function() {
//		$('#refSize').fadeOut();
//		$('.innerMiddle').removeClass( "blurSec" );
//		$('.view-detail-cont').removeClass( "blurSec" );
//    });
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Habitat Model		

	$('.habitat').on('click', function() { 
		$('#habitat').fadeIn();
		$('.view-detail-cont').addClass( "blurSec" );
		$('.innerMiddle').addClass( "blurSec" );
    });
	
	$('#habitat .close').on('click', function() {
		$('#habitat').fadeOut();
		$('.innerMiddle').removeClass( "blurSec" );
		$('.view-detail-cont').removeClass( "blurSec" );
    });
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Distribution Map	

	$('#dist_map_lg').on('click', function(){
		$(this).maplightGallery({
			loop:false,
			hideControlOnEnd: true,
			slideEndAnimatoin: false,
			thumbnail: true,
			dynamic: true,
			dynamicEl: [{
				"src": '../resources/images/map.jpg',
				'thumb': '../resources/images/map.jpg'
			}, {
				'src': '../resources/images/map.jpg',
				'thumb': '../resources/images/map.jpg'
			}, {
				'src': '../resources/images/map.jpg',
				'thumb': '../resources/images/map.jpg'
			}]
		});
	});	
	
		
//--------------------------------------------------------------------------------------------------------------------------------- 
//Full Details Model Accordian

	$("#accordion div").first().css('display', 'block');
	var link = $(".trigger");
	link.on('click', function(e) {
		e.preventDefault();
		var a = $(this).attr("href");
		$(a).slideDown('fast');
		 $("#accordion div").not(a).slideUp('fast');
	});
	
		
//--------------------------------------------------------------------------------------------------------------------------------- 
//Sub Species Bird Toggle

	$('#subSpecToggle').on('click', function() {
		$('.subSpecList').slideToggle();
		$('#subSpecToggle').toggleClass('subSpecImgActive');
    });
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Full Details Read More

	$('#moreQuick').on('click', function() {
		$('#moreDetailsQuick').fadeIn();
		$('.more-details').animate({'opacity':'1', 'top':'10px', 'max-height':'410px'});
	});
		
	$('#moreDetailsQuick .close').on('click', function(){
		$('.more-details').animate({'opacity':'0', 'top':'50%', 'max-height':'1'});
		$('#moreDetailsQuick').fadeOut();
	});
	
	$('#moreDetails').on('click', function(){
		$('#moreDetailsList').fadeIn();
		$('.more-details').animate({'opacity':'1', 'top':'10px', 'max-height':'410px'});
	});
	
	$('#moreDetailsList .close').on('click', function(){
		$('.more-details').animate({'opacity':'0', 'top':'50%', 'max-height':'1'});
		$('#moreDetailsList').fadeOut();
	});
		
		
//--------------------------------------------------------------------------------------------------------------------------------- 
//Search

	$('.right-search').on('click', function() {
		$('#search').delay(0).fadeIn();
		$('.right-search').css({"display": "none"});
		$('#search-close').css({"display": "block"});	
		$(".sectionMain").delay(5000).addClass( "blurSec" );
		$(".whiteWrap").delay(5000).addClass( "blurSec" );
		$('.nav-bar ul.tabs li').removeClass('current');	
    });
		
	$('#search-close').on('click', function() {
		$('#search').delay(0).fadeOut();
		$('.right-search').css({"display": "block"});
		$('#search-close').css({"display": "none"});
		$(".sectionMain").delay(5000).removeClass( "blurSec");	
		$(".whiteWrap").delay(5000).removeClass( "blurSec");		
    });
	
		
//--------------------------------------------------------------------------------------------------------------------------------- 
//Setting Option
	
	$('.right-setting').on('click', function() {
		$('#profile').delay(0).fadeIn();
		$('.right-setting').css({"display": "none"});
		$('#profile-close').css({"display": "block"});	
		$(".sectionMain").delay(5000).addClass( "blurSec" );
		$(".whiteWrap").delay(5000).addClass( "blurSec" );
		$('.nav-bar ul.tabs li').removeClass('current');
    });
	
	$('#profile-close').on('click', function() {
		$('#profile').delay(0).fadeOut();
		$('.right-setting').css({"display": "block"});
		$('#profile-close').css({"display": "none"});	
		$(".sectionMain").delay(5000).removeClass( "blurSec");	
		$(".whiteWrap").delay(5000).removeClass( "blurSec");
   });
   
   $('.admin-edit').on('click', function() {
	   $('.navi').animate({'right':'-300px', 'opacity': '1'});
	   $('.menu-area').fadeOut();
	   $('#profile').delay(0).fadeIn();
		$('.right-setting').css({"display": "none"});
		$('#profile-close').css({"display": "block"});	
		$(".sectionMain").delay(5000).addClass( "blurSec" );
		$(".whiteWrap").delay(5000).addClass( "blurSec" );
	});
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Edit Profile

	$('#editp').on('click', function() {
		$('.profile-detail').fadeOut(function() {
			$('.profile-edit').fadeIn();
        });
    });
	
	$('#editp-back').on('click', function() {
		$('.profile-edit').fadeOut(function() {
			$('.profile-detail').fadeIn();
        });
    });
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Verify Email	

	$('.verfiy-email').on('click', function() {
		$('#edit-verify-email').fadeIn();
    });
	
	$('#verfy-cancel').on('click', function() {
		$('#edit-verify-email').fadeOut();        
    });
	
	$('.toastMsgBtn').on('click', function() {
		$('#toastMessage').stop().fadeIn(400).delay(4000).fadeOut(400);
		});
		
		
//--------------------------------------------------------------------------------------------------------------------------------- 
//Change Password	

	$('#change-pass').on('click', function() {
		$('.innerMiddle').removeClass( "blurSec");
		$('.right-nav').removeClass( "change" );
		$('.inner-right').removeClass( "inner-left-close" );
		$('#change-passWrapper').fadeIn();
		$('.main-nav').slideUp();
		$('.innerMiddleOpacity').fadeOut('5000');	
    });
	
	$('#cancel-change-password').on('click', function() {
		$('#change-passWrapper').fadeOut();
		$('.innerMiddle').removeClass( "blurSec" );        
		$('.innerMiddleOpacity').fadeOut();
    });
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Preferences

	$('#pref-tab').on('click', function() {
		$('.innerMiddle').removeClass( "blurSec");
		$('.right-nav').removeClass( "change" );
		$('.inner-right').removeClass( "inner-left-close" );
		$('#pref').fadeIn(function(){
			$('.taxonomy').css({"height": "auto"}).parent().css({"height": "auto"});
		});
		$('.main-nav').slideUp();
		$('.innerMiddleOpacity').fadeOut('5000');		
    });
	
	$('#cancel-pref').on('click', function() {
		$('#pref').fadeOut();
		$('.innerMiddle').removeClass( "blurSec" );
		$('.innerMiddleOpacity').fadeOut();
    });
	
	
	
		
//	$('#pref-tab').on('click', function(){
//		$('.inner-right').removeClass( "inner-left-close" );
//		$('.right-nav').removeClass( "change" );
//		$('.main-nav').slideUp();
//		$('.innerMiddleOpacity').css('display', 'none');
//		$('.innerMiddle').removeClass( "blurSec" );
//		$('#trandingUser').animate({"opacity":"0"}, 50).removeClass('feature-open');
//		$('#prefe').animate({"opacity":"1"}, 100).addClass('feature-open');	
//		$('#details').animate({"opacity":"0"}, 50).removeClass('feature-open');	
//	});
//	
//	$('.prefClose').on('click', function() {
//		$('#prefe').animate({"opacity":"0"}, 50).removeClass('feature-open');	
//		$("#mainpage").fadeIn();
//    });
		
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Make a Note	

	$('.makeNote').on('click', function() {
		$('#make_note').fadeIn();
		$('.view-detail-cont').addClass( "blurSec" );
		$('.innerMiddle').addClass( "blurSec" ); 
    });
	
	$('.cancel-note').on('click', function() {
		$('#make_note').fadeOut();
		$('.innerMiddle').removeClass( "blurSec" );
		$('.view-detail-cont').removeClass( "blurSec" );
	});
		
		
//--------------------------------------------------------------------------------------------------------------------------------- 
//Like Model

	$('.likeComment .likeBtn').on('click', function() {
		$('#like').fadeIn();
		$('.view-detail-cont').addClass( "blurSec" );
		$('.innerMiddle').addClass( "blurSec" );
    });
	
	$('#like .close').on('click', function() {
		$('#like').fadeOut();
		$('.innerMiddle').removeClass( "blurSec" );
		$('.view-detail-cont').removeClass( "blurSec" );
    });
	

//--------------------------------------------------------------------------------------------------------------------------------- 
//Like Bouncing animation

	$('.commentBtn').click(function() {
		$(this).toggleClass('activated');
    });
	
	$('.likeCommentBtn').click(function() {
		$(this).toggleClass(function(){
			return $(this).is('.activated, .deactivated') ? 'activated deactivated' : 'activated';
		});
    });
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Sub Species Model

	$('.SubSpeciesBtn').on('click', function() {
		$('#SubSpecies').fadeIn();
		$('.view-detail-cont').addClass( "blurSec" );
		$('.innerMiddle').addClass( "blurSec" );
    });
	
	$('#SubSpecies .close').on('click', function() {
		$('#SubSpecies').fadeOut();
		$('.innerMiddle').removeClass( "blurSec" );
		$('.view-detail-cont').removeClass( "blurSec" );
    });	
	

//--------------------------------------------------------------------------------------------------------------------------------- 
//Comment Model

	$('.likeComment .commentBtn, .commentBtn .comment_btn').on('click', function() {
		$('#comment').fadeIn();
		$('.view-detail-cont').addClass( "blurSec" );
		$('.innerMiddle').addClass( "blurSec" );
    });
	
	$('#comment .close').on('click', function() {
		$('#comment').fadeOut();
		$('.innerMiddle').removeClass( "blurSec" );
		$('.view-detail-cont').removeClass( "blurSec" );
    });
	
	$('.edit_cmnt').on('click', function(){
		$('.commet-textare').slideToggle('slow');
		});
	
	$('.commet-textare textarea').on('focus', function(){
		$('.commet-textare-button').removeAttr("disabled");
	});	

	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Hot Spot
	
	$(document).on("click", ".hotspot_main .close, .lg-close", function(){
		$('.hotspot_main').animate({'right': '-30%'}, function(){
			$('.lg-outer').animate({'width': '100%'});
		}).fadeOut();
	});	
		
	$('.subscribeWrap .close').on('click', function(){
		$('.subscribeWrap').slideToggle('down');
		$('.subscribeMainWrap').fadeOut();
	});
  
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Light Gallery Close

	$(document).on("click", ".cd-single-point, .lg-list", function(){
		$('.lg-outer').animate({'width': '70%'}, function(){
			$('.hotspot_main').fadeIn().animate({'right': '0'});
		});
	});
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//marquee js 

  $('.bn-marquee').click(function(){
      if($('.bn-marquee')[0].innerHTML.length >= 30) {
          $('.bn-marquee').toggleClass("birdnm-marquee");
          if ($('.bn-marquee').hasClass("birdnm-marquee") &&  $('.sn-marquee').hasClass("birdsn-marquee") ){
              $('.sn-marquee').addClass("text-ellipsis");
              $('.sn-marquee').unwrap("<marquee behavior='alternate' scrollamount='3'></marquee>");
              $('.sn-marquee').removeClass("birdsn-marquee");
          } 
  
          if ($('.bn-marquee').hasClass("birdnm-marquee")){
              $('.bn-marquee').removeClass("text-ellipsis");
              $('.bn-marquee').wrap("<marquee behavior='alternate' scrollamount='3'></marquee>");		
          } 
          else {
              $('.bn-marquee').addClass("text-ellipsis");
              $('.bn-marquee').unwrap("<marquee behavior='alternate' scrollamount='3'></marquee>");
          }
      }
  
  });	
  
  
  $('.sn-marquee').click(function(){
      if($('.sn-marquee')[0].innerHTML.length >= 30) {
              $('.sn-marquee').toggleClass("birdsn-marquee");	
              if ($('.sn-marquee').hasClass("birdsn-marquee") &&  $('.bn-marquee').hasClass("birdnm-marquee") ){
                  $('.bn-marquee').addClass("text-ellipsis");
                  $('.bn-marquee').unwrap("<marquee behavior='alternate' scrollamount='3'></marquee>");
                  $('.bn-marquee').removeClass("birdnm-marquee");
              } 
              if ($('.sn-marquee').hasClass("birdsn-marquee")){
                  $('.sn-marquee').removeClass("text-ellipsis");
                  $('.sn-marquee').wrap("<marquee behavior='alternate' scrollamount='3'></marquee>");		
              } 
              else {
                  $('.sn-marquee').addClass("text-ellipsis");
                  $('.sn-marquee').unwrap("<marquee behavior='alternate' scrollamount='3'></marquee>");
              }
          }
  });


//--------------------------------------------------------------------------------------------------------------------------------- 
//Details Tab

	$("#details .whiteWrapInner .tab_cont").hide();
      $("#details .whiteWrapInner ul.tab li:first").addClass("active").show();
      $("#details .whiteWrapInner .tab_cont:first").show();      
      $("ul.tab li").click(function() {
          $("ul.tab li").removeClass("active");
          $(this).addClass("active");
          $(".tab_cont").hide();
          var activeTab = $(this).find("a").attr("href");
          $(activeTab).fadeIn();
		  $.jPlayer.pause();
          return false;		  
      });
	
	var subAction = 1;
	$('.sub_spc_info_logo').on("click", subSpcPri);
	function subSpcPri(){
		if( subAction === 1){
			$('.subSpece').fadeIn(function(){
				$('.rect').addClass('active');
				$('.background').toggleClass('active');
			});
			$(this).addClass('sparrowActive');
			subAction = 2;
		} else{
		//$('.rect').toggleClass('active');
			$('.background').toggleClass('active');
			$(this).removeClass('sparrowActive');
			$('.subSpece').fadeOut(function(){
				$('.rect').removeClass('active');
			});
			subAction = 1;
		}
	}
	
	
	
	var positionScrollTop = $('.details .whiteWrapContent .slideAction').offset().top;
	$('.details .whiteWrapContent').scroll(function() {
		var newPositionTop = $('.details .whiteWrapContent').scrollTop();
		if (newPositionTop > positionScrollTop) {
			if ($('.details .whiteWrapContent .slideAction').offset().top + 65 <= $(this).offset().top) {
				$('.details .whiteWrapContent .fixedtab').addClass('fixed');
				$('#details .whiteWrapInner .tab_container').css("margin-top","50px");
			}

		} else {
			if ($('.details .whiteWrapContent .slideAction').offset().top > $('.details .whiteWrapContent .fixedtab').offset().top - 50) {
				$('.details .whiteWrapContent .fixedtab').removeClass('fixed');
				$('#details .whiteWrapInner .tab_container').css("margin-top","0px");
			}
		}
		positionScrollTop = newPositionTop;
	});



		
//--------------------------------------------------------------------------------------------------------------------------------- 
//membership  plan	

	$(".continueMembership").click(function(){
		$('#expiredMembership').fadeOut();
		$('.view-detail-cont').removeClass( "blurSec" );
		$('.innerMiddle').removeClass( "blurSec" );
		$("#membershipPlan").animate({"opacity":"1"}, 100).addClass("feature-open");	
		$('.nav-bar ul.tabs li').removeClass('current');		
	});	
		
	$("#memberClose").click(function(){
		$("#membershipPlan").animate({"opacity":"0"}, 100).removeClass("feature-open");
		//$('.nav-bar ul.tabs li').addClass('current');
	});
	
	 setTimeout(function(){
		$('#expiredMembership').fadeIn();
		$('.view-detail-cont').addClass( "blurSec" );
		$('.innerMiddle').addClass( "blurSec" );
    }, 1000);
	
	$('#expiredMembership .close, .cancelMembership').on('click', function() {
		$('#expiredMembership').fadeOut();
		$('.innerMiddle').removeClass( "blurSec" );
		$('.view-detail-cont').removeClass( "blurSec" );
    });
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//payment summery

	$('#buyNow').on('click', function() {
		$("#payment-summary").css("display","block");
		$("#payment-summary").animate({
			"top": "0",
			"opacity": "1"			
		});
		$('.nav-bar ul.tabs li').removeClass('current');		
	});	

	$('#paymentSumClose').on('click', function() {
		$("#payment-summary").animate({"top": "20%","opacity": "0"},function(){
			$("#payment-summary").css("display","none");
		});		
	});
	
	
	$('#orderPopup').on('click', function() {
		$("#payment").css("display","block");
		$("#payment").animate({
			"top": "0",
			"opacity": "1"
		});
	});
	
	
	$('#paymentClose').on('click', function() {
		$("#payment").animate({"top": "20%","opacity": "0"},function(){
			$("#payment").css("display","none");
		});		
	});


//--------------------------------------------------------------------------------------------------------------------------------- 
// membership tab functionality

	$(".tabTitle ").click(function() {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        var tab = $(this).attr("data");
        $(".planScroll").not(tab).css("display", "none");
		$('.nav-bar ul.tabs li').removeClass('current');
		$(tab).fadeIn();
    });
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
// Life List
	
	$('#btnLifeList').on('click', function(){
		$('.inner-right').removeClass( "inner-left-close" );
		$('.right-nav').removeClass( "change" );
		$('.main-nav').slideUp();
		$('.innerMiddleOpacity').css('display', 'none');
		$('.innerMiddle').removeClass( "blurSec" );
		$('#trandingUser').animate({"opacity":"0"}, 50).removeClass('feature-open');
		$('#lifeList').animate({"opacity":"1"}, 100).addClass('feature-open');	
		$('#details').animate({"opacity":"0"}, 50).removeClass('feature-open');	
	});
	
	$('.lifeListClose').on('click', function() {
		$('#lifeList').animate({"opacity":"0"}, 50).removeClass('feature-open');	
		$("#mainpage").fadeIn();
    });
	
	
	$('#btnTrdUse').on('click', function(){
		$('.inner-right').removeClass( "inner-left-close" );
		$('.right-nav').removeClass( "change" );
		$('.main-nav').slideUp();
		$('.innerMiddleOpacity').css('display', 'none');
		$('.innerMiddle').removeClass( "blurSec" );
		$('#lifeList').animate({"opacity":"0"}, 50).removeClass('feature-open');
		$('#trandingUser').animate({"opacity":"1"}, 100).addClass('feature-open');
		$('#details').animate({"opacity":"0"}, 50).removeClass('feature-open');		
	});
	
	$('.trdClose').on('click', function() {
		$('#trandingUser').animate({"opacity":"0"}, 50).removeClass('feature-open');	
		$("#mainpage").fadeIn();
    });
	

//---------------------------------------------------------------------------------------------------------------------------------				
//saved card

	$('#saved-card').on('click', function() {
		$('#saved-cardWrap').fadeIn();  
		$('.inner-right').removeClass( "inner-left-close" );
		$('.right-nav').removeClass( "change" );
		$('.main-nav').slideUp();   
    });
	
	$('#cancel-save').on('click', function() {
		$('#saved-cardWrap').fadeOut();
		$('.innerMiddle').removeClass( "blurSec" );
		$('.innerMiddleOpacity').fadeOut();
    });	
	
	$('#addNewCard').on('click', function() {
		$('.savedCardWrap').fadeOut(function(){
			$('.addNewCard').fadeIn();	
		});        
    });
	
	$('#cancel-saveCard').on('click', function() {
		$('.addNewCard').fadeOut(function(){
			$('.savedCardWrap').fadeIn();	
		});
    }); 	
	
	$('#orderSuccess').on('click', function() {
		$("#order-summary").css("display","block");
		$("#order-summary").animate({"top": "0", "opacity": "1"});
	});
	
	$('#orderFailed').on('click', function() {
		$("#order-summaryFailed").css("display","block");
		$("#order-summaryFailed").animate({"top": "0", "opacity": "1"});
	});
	
	$('#memberDetails').on('click', function() {
		$(".feature").removeClass( "blurSec");
		$("#profilePlan").css("display","block");
		$("#profilePlan").animate({"top": "0", "opacity": "1"});
	});
	
	$('#profilePlnCLose').on('click', function() {
		$("#profilePlan").animate({"top": "20%", "opacity": "0"},function(){
			$("#profilePlan").css("display","none");
		});
	});
	
	$('.planRow').on('click', function() {
		$("#transHistory-Details").css("display","block");
		$("#transHistory-Details").animate({"top": "0", "opacity": "1"});
	});
	
	$('#transClose').on('click', function() {
		$("#transHistory-Details").animate({"top": "20%", "opacity": "0"},function(){
			$("#transHistory-Details").css("display","none");	
		});
	});
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 	
// payment tab functionality

	$(".pytmTitle ").click(function() {
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		var tab = $(this).attr("data");
		$(".paymentContent").not(tab).css("display", "none");
		$(tab).fadeIn();
	});
	
	$('.saved_card').click(function(){
		$('.saved_card').removeClass('active');
		$(this).addClass('active');
		$('.saved-card-content').toggle();	
	});
	
	$(".tabTitleSec ").click(function() {
		$(this).addClass("active");
        $(this).siblings().removeClass("active");
        var tab = $(this).attr("data");
        $(".planScrollSec").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 	
//Custome Scrollbar	

	$('.whiteWrapContent').slimScroll({
		height: '100%',
		width: '100%',
		color: "#56646b"
	});
	
	$('.plan-details').slimScroll({
		height: '100%',
		width: '100%',
		color: "#56646b"
	});
	
	$('.main-nav').slimScroll({
		height: '100%',
		width: '100%',
		color: "#56646b"
	});
	
	$('.like-conte').slimScroll({
		color: "#56646b"
	});
	
	$('.notifWrapper').slimScroll({
		color: "#56646b"
	});
	
	$('.taxonomy').slimScroll({
		color: "#56646b"
	});
	
	$('.contrycodeTable').slimScroll({
		color: "#56646b",
		width: '100%',
		height: '100%'
	});
	
	//$('.vocalWrap > ul').slimScroll({
//		color: "#56646b",
//		height: "100%"
//	});
	
		
//--------------------------------------------------------------------------------------------------------------------------------- 	
// save card delete popup

	$(".removeAddrs").click(function(){
		$('#deleteSaveCard').fadeIn();
	});
	
	$("#cancelDelete").click(function(){
		$('#deleteSaveCard').fadeOut();
	});
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Vocalization

	$('.vocalization a').on('click', function(){
		$('.vocal').fadeIn();
	});	
	
	$('.vocalClose').on('click', function(){
		$('.vocal').fadeOut();
		$.jPlayer.pause(); 
	});	
	
	$('.vocalDetails').on('click', function() { 
		$('#vocalRecord').fadeIn();
		$('#vocal').addClass( "blurSec" );
		$('.innerMiddle').addClass( "blurSec" );
		$.jPlayer.pause(); 
    });
	
	$('#vocalRecord .close').on('click', function() {
		$('#vocalRecord').fadeOut();
		$('.innerMiddle').removeClass( "blurSec" );
		$('#vocal').removeClass( "blurSec" );
		$.jPlayer.pause(); 
    });
	
	$('.whiteWrapContent').scroll(function(){
		if($(this).scrollTop() > 45){
			$('.xenoText').fadeIn();
		}
		else{
			$('.xenoText').fadeOut();
		}
	});
	
	$("#jquery_jplayer_1").jPlayer({
		ready: function () {$(this).jPlayer("setMedia", {mp3:"../resources/images/sounds/01.mp3"});},
		play: function(){$(this).jPlayer("pauseOthers");},
		swfPath: "../resources/images",
		supplied: "oga, mp3, m4a",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		globalVolume: true,
		cssSelectorAncestor: "#jp_container_1" 
	});
	
	$("#jquery_jplayer_2").jPlayer({
		ready: function () {$(this).jPlayer("setMedia", {m4a: "../resources/images/sounds/Miaow-07-Bubble.m4a"});},
		play: function(){$(this).jPlayer("pauseOthers");},
		swfPath: "../resources/images",
		supplied: "oga, mp3, m4a",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,		
		globalVolume: true,
		cssSelectorAncestor: "#jp_container_2" 
	});
	
	$("#jquery_jplayer_3").jPlayer({
		ready: function () {$(this).jPlayer("setMedia", {m4a: "../resources/images/sounds/Miaow-07-Bubble.m4a"});},
		play: function(){$(this).jPlayer("pauseOthers");},
		swfPath: "../resources/images",
		supplied: "oga, mp3, m4a",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		globalVolume: true,
		cssSelectorAncestor: "#jp_container_3" 
	});
	
	$("#jquery_jplayer_4").jPlayer({
		ready: function () {$(this).jPlayer("setMedia", {mp3:"../resources/images/sounds/01.mp3"});},
		play: function(){$(this).jPlayer("pauseOthers");},
		swfPath: "../resources/images",
		supplied: "oga, mp3, m4a",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,		
		globalVolume: true,
		cssSelectorAncestor: "#jp_container_4" 
	});
	
	$("#jquery_jplayer_5").jPlayer({
		ready: function () {$(this).jPlayer("setMedia", {mp3:"../resources/images/sounds/01.mp3"});},
		play: function(){$(this).jPlayer("pauseOthers");},
		swfPath: "../resources/images",
		supplied: "oga, mp3, m4a",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		globalVolume: true,
		cssSelectorAncestor: "#jp_container_5" 
	});
	
	$("#jquery_jplayer_6").jPlayer({
		ready: function () {$(this).jPlayer("setMedia", {m4a: "../resources/images/sounds/Miaow-07-Bubble.m4a"});},
		play: function(){$(this).jPlayer("pauseOthers");},
		swfPath: "../resources/images",
		supplied: "oga, mp3, m4a",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,		
		globalVolume: true,
		cssSelectorAncestor: "#jp_container_6" 
	});
	
	$("#jquery_jplayer_7").jPlayer({
		ready: function () {$(this).jPlayer("setMedia", {m4a: "../resources/images/sounds/Miaow-07-Bubble.m4a"});},
		play: function(){$(this).jPlayer("pauseOthers");},
		swfPath: "../resources/images",
		supplied: "oga, mp3, m4a",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		globalVolume: true,
		cssSelectorAncestor: "#jp_container_7" 
	});
	
	$("#jquery_jplayer_8").jPlayer({
		ready: function () {$(this).jPlayer("setMedia", {mp3:"../resources/images/sounds/01.mp3"});},
		play: function(){$(this).jPlayer("pauseOthers");},
		swfPath: "../resources/images",
		supplied: "oga, mp3, m4a",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,		
		globalVolume: true,
		cssSelectorAncestor: "#jp_container_8" 
	});
	
	$("#jquery_jplayer_9").jPlayer({
		ready: function () {$(this).jPlayer("setMedia", {mp3:"../resources/images/sounds/01.mp3"});},
		play: function(){$(this).jPlayer("pauseOthers");},
		swfPath: "../resources/images",
		supplied: "oga, mp3, m4a",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		globalVolume: true,
		cssSelectorAncestor: "#jp_container_9" 
	});
	
	$("#jquery_jplayer_10").jPlayer({
		ready: function () {$(this).jPlayer("setMedia", {m4a: "../resources/images/sounds/Miaow-07-Bubble.m4a"});},
		play: function(){$(this).jPlayer("pauseOthers");},
		swfPath: "../resources/images",
		supplied: "oga, mp3, m4a",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,		
		globalVolume: true,
		cssSelectorAncestor: "#jp_container_10" 
	});
	
	$("#jquery_jplayer_11").jPlayer({
		ready: function () {$(this).jPlayer("setMedia", {m4a: "../resources/images/sounds/Miaow-07-Bubble.m4a"});},
		play: function(){$(this).jPlayer("pauseOthers");},
		swfPath: "../resources/images",
		supplied: "oga, mp3, m4a",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		globalVolume: true,
		cssSelectorAncestor: "#jp_container_11" 
	});
	
	$("#jquery_jplayer_12").jPlayer({
		ready: function () {$(this).jPlayer("setMedia", {mp3:"../resources/images/sounds/01.mp3"});},
		play: function(){$(this).jPlayer("pauseOthers");},
		swfPath: "../resources/images",
		supplied: "oga, mp3, m4a",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,		
		globalVolume: true,
		cssSelectorAncestor: "#jp_container_12" 
	});
	
	$("#jquery_jplayer_13").jPlayer({
		ready: function () {$(this).jPlayer("setMedia", {m4a: "../resources/images/sounds/Miaow-07-Bubble.m4a"});},
		play: function(){$(this).jPlayer("pauseOthers");},
		swfPath: "../resources/images",
		supplied: "oga, mp3, m4a",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		globalVolume: true,
		cssSelectorAncestor: "#jp_container_13" 
	});	
	
	$("#jquery_jplayer_15").jPlayer({
		ready: function () {$(this).jPlayer("setMedia", {m4a: "../resources/images/sounds/Miaow-07-Bubble.m4a"});},
		play: function(){$(this).jPlayer("pauseOthers");},
		swfPath: "../resources/images",
		supplied: "oga, mp3, m4a",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		globalVolume: true,
		cssSelectorAncestor: "#jp_container_15" 
	});
	
	
//--------------------------------------------------------------------------------------------------------------------------------- 
//Notifications Model

	$('.right-notification').on('click', function() {
		$('#notification').fadeIn();
		$('.view-detail-cont').addClass( "blurSec" );
		$('.innerMiddle').addClass( "blurSec" );
    });
	
	$('#notification .close').on('click', function() {
		$('#notification').fadeOut();
		$('.innerMiddle').removeClass( "blurSec" );
		$('.view-detail-cont').removeClass( "blurSec" );
    });	
	
	$('.notifWrapper').css({"height": "500px"}).parent().css({"height": "500px"});
	
	
}); 







	
