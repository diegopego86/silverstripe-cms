!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=18)}([function(t,e){t.exports=jQuery},function(t,e){t.exports=i18n},,,,,,,,function(t,e){t.exports=Injector},function(t,e){t.exports=InsertLinkModal},function(t,e){t.exports=React},function(t,e){t.exports=ReactApollo},function(t,e){t.exports=ReactDom},function(t,e){t.exports=ShortcodeSerialiser},function(t,e){t.exports=TinyMCEActionRegistrar},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n.n(r),o=n(15),a=n.n(o),l=n(11),s=n.n(l),c=n(13),u=n.n(c),d=n(12),p=(n.n(d),n(0)),f=n.n(p),g=n(14),h=n.n(g),k=n(10),_=(n.n(k),n(9));n.n(_),a.a.addAction("sslink",{text:i.a._t("CMS.LINKLABEL_PAGE","Page on this site"),onclick:function(t){return t.execCommand("sslinkinternal")}});var m={init:function(t){t.addCommand("sslinkinternal",function(){f()("#"+t.id).entwine("ss").openLinkInternalDialog()})}},x="insert-link__dialog-wrapper--internal",A=n.i(_.provideInjector)(n.i(k.createInsertLinkModal)("SilverStripe\\CMS\\Controllers\\CMSPageEditController","editorInternalLink"));f.a.entwine("ss",function(t){t("textarea.htmleditor").entwine({openLinkInternalDialog:function(){var e=t("#"+x);e.length||(e=t('<div id="'+x+'" />'),t("body").append(e)),e.addClass("insert-link__dialog-wrapper"),e.setElement(this),e.open()}}),t("#"+x).entwine({renderModal:function(t){var e=this,n=ss.store,r=ss.apolloClient,o=function(){return e.close()},a=function(){return e.handleInsert.apply(e,arguments)},l=this.getOriginalAttributes();u.a.render(s.a.createElement(d.ApolloProvider,{store:n,client:r},s.a.createElement(A,{show:t,onInsert:a,onHide:o,title:i.a._t("CMS.LINK_PAGE","Link to a page"),bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--internal",fileAttributes:l})),this[0])},buildAttributes:function(t){return{href:h.a.serialise({name:"sitetree_link",properties:{id:t.PageID}},!0)+(t.Anchor&&t.Anchor.length?"#"+t.Anchor:""),target:t.TargetBlank?"_blank":"",title:t.Description}},getOriginalAttributes:function(){var e=this.getElement().getEditor(),n=t(e.getSelectedNode()),r=(n.attr("href")||"").split("#");if(!r[0])return{};var i=h.a.match("sitetree_link",!1,r[0]);return i?{PageID:i.properties.id?parseInt(i.properties.id,10):0,Anchor:r[1]||"",Description:n.attr("title"),TargetBlank:!!n.attr("target")}:{}}})}),tinymce.PluginManager.add("sslinkinternal",function(t){return m.init(t)}),e.default=m}]);