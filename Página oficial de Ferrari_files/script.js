//#################################################################################
//Define ferrariPlugin
//#################################################################################
window.s2MWmlPlugin = function(playerInstance, dom, otherparams, jquery) {

  	/*
  	 *	jQuery dotdotdot 1.8.3
  	 *
  	 *	Copyright (c) Fred Heusschen
  	 *	www.frebsite.nl
  	 *
  	 *	Plugin website:
  	 *	dotdotdot.frebsite.nl
  	 *
  	 *	Licensed under the MIT license.
  	 *	http://en.wikipedia.org/wiki/MIT_License
  	 */
  	!function(a,b){"use strict";function c(a,b,c){var d=a.children(),e=!1;a.empty();for(var g=0,h=d.length;g<h;g++){var i=d.eq(g);if(a.append(i),c&&a.append(c),f(a,b)){i.remove(),e=!0;break}c&&c.detach()}return e}function d(b,c,g,h,i){var j=!1,k="a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",l="script, .dotdotdot-keep";return b.contents().detach().each(function(){var m=this,n=a(m);if("undefined"==typeof m)return!0;if(n.is(l))b.append(n);else{if(j)return!0;b.append(n),!i||n.is(h.after)||n.find(h.after).length||b[b.is(k)?"after":"append"](i),f(g,h)&&(j=3==m.nodeType?e(n,c,g,h,i):d(n,c,g,h,i)),j||i&&i.detach()}}),c.addClass("is-truncated"),j}function e(b,c,d,e,h){var k=b[0];if(!k)return!1;var m=j(k),n=m.indexOf(" ")!==-1?" ":"　",o="letter"==e.wrap?"":n,p=m.split(o),q=-1,r=-1,s=0,t=p.length-1;if(e.fallbackToLetter&&0===s&&0===t&&(o="",p=m.split(o),t=p.length-1),e.maxLength)m=g(m.trim().substr(0,e.maxLength),e),i(k,m);else{for(;s<=t&&(0!==s||0!==t);){var u=Math.floor((s+t)/2);if(u==r)break;r=u,i(k,p.slice(0,r+1).join(o)+e.ellipsis),d.children().each(function(){a(this).toggle().toggle()}),f(d,e)?(t=r,e.fallbackToLetter&&0===s&&0===t&&(o="",p=p[0].split(o),q=-1,r=-1,s=0,t=p.length-1)):(q=r,s=r)}if(q==-1||1===p.length&&0===p[0].length){var v=b.parent();b.detach();var w=h&&h.closest(v).length?h.length:0;if(v.contents().length>w?k=l(v.contents().eq(-1-w),c):(k=l(v,c,!0),w||v.detach()),k&&(m=g(j(k),e),i(k,m),w&&h)){var x=h.parent();a(k).parent().append(h),a.trim(x.html())||x.remove()}}else m=g(p.slice(0,q+1).join(o),e),i(k,m)}return!0}function f(a,b){return a.innerHeight()>b.maxHeight||b.maxLength&&a.text().trim().length>b.maxLength}function g(b,c){for(;a.inArray(b.slice(-1),c.lastCharacter.remove)>-1;)b=b.slice(0,-1);return a.inArray(b.slice(-1),c.lastCharacter.noEllipsis)<0&&(b+=c.ellipsis),b}function h(a){return{width:a.innerWidth(),height:a.innerHeight()}}function i(a,b){a.innerText?a.innerText=b:a.nodeValue?a.nodeValue=b:a.textContent&&(a.textContent=b)}function j(a){return a.innerText?a.innerText:a.nodeValue?a.nodeValue:a.textContent?a.textContent:""}function k(a){do a=a.previousSibling;while(a&&1!==a.nodeType&&3!==a.nodeType);return a}function l(b,c,d){var e,f=b&&b[0];if(f){if(!d){if(3===f.nodeType)return f;if(a.trim(b.text()))return l(b.contents().last(),c)}for(e=k(f);!e;){if(b=b.parent(),b.is(c)||!b.length)return!1;e=k(b[0])}if(e)return l(a(e),c)}return!1}function m(b,c){return!!b&&("string"==typeof b?(b=a(b,c),!!b.length&&b):!!b.jquery&&b)}function n(a){for(var b=a.innerHeight(),c=["paddingTop","paddingBottom"],d=0,e=c.length;d<e;d++){var f=parseInt(a.css(c[d]),10);isNaN(f)&&(f=0),b-=f}return b}if(!a.fn.dotdotdot){a.fn.dotdotdot=function(b){if(0===this.length)return a.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){a(this).dotdotdot(b)});var e=this,g=e.contents();e.data("dotdotdot")&&e.trigger("destroy.dot"),e.data("dotdotdot-style",e.attr("style")||""),e.css("word-wrap","break-word"),"nowrap"===e.css("white-space")&&e.css("white-space","normal"),e.bind_events=function(){return e.bind("update.dot",function(b,h){switch(e.removeClass("is-truncated"),b.preventDefault(),b.stopPropagation(),typeof i.height){case"number":i.maxHeight=i.height;break;case"function":i.maxHeight=i.height.call(e[0]);break;default:i.maxHeight=n(e)}i.maxHeight+=i.tolerance,"undefined"!=typeof h&&(("string"==typeof h||"nodeType"in h&&1===h.nodeType)&&(h=a("<div />").append(h).contents()),h instanceof a&&(g=h)),p=e.wrapInner('<div class="dotdotdot" />').children(),p.contents().detach().end().append(g.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var k=!1,l=!1;return j.afterElement&&(k=j.afterElement.clone(!0),k.show(),j.afterElement.detach()),f(p,i)&&(l="children"==i.wrap?c(p,i,k):d(p,e,p,i,k)),p.replaceWith(p.contents()),p=null,a.isFunction(i.callback)&&i.callback.call(e[0],l,g),j.isTruncated=l,l}).bind("isTruncated.dot",function(a,b){return a.preventDefault(),a.stopPropagation(),"function"==typeof b&&b.call(e[0],j.isTruncated),j.isTruncated}).bind("originalContent.dot",function(a,b){return a.preventDefault(),a.stopPropagation(),"function"==typeof b&&b.call(e[0],g),g}).bind("destroy.dot",function(a){a.preventDefault(),a.stopPropagation(),e.unwatch().unbind_events().contents().detach().end().append(g).attr("style",e.data("dotdotdot-style")||"").removeClass("is-truncated").data("dotdotdot",!1)}),e},e.unbind_events=function(){return e.unbind(".dot"),e},e.watch=function(){if(e.unwatch(),"window"==i.watch){var b=a(window),c=b.width(),d=b.height();b.bind("resize.dot"+j.dotId,function(){c==b.width()&&d==b.height()&&i.windowResizeFix||(c=b.width(),d=b.height(),l&&clearInterval(l),l=setTimeout(function(){e.trigger("update.dot")},100))})}else k=h(e),l=setInterval(function(){if(e.is(":visible")){var a=h(e);k.width==a.width&&k.height==a.height||(e.trigger("update.dot"),k=a)}},500);return e},e.unwatch=function(){return a(window).unbind("resize.dot"+j.dotId),l&&clearInterval(l),e};var i=a.extend(!0,{},a.fn.dotdotdot.defaults,b),j={},k={},l=null,p=null;return i.lastCharacter.remove instanceof Array||(i.lastCharacter.remove=a.fn.dotdotdot.defaultArrays.lastCharacter.remove),i.lastCharacter.noEllipsis instanceof Array||(i.lastCharacter.noEllipsis=a.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),j.afterElement=m(i.after,e),j.isTruncated=!1,j.dotId=o++,e.data("dotdotdot",!0).bind_events().trigger("update.dot"),i.watch&&e.watch(),e},a.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0,maxLength:null},a.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},a.fn.dotdotdot.debug=function(a){};var o=1,p=a.fn.html;a.fn.html=function(c){return c!=b&&!a.isFunction(c)&&this.data("dotdotdot")?this.trigger("update",[c]):p.apply(this,arguments)};var q=a.fn.text;a.fn.text=function(c){return c!=b&&!a.isFunction(c)&&this.data("dotdotdot")?(c=a("<div />").text(c).html(),this.trigger("update",[c])):q.apply(this,arguments)}}}(jquery),jquery(document).ready(function(a){a(".dot-ellipsis").each(function(){var b=a(this).hasClass("dot-resize-update"),c=a(this).hasClass("dot-timer-update"),d=0,e=a(this).attr("class").split(/\s+/);a.each(e,function(a,b){var c=b.match(/^dot-height-(\d+)$/);null!==c&&(d=Number(c[1]))});var f={};c&&(f.watch=!0),b&&(f.watch="window"),d>0&&(f.height=d),a(this).dotdotdot(f)})}),jquery(window).on("load",function(){jquery(".dot-ellipsis.dot-load-update").trigger("update.dot")});

    //################################################
    //CONFIGURATION
    //################################################

    /**
     * @description
     * Player Instance
     * @type {Player}
     */
    this.player = playerInstance
        /**
         * @description
         * object to be used for :
         *                -action and configuration of the share plugin
         *                -events for the skin
         *                -share function
         * @type {Object}
         */
    var pluginObject = {
        //share set
        STEP_SHARE_DIMENSION_WIDHT: [350, 960],
        STEP_SHARE_DIMENSION_HEIGHT: [150, 400],
        //name for the class to be used in order to add a special share action
        NAME_PREFIX_SKIN_SHARE_CLASS_W_FERRARI: "share-ferrari-skin-w-",
        NAME_PREFIX_SKIN_SHARE_CLASS_H_FERRARI: "share-ferrari-skin-h-",
        NAME_CLASS_DIV_CAPTION_EXTERNAL: "share-ferrari-caption",

        TYPE_IMAGEGALLERY: "IMAGEGALLERY", // type gallery
        TYPE_AUDIO: "AUDIO", // type audio
        TYPE_VIDEO: "VIDEO", // type video
        //default value gallery
        galleryActionInfo: {
            customClassCaption: "captionWhite",
            classCaptionExternalPadding: "captionPadding",
            captionOpen: false,
            captionHeight: "auto",
            captionFadeInFadeOut: 200,
            TYPE_AUTO: "auto",
            TYPE_DEFAULT: "off"
        }
    }
     var Volume={
    mouseIsDown : false,
    HOVERED_PATH : "th-hovered-path",
    VOLUME_PATH : "th-volume-path",
    NAME_BUTTON:"volume-btn-custom",
    //MAIN_CLASS : "th-" + HelpersGeneric.stringToCssClass(BarElements.volume);
    CSS_BTN : "th-volume-btn",
    CSS_BTN_HOVER_DISABLE : "th-hover-disabled",
    CSS_ICON : "th1-volume-icon",
    CSS_GRADIENT: "th1-svg-gradient ",
    CSS_GRADIENT_RIGHT : "th1-overlay-stop-color",
    CSS_GRADIENT_LEFT : "th1-bg-stop-color",

    CSS_GRADIENT_HOVER_RIGHT : "th1-hover-overlay-stop-color",
    CSS_GRADIENT_HOVER_LEFT : "th1-hover-bg-stop-color",

    ID_GRADIENT : "th1-id-gradient-",
    ID_GRADIENT_HOVERED : "th1-id-gradient-",
    /**
     * @description
     * When user click
     * @param e
     */
    onMouseDown:function (e) {
        // only handle left clicks or touch        
        if (e.which === 1 || e.which === 0) {
            Volume.mouseIsDown = true;
            Volume.handleMouseMove(e);
            //Volume.mouseIsDown = false;
           /* Volume.GlobalBind(Volume.playerInstance, 'mouseup.dur touchend.dur',
                function (e) {
                    Volume.mouseIsDown = false;
                }.bind(this)
            );*/
        }
    },
     /**
     * @descriptin
     * set Volume effect
     * @param percent Number (0,100)
     */
    setVolumeGradient : function (percent) {
        //console.log("setVolumeGradient",percent,Volume.$svgContainer.find("." + Volume.CSS_GRADIENT_LEFT).length)
        Volume.$svgContainer.find("." + Volume.CSS_GRADIENT_LEFT).attr("offset",Math.ceil(percent*100)+"%");
    },

    /**
     * @descriptin
     * set Volume effect
     * @param percent Number (0,100)
     */
    setHoverGradient : function (percent) {
        //console.log("setHoverGradient",percent)
        Volume.$svgContainer.find("." + Volume.CSS_GRADIENT_HOVER_LEFT).attr("offset",Math.ceil(percent*100)+"%");
    },
    /**
     * @description
     * Handle mouse move
     * @param e
     */
    handleMouseMove : function (e) {
        var bBox = Volume.$svgContainer[0].getBBox();
        var offset = Volume.$svgContainer.offset();
        var width = Math.floor(bBox.width);
        var x;
      //  console.log(Volume.mouseIsDown)
        //adjext value for fix position
        offset.left = Math.floor(offset.left);
        // mouse or touch position relative to the object
        if (e.originalEvent && e.originalEvent.changedTouches) {
            x = Math.floor(e.originalEvent.changedTouches[0].pageX);
        } else {
            x =Math.floor( e.pageX);
        }

        if (x <=( offset.left)) {
                x = offset.left;
        } else if (x >=( width + offset.left)) {
            x = width + offset.left;
        }

        pos = Math.floor(x - offset.left);

        //if mouse is not Down
        if(Volume.mouseIsDown == false){
            Volume.$pathContainerHover.show();
            Volume.setHoverGradient(pos / width);
        }else{
            Volume.$pathContainerHover.hide();
            Volume.setVolumeGradient(pos / width);
            //set volume
            //console.log(pos,width)
            Volume.playerInstance.volume(pos / width);
        }
    },
   

    /**
     * @descriptin 
     * On Mouse go out from Bar
     * @param e
     */
    handleMouseLeave : function (e) {
        
        Volume.mouseIsDown=false           
        Volume.$pathContainerHover.hide();
    },
    /**
     * @description
     * Resolve safari problem.
     * When a text is selected into webpage, safari always show cursor arrow instead
     * of cursor point
     */
    attachHoverInEvent : function () {
        var onSelectStart = function(e){
            e.stopPropagation();
            return false;
        };
        var hoverIn = function(){
            //Remove selecton:
            var sel = window.getSelection ? window.getSelection() : document.selection;
            if (sel) {
                if (sel.removeAllRanges){
                    sel.removeAllRanges();
                } else if (sel.empty){
                    sel.empty();
                }
            }
        }.bind(this);

        //On select start and on mouse over:
        //this.$template.on("selectstart", onSelectStart);
        //this.$template.on("mouseenter", hoverIn);
    },
/**
     * @description
     * @returns {HTMLElement}
     */
    setTemplate : function(){
        var params = {pngClass: CSS_ICON, svg: AudioSvg, size: "bar", cssClass: CSS_BTN + " "+ CSS_BTN_HOVER_DISABLE};
        this.$template = $(Button.createSimpleButton(params, MAIN_CLASS));
        return this.$template;
    },


    /**
     * @description
     * add  Gradient svg
     * @params
      svg:   the owning <svg> element
        id:    an id="..." attribute for the gradient
         stops: an array of objects with <stop> attributes
     */
    createGradient : function ($svg, path, id, pStar, left, right) {
        //define gradient        
        var stops = [
            {offset: pStar, 'class': Volume.CSS_GRADIENT + " " + left},
            {offset: '0%', 'class': Volume.CSS_GRADIENT + " " + right}
        ];
        //console.log($svg[0].namespaceURI)
        var svgNS = $svg[0].namespaceURI;
        var grad = document.createElementNS(svgNS, 'linearGradient');
        grad.setAttribute('id', id);
        for (var i = 0; i < stops.length; i++) {
            var attrs = stops[i];
            var stop = document.createElementNS(svgNS, 'stop');
            for (var attr in attrs) {
                if (attrs.hasOwnProperty(attr)) stop.setAttribute(attr, attrs[attr]);
            }
            grad.appendChild(stop);
        }
        var defs = $svg[0].querySelector('defs') ||
            $svg[0].insertBefore(document.createElementNS(svgNS, 'defs'), $svg[0].firstChild);
        defs.appendChild(grad);
        //set id fill
        path.attr('fill', 'url(#' + id + ')');
    },
    /**
     * @description
     * On Volume change event
     * @param apiEnum
     * @param volume
     */
    onVolumeChange : function(api,volume){
        
        if (!Volume.mouseIsDown) {
            Volume.setVolumeGradient(volume);
        }
    },
    initVolume: function(playerInstance){
        
        var $svg=jquery('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22.8 18" style="enable-background:new 0 0 22.8 18;" xml:space="preserve"><defs></defs><path class="th-volume-path" d="M19.6,0.1v17.8h2.9V0.1H19.6z M14.7,3v14.9h2.9V3H14.7z M9.8,5.9v11.9h2.9V5.9H9.8z M5,8.8v9h2.9v-9H5z M0.2,11.8v6.1h2.9 v-6.1H0.2z" fill="url(#th-id-gradient-1)"></path><path class="th-hovered-path" d="M19.6,0.1v17.8h2.9V0.1H19.6z M14.7,3v14.9h2.9V3H14.7z M9.8,5.9v11.9h2.9V5.9H9.8z M5,8.8v9h2.9v-9H5z M0.2,11.8v6.1h2.9 v-6.1H0.2z" fill="url(#th-id-gradient-2)"></path></svg>')        
        jquery(playerInstance.container()).find("."+Volume.NAME_BUTTON).html($svg)
        //your callback logic / code here
            
        Volume.playerInstance=playerInstance
        Volume.$volumeContainer = jquery(playerInstance.container()).find("."+Volume.NAME_BUTTON) //this.$template.find('.' + CSS_BTN);
        Volume.$svgContainer =jquery(playerInstance.container()).find("."+Volume.NAME_BUTTON).find("svg") ;
        Volume.$pathContainer = Volume.$volumeContainer.find('.' + Volume.VOLUME_PATH);
        Volume.$pathContainerHover =  Volume.$volumeContainer.find('.' + Volume.HOVERED_PATH);
         if( Volume.$svgContainer.length==1){     
              jquery(Volume.$volumeContainer).parent().addClass("th-volume-button")            
            //Mouse Over
            Volume.$volumeContainer.bind('mousedown touchstart', Volume.onMouseDown);
            //mouse move
            Volume.$volumeContainer.mousemove(Volume.handleMouseMove);
            //Mouse leave:
            Volume.$volumeContainer.bind('mouseleave mouseup', Volume.handleMouseLeave);
                
            //Volume.attachHoverInEvent();
            Volume.createGradient( Volume.$svgContainer,  Volume.$pathContainer, Volume.ID_GRADIENT + "HelpersGeneric1", "100%", Volume.CSS_GRADIENT_LEFT, Volume.CSS_GRADIENT_RIGHT);
            Volume.createGradient( Volume.$svgContainer,  Volume.$pathContainerHover, Volume.ID_GRADIENT_HOVERED +"HelpersGeneric2", "100%", Volume.CSS_GRADIENT_HOVER_LEFT, Volume.CSS_GRADIENT_HOVER_RIGHT);
            playerInstance.on("volumechange", Volume.onVolumeChange);
            
            //Hide path Hover:
            Volume.$pathContainerHover.hide();
            //  Volume.onMouseDown()
         }
    
    }
    
}

    //check if otherparams is defined
   // if ((otherparams === null) || (typeof otherparams === "undefined")) {
        otherparams = playerInstance.params();
    //}
    //####################
    // function for SKIN POPUP SHARE
    //####################
    /**
     * @description
     * resize popup share with dimension
     * @param player {Player}
     */
    pluginObject.resizePopUpSharePage = function(playerInstance) {
            //player size
            var pW = jquery(playerInstance.container()).width();
            var pH = jquery(playerInstance.container()).height();
            //main container
            var $divMainContainer = jquery(playerInstance.container()).find(".th-main-container")
            var addClass = "";
            //add class WIDTH
            for (s = this.STEP_SHARE_DIMENSION_WIDHT.length - 1; s >= 0; s--)
                if (pW < this.STEP_SHARE_DIMENSION_WIDHT[s])
                    addClass = this.STEP_SHARE_DIMENSION_WIDHT[s]
                    //add class
            if (addClass != "") 
                $divMainContainer.addClass(this.NAME_PREFIX_SKIN_SHARE_CLASS_W_FERRARI + addClass);
            //remove class
            for (s = 0; s < this.STEP_SHARE_DIMENSION_WIDHT.length; s++) {
                if (addClass != this.STEP_SHARE_DIMENSION_WIDHT[s]) {
                    $divMainContainer.removeClass(this.NAME_PREFIX_SKIN_SHARE_CLASS_W_FERRARI + this.STEP_SHARE_DIMENSION_WIDHT[s]);
                }
            }
            addClass = "";
            //add class WIDTH
            for (s = this.STEP_SHARE_DIMENSION_HEIGHT.length - 1; s >= 0; s--)
                if (pH < this.STEP_SHARE_DIMENSION_HEIGHT[s])
                    addClass = this.STEP_SHARE_DIMENSION_HEIGHT[s]
                    //add class
            if (addClass != "")
                $divMainContainer.addClass(this.NAME_PREFIX_SKIN_SHARE_CLASS_H_FERRARI + addClass);
            //remove class
            for (s = 0; s < this.STEP_SHARE_DIMENSION_HEIGHT.length; s++) {
                if (addClass != this.STEP_SHARE_DIMENSION_HEIGHT[s]) {
                    $divMainContainer.removeClass(this.NAME_PREFIX_SKIN_SHARE_CLASS_H_FERRARI + this.STEP_SHARE_DIMENSION_HEIGHT[s]);
                }
            }
        }
        //####################
        // function for GALLERY skin
        //####################
        /**
         * @description
         * enable/disable content info and button
         * @param player {Player}
         * @param initClose {boolean}
         */
    pluginObject.gallerySetCapitonDisplay = function(playerInstance, initOpen) {

            //get custom content info and button
            var objPlaylist = playerInstance.content();
            /*playerInstance.playlistContent();*/
            var content = objPlaylist.items[objPlaylist.currentItem];
            var $divCaption = jquery(playerInstance.container()).find("." + this.NAME_CLASS_DIV_CAPTION_EXTERNAL);
            var isFullscreen = jquery(playerInstance.container()).hasClass("th-fullscreen");
            //get obj custom button
            var $btn = jquery(playerInstance.container()).find(".th-toggleCaptionAction");
            //get obj caption
            var $caption = jquery(playerInstance.container()).find(".th-control-bar.th-top");
            //if player is fullscreen
            if (isFullscreen == true) {
                //set display info visible
                if (initOpen == false || content.description == "") {
                    $caption.hide();
                } else {
                    $caption.show();
                }
                //set display button
                if (content.description != "") {
                    $btn.css({ opacity: 1 });
                    $btn.show();
                } else {
                    $btn.hide();
                }
            } else {
                // No fullscreen
                $caption.hide();
                $btn.hide();
            }
            //add padding-top/bottom if description is not empty
            $divCaption.removeClass(this.galleryActionInfo.classCaptionExternalPadding);
            if (jquery.trim(content.description) != "") {
                $divCaption.addClass(this.galleryActionInfo.classCaptionExternalPadding);
            }
            //set text to external div
            if (this.galleryActionInfo.captionHeight != this.galleryActionInfo.TYPE_DEFAULT) {
                if (content.description != $divCaption.html()) {
                    //effect fadeOut
                    $divCaption.stop().fadeOut(content.description == "" ? 0 : pluginObject.galleryActionInfo.captionFadeInFadeOut, function() {

                        $divCaption.stop().html(content.description);
                        //add dot dot dot
                        if (pluginObject.galleryActionInfo.captionHeight != pluginObject.galleryActionInfo.TYPE_AUTO && pluginObject.galleryActionInfo.captionHeight != pluginObject.galleryActionInfo.TYPE_DEFAULT) {

                              var lineH=Math.floor(parseInt($divCaption.css('line-height').replace('px','')) * 1);
                              var mHeight=Math.ceil(($divCaption.height()/2)/lineH)*lineH;
                              $divCaption.dotdotdot({height:mHeight})



                        }
                        //effect fadeIn
                        $divCaption.fadeIn(pluginObject.galleryActionInfo.captionFadeInFadeOut);
                    });
                }
            }
            //add dot dot dot if captionHeight is defined
            if (this.galleryActionInfo.captionHeight != this.galleryActionInfo.TYPE_AUTO && this.galleryActionInfo.captionHeight != this.galleryActionInfo.TYPE_DEFAULT) {


                var lineH=Math.floor(parseInt($divCaption.css('line-height').replace('px','')) * 1);
                var mHeight=Math.ceil(($divCaption.height()/2)/lineH)*lineH;
                $divCaption.dotdotdot({height:mHeight})
            }
        }
        /**
         * @description
         * create area for capiton and configure player dimension
         * @param player {Player}
         */
    pluginObject.galleryCreateCapitonsArea = function(playerInstance) {
            //get content info and custom button
            var $divCaption = jquery('<div>').addClass(this.NAME_CLASS_DIV_CAPTION_EXTERNAL);
            //get containerBottom
            var $containerBottom = jquery(playerInstance.container()).find(".th-bottom-container");
            //get  MainContainer
            var hC = this.galleryActionInfo.captionHeight == this.galleryActionInfo.TYPE_AUTO ? "0px" : this.galleryActionInfo.captionHeight;
            var hCFixClassExternal = (hC == "0px") ? "auto" : hC;
            //generate style for use external div for dinamc size
            var classPlayer = "#" + playerInstance.id + " {	overflow: visible;} ";
            //set style th-fullscreen for set overflow value
            var classPlayerFullScreen = "#" + playerInstance.id + ".th-fullscreen {	overflow: hidden} ";
            //generate style for share-ferrari-caption
            var classNormalCaption = "#" + playerInstance.id + " .th-bottom-container ." + this.NAME_CLASS_DIV_CAPTION_EXTERNAL + " {height:" + hCFixClassExternal + "}";
            //style active area caption under the player
            var classMainContainerPlayer = "#" + playerInstance.id + " .th-main-container {position:relative;height: calc(100% - " + hC + ")}";
            //style disactive area caption under the player	on fullscreen
            var classMainContainerPlayerrFullScreen = "#" + playerInstance.id + ".th-fullscreen .th-main-container {height: 100%}";
            //a dd style to body page
            var $style = jquery('<style />');
            $style.attr("id", this.NAME_CLASS_DIV_CAPTION_EXTERNAL + playerInstance.id);
            $style.prop("type", "text/css").html(classPlayer + " " + classPlayerFullScreen + " " + classMainContainerPlayer + " " + classMainContainerPlayerrFullScreen + " " + classNormalCaption).appendTo("head");
            //add class  containerBottom
            $containerBottom.addClass(this.galleryActionInfo.customClassCaption);
            //add div Caption to stage and add class
            $divCaption.appendTo($containerBottom);
        }
        /**
         * @description
         * remove area  caption for IMAGE GALLERY
         * @param player {Player}
         */
    pluginObject.removeElmentSkinGallery = function(playerInstance) {
            //get containerBottom
            var $containerBottom = jquery(playerInstance.container()).find(".th-bottom-container");
            //remove text area
            $containerBottom.find("." + this.NAME_CLASS_DIV_CAPTION_EXTERNAL).detach();
            //remove skin
            jquery("#" + this.NAME_CLASS_DIV_CAPTION_EXTERNAL + playerInstance.id).detach();
        }
        /**
         * @description
         * remove area  caption for AUDIO
         * @param player {Player}
         */
    pluginObject.removeElmentSkinAudio = function(playerInstance) {
            //player container
            var $container = jquery(playerInstance.container());
            //remove custom style
            $container.find(".th-control-bar.th-horizontal.th-bottom").removeAttr('style');;
        }
        /**
         * @description
         * change displayed content information
         */
    pluginObject.galleryOpenOrCloseInfo = function(playerInstance) {
            //change status
            this.galleryActionInfo.captionOpen = (this.galleryActionInfo.captionOpen == false);
            //set element display
            this.gallerySetCapitonDisplay(playerInstance, this.galleryActionInfo.captionOpen);
        }
        //########################################
        //init plugin action for video, gallery or audio
        //########################################
        /**
         * @description
         * enable/disable info content playlist
         * @param player {Player}
         */
    pluginObject.init = function(playerInstance) {
            //remove all skin element
            //IMAGEGALLERY
            this.removeElmentSkinGallery(playerInstance);
            //audio
            this.removeElmentSkinAudio(playerInstance);

            //get info content THRON
            var objPlaylist = playerInstance.content();
            // add event player for skin gallery
            switch (objPlaylist.type) {
                //################################################
                // case AUDIO
                case this.TYPE_AUDIO:
                    //player container
                    var $container = jquery(playerInstance.container());
                    //get div title caption
                    var $containerCaptionTitle = $container.find(".th-control-bar .th-caption .th-title");
                    //get area used to generate special button play/pause
                    var $containerThOverlay = $container.find(".th-overlays");
                    // create special button element
                    var $bntSpecialAction = jquery("<div class='audio-ferrari-special-button play'></div>");
                    // button controller audio
                    var $containerBottonControl = $container.find(".th-control-bar.th-horizontal.th-bottom");
                    //audio wrapper
                    var $audioWrapper = $container.find(".th-audio-wrapper");

                    //remove old button if it is present
                    $container.find(".audio-ferrari-special-button").detach();
                    //add special button play audio
                    $bntSpecialAction.appendTo($containerThOverlay);
                    //set default height
                    $bntSpecialAction.height($audioWrapper.height());
                    // remove gradiend effect
                    $audioWrapper.find(".th-component-gradient-color").removeClass("th-component-gradient-color");
                    //set controller position
                    $containerBottonControl.css("top", ($audioWrapper.height() - $containerBottonControl.height() - 10) + "px");

                    //start action dotdotdot title
                    $containerCaptionTitle.dotdotdot();
                    //generate specia button area action play
                    $bntSpecialAction.click(function() {
                        playerInstance.play()
                    })
                    break;
                    //################################################
                    // case GALLERY
                case this.TYPE_IMAGEGALLERY:
                    //get value  customClassCaption external player
                    if (otherparams.hasOwnProperty('customClassCaption')) {
                        this.galleryActionInfo.customClassCaption = otherparams.customClassCaption;
                    }
                    //get value player CaptionHeight
                    if (otherparams.hasOwnProperty('maxCaptionHeight')) {
                        //check if param is correct and set lowercase
                        otherparams.maxCaptionHeight = otherparams.maxCaptionHeight.toLowerCase();
                        //analize param
                        if (otherparams.maxCaptionHeight != this.galleryActionInfo.TYPE_AUTO && otherparams.maxCaptionHeight != this.galleryActionInfo.TYPE_DEFAULT) {
                            //get value  maxCaptionHeight and init default value
                            var strMCH = otherparams.maxCaptionHeight.replace(/[^\dpx%]/g, '');
                            var valueMCH = parseInt(strMCH)
                            if (isNaN(valueMCH) == true) {
                                otherparams.maxCaptionHeight = this.galleryActionInfo.TYPE_DEFAULT
                            } else {
                                //configure value  maxCaptionHeight
                                if (strMCH.indexOf('%') != -1) {
                                    otherparams.maxCaptionHeight = valueMCH + "%";
                                } else {
                                    otherparams.maxCaptionHeight = valueMCH + "px";
                                }
                            }
                        }
                        //set final value
                        this.galleryActionInfo.captionHeight = otherparams.maxCaptionHeight;
                    }
                    //define Captions area
                    if (this.galleryActionInfo.captionHeight != this.galleryActionInfo.TYPE_DEFAULT) {
                        this.galleryCreateCapitonsArea(playerInstance);
                        // first action display inizialization
                        pluginObject.gallerySetCapitonDisplay(playerInstance, pluginObject.galleryActionInfo.captionOpen);
                    } else {
                        jquery(playerInstance.container()).find(".th-toggleCaptionAction").hide();
                    }
                    break;
                    //################################################
                    // case VIDEO
                case this.TYPE_VIDEO:
                     // init volume
                     Volume.initVolume(playerInstance);
                    //################################################
                default:
            }
        }
        //################################################################################################
        // use THRON player event for skin inizialization
        //################################################################################################
        /**
         * @description
         * inizialization plugin and add params for skin init
         * @param player {Player}
         */
    this.player.on("beforeInit",
        function(playerInstance) {
            //configure bar for player AUDIO/VIDEO/IMAGEGALLERY
            var actualBarPlayer = window.THRONSchemaHelper.getSchema();
            //define structure bottomBar IMAGEGALLERY
            var bBarGalleryDesktopMobile = [
                { resizable: true, elements: [] },
                {
                    elements: ["toggleCaptionAction",
                        "leftGallery",
                        "textGallery",
                        "rightGallery",
                        "fullscreenButton",
                        "shareButton"
                    ]
                }
            ];

            //define structure bottomBar  AUDIO
            var bBarAudioDesktopMobile = [{
                    elements: ["playButton",
                        "currentTime"
                    ]
                },
                { resizable: true, elements: [] },
                { elements: ["duration"] }
            ];
            //define structure bottomBar  VIDEO
            var bBarVideoDesktop = [{
                resizable: true,
                // rimozione volumeAction
                elements: ["playButton", "timeSeek", "timeInfoText", "volumeAction", "fullscreenButton", "hdButton", "shareButton"]
            }];
            var bBarVideoMobile = [{
                resizable: true,
                elements: ["playButton", "timeSeek", "timeInfoText", "fullscreenButton", "hdButton", "shareButton"]
            }];
            //IMAGEGALLERY add strutture
            window.THRONSchemaHelper.addGroupsToBar(actualBarPlayer, pluginObject.TYPE_IMAGEGALLERY, "bottom", bBarGalleryDesktopMobile, bBarGalleryDesktopMobile);
            //remove galleryCarousel
            window.THRONSchemaHelper.addGroupsToBar(actualBarPlayer, pluginObject.TYPE_IMAGEGALLERY, "galleryCarousel", [{}]);
            //AUDIO add strutture
            window.THRONSchemaHelper.addGroupsToBar(actualBarPlayer, pluginObject.TYPE_AUDIO, "bottom", bBarAudioDesktopMobile, bBarAudioDesktopMobile);
            //VIDEO add strutture
            window.THRONSchemaHelper.addGroupsToBar(actualBarPlayer, pluginObject.TYPE_VIDEO, "bottom", bBarVideoDesktop, bBarVideoMobile);

            // hide the player before the area is ready
            var params = {
                //loader spinner color
                preloadColor: "#E61D25",
                //Disable quality button
                manualQualityToggle: true,
                linkedContent: "hide",
                //Audio Wave color
                waveColor: "#b2b2b2",
                waveProgressColor: "#eb2323",
                audioResponsive: false,
                mouseWheelZoom: false,
                customButtons: {
                    "toggleCaptionAction": {
                        toggleOff: {
                            className: "ferrari-btn-custom-out"
                        },
                        toggleOn: {
                            className: "ferrari-btn-custom-in"
                        },
                        handler: function() { //gallery event
                            pluginObject.galleryOpenOrCloseInfo(playerInstance)
                        }
                    },
                  "volumeAction": {
                    toggleOn: {
                        className: Volume.NAME_BUTTON
                    },
                    handler: function() {
                        //action on click
                        //console.log(this, "click")
                     
                       
                    }.bind(this)
                }
                },
                bars: actualBarPlayer,
            };
            playerInstance.params(params);

        }
    );
    //################################################
    // generic player event
    //################################################
    /**
     * @description
     * resize page share with dynamic class for layout change
     */
    this.player.on("resize", function(playerInstance) {

        var objPlaylist = playerInstance.content();
        //player container
        var $container = jquery(playerInstance.container());
        //get div title caption
        var $containerCaptionTitle = $container.find(".th-control-bar .th-caption .th-title");
        //get area used for generate special button play/pause
        var $containerThOverlay = $container.find(".th-overlays");
        // create special button element
        var $bntSpecialAction = $container.find(".audio-ferrari-special-button.play");
        // button controller audio
        var $containerBottonControl = $container.find(".th-control-bar.th-horizontal.th-bottom");
        //audio wrapper
        var $audioWrapper = $container.find(".th-audio-wrapper");

        //set resize share
        pluginObject.resizePopUpSharePage(playerInstance);
        // add action player for skin AUDIO/IMAGEGALLERY
        switch (objPlaylist.type) {
            //################################################
            // case AUDIO
            //################################################
            case pluginObject.TYPE_AUDIO:
                // ellipsis test title on resize
                var content = objPlaylist.items[objPlaylist.currentItem];
                //add test title to div
                $containerCaptionTitle.html(content.title);
                //apply dotdotdot
                $containerCaptionTitle.dotdotdot();
                //add height button play
                $bntSpecialAction.height($audioWrapper.height());
                //set controller position
                $containerBottonControl.css("top", ($audioWrapper.height() - $containerBottonControl.height() - 10) + "px");
                break;
            case pluginObject.TYPE_IMAGEGALLERY:
                pluginObject.gallerySetCapitonDisplay(playerInstance, pluginObject.galleryActionInfo.captionOpen);
                break;
            default:
        }

    });

    /**
     * @description
     * define the action on player play
     * @param player {Player}
     * @param status {object}
     */
    //change status player
    this.player.on("play", function(playerInstance, status) {

        var objPlaylist = playerInstance.content();
        //if audio remove custom button
        if (objPlaylist.type == pluginObject.TYPE_AUDIO) {
            jquery(playerInstance.container()).find(".audio-ferrari-special-button").remove()
        }
    });
    /**
     * @description
     * define the action on player itemGalleryChanged
     * player event for PLAYLIST
     * @param player {Player}
     * @param info {object}
     */
    this.player.on("itemGalleryChanged", function(playerInstance, info) {
        //check for change element
        var objPlaylist = playerInstance.content();
        if (objPlaylist.type == pluginObject.TYPE_IMAGEGALLERY) {
            pluginObject.gallerySetCapitonDisplay(playerInstance, pluginObject.galleryActionInfo.captionOpen);
        }
    });
    /**
     * @description
     * define the action on player fullscreen
     * player event for PLAYLIST
     * @param player {Player}
     * @param status {boolean}
     */
    this.player.on("fullscreen", function(playerInstance, status) {
        //check for display element
        var objPlaylist = playerInstance.content();
        if (objPlaylist.type == pluginObject.TYPE_IMAGEGALLERY) {
            pluginObject.gallerySetCapitonDisplay(playerInstance, pluginObject.galleryActionInfo.captionOpen);
        }
    });

    /**
     * @description
     * define the action on player ready
     * player event for PLAYLIST
     * @param player {Player}
     */
    var onReady = function(playerInstance) {
        // force rezise player
        pluginObject.resizePopUpSharePage(playerInstance);
        //init the plugin to detect action for video and audio
        pluginObject.init(playerInstance);
       
        //
        playerInstance.off("ready", onReady);
    }
    this.player.on("ready", onReady);
  //################################################
  // Event Eloqua Function
  //################################################
  
  var removeLangFormUrl= function(url) {
    if (url == undefined) {
            return '';
    }
    url = url.replace(/\/[a-z]{2}-[A-Z]{2}/gi, "");
    url = url.replace(/\/[a-z]{2}_[A-Z]{2}/gi, "");
    return (url);
    }

    var  removeQueryString= function(url) {
        if (url == undefined) {
                return '';
        }
        var urlparts = url.split('?');
        return urlparts[0];
    }

    var  getOnlyDomain= function() {
        var protocol = location.protocol;
        var host = location.host;
        return protocol+'//'+host;
    }

    var  getDomainAndFirstPath= function(url) { 
        var domain = getOnlyDomain();
        var firstPath = url.match(/.*\/(.*)\/(.*)$/)[1];
        return domain+'/'+firstPath;
    }

    var async_load= function() {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.id = 'elqLoader';
      s.src = '//img.en25.com/i/elqCfg.min.js';
      var headArray = document.getElementsByTagName("HEAD");
      var headTag = headArray[0];
      headTag.appendChild(s);
    }
    var  onTrackNeeded= function(path) {
	  //console.log("onTrackNeeded",path)
      var elqSafeUrl = location.href.replace("#", "/");
      elqSafeUrl = removeLangFormUrl(elqSafeUrl);
      var elqLocation = elqSafeUrl + "";
      elqLocation = removeQueryString(elqLocation);
      if (path != null) {
              elqLocation = elqLocation + "/" + path;
      }
      window._elqQ.push(['elqTrackPageView', elqLocation, elqLocation]);
	/*
      var fcom = elqLocation.indexOf("www.ferrari.com");
      if(fcom > 0){
              elqLocation = getDomainAndFirstPath(elqLocation);
      }else{
              elqLocation = getOnlyDomain();
      }
      window._elqQ.push(['elqTrackPageView', elqLocation, elqLocation]);*/
	}
	 /**
  * @description
  * Inizialization plugin, add some embed params
  */
	var  sendTracktoServerELQ= function(playerInstance,percentPlayer) {
		// check send event
		for(i=0;i<playerInstance.listelqEvents.length;i++)
			if(playerInstance.listelqEvents[i]["canSend"]==true && playerInstance.listelqEvents[i]["timePercent"]==percentPlayer){				
				playerInstance.listelqEvents[i]["canSend"]=false;
				playerInstance.canSendEvent=false
				//console.log("send",percentPlayer);
				//console.log("sendTracktoServerELQ",playerInstance.status(),percentPlayer)
				//console.log("sendTracktoServerELQ->",playerInstance.listelqEvents[i]["pathEvent"])
				onTrackNeeded(playerInstance.listelqEvents[i]["pathEvent"]);
				playerInstance.canSendEvent=true				
			}
		

		
		
		//onTrackNeeded(playerInstance.params().xcontentId+path);
	}
    
      //################################################
  // Event CE THRON listener
  //################################################
  /**
  * @description
  * Inizialization plugin, add some embed params
  */
  var eventElqBeforeInit = function(playerInstance){
    paramPlayer=playerInstance.params()
   
    //eloqua INIT
    //eloqua INIT
    if(window._elqQ==undefined || window._elqQ==null )
        async_load();
        
    window._elqQ = window._elqQ || [];
    window._elqQ.push(['elqSetSiteId', "1990924103"]);
    window._elqQ.push(['elqUseFirstPartyCookie', "track.ferrari.com"]);
    //async_load();
	//generate list event
	var numberEventelq=(paramPlayer['elqNumberEvent'] == null ? 2 : paramPlayer['elqNumberEvent']);
	
	playerInstance.canSendEvent=false;
	// generate list event
	playerInstance.listelqEvents=[{"timePercent":0,
									"canSend":true,
								   "pathEvent":paramPlayer['xcontentId']+"/"+"play"
								  }];	
	for(i=1;i<numberEventelq;i++){
		playerInstance.listelqEvents.push({
			"timePercent":Math.floor(i*100/(numberEventelq-1)),
			"canSend":true,
			"pathEvent":paramPlayer['xcontentId']+"/"+Math.floor(i*100/(numberEventelq-1))
			})
	}
	//console.log(playerInstance.listelqEvents)
  };


  //################################################
  //listener event player
  //################################################
  /**################################################
  * @description
  * On reproducer play video
  ################################################**/
  var  eventElqPlay=function (playerInstance) {
    //console.log("eventElqPlay",playerInstance.canSendEvent)
	//send event
	sendTracktoServerELQ(playerInstance,0)
    playerInstance.off("play",eventElqPlay);
	playerInstance.canSendEvent=true
  
  }
  /**################################################
  * @description
  * On time  update video
  * loop preview
  ################################################**/
  var eventElqTimeUpdate=function(playerInstance,CurrentTime,Duration){
    // get %
	var percentPlayer=Math.floor(CurrentTime*100/Duration)
	var statusPlayer=playerInstance.status()	 
	// send event if it is play and player can send event
	if(statusPlayer["playing"]==true && playerInstance.canSendEvent==true)
		sendTracktoServerELQ(playerInstance,percentPlayer);    
  }
  /**################################################
  * @description
  * On complete
  * loop preview
  ################################################**/
  var eventElqComplete=function(playerInstance){
   // send end event 100%
    sendTracktoServerELQ(playerInstance,100)
    
  } 
  /**################################################
  * @description
  * On reproducer ready
  ################################################**/
  var eventElqReady=function(playerInstance){
	//remove event
	playerInstance.off("ready",eventElqReady);
	var metadataNodeList = playerInstance.mediaContainer().querySelectorAll("meta");
    var metadata = Array.prototype.slice.call(metadataNodeList);
    for (var i = 0; i < metadataNodeList.length; i++) {
            metadataNodeList[i].parentNode.removeChild(metadataNodeList[i]);
        }
    
   }
   //################################################
  // Add event player
  //################################################
  // this.player.on("beforeInit", eventElqBeforeInit);
  //  this.player.on("play",eventElqPlay);
  //  this.player.on("ready",eventElqReady);  
  //  this.player.on("complete",eventElqComplete)
  //  this.player.on("timeupdate",eventElqTimeUpdate)
    
};
//################################################
// MAIN PLUGIN
//################################################
//Register Plugin:
THRONContentExperience.plugin("s2MWml", s2MWmlPlugin);
//################################################
