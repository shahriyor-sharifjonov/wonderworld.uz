"use strict";var headerButton=document.querySelector(".header__button"),headerMenu=document.querySelector(".header__list"),menuOpened=!1,menuToggle=function(){menuOpened=!menuOpened,headerButton.classList.toggle("open"),headerMenu.classList.toggle("open")};headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle()},$(".intro__slider").slick({slidesToShow:4,slidesToScroll:1}),$(".reviews__slider").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,infinite:!1}),$(document).ready(function(){$(".set > button").on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings(".content").slideUp(200),$(".set > button i").removeClass("fa-minus").addClass("fa-plus")):($(".set > button i").removeClass("fa-minus").addClass("fa-plus"),$(this).find("i").removeClass("fa-plus").addClass("fa-minus"),$(".set > button").removeClass("active"),$(this).addClass("active"),$(".content").slideUp(200),$(this).siblings(".content").slideDown(200))})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImhlYWRlckJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlck1lbnUiLCJtZW51T3BlbmVkIiwibWVudVRvZ2dsZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm9uY2xpY2siLCJ3aW5kb3ciLCJlIiwiY29tcG9zZWRQYXRoIiwiaW5jbHVkZXMiLCIkIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsImRvdHMiLCJpbmZpbml0ZSIsInJlYWR5Iiwib24iLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwic2libGluZ3MiLCJzbGlkZVVwIiwiYWRkQ2xhc3MiLCJmaW5kIiwic2xpZGVEb3duIl0sIm1hcHBpbmdzIjoiZ0JBQ01BLENBQUFBLFlBQVksQ0FDaEJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQyxDQUNJQyxVQUFVLENBQXFCRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQyxDQUNqQ0UsVUFBVSxHLENBQ1JDLFVBQVUsQ0FBRyxVQUFLLENBQ3RCRCxVQUFVLENBQUcsQ0FBQ0EsVUFEUSxDQUV0QkosWUFBWSxDQUFDTSxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixNQUE5QixDQUZzQixDQUd0QkosVUFBVSxDQUFDRyxTQUFYLENBQXFCQyxNQUFyQixDQUE0QixNQUE1QixDQUNELEMsQ0FFRFAsWUFBWSxDQUFDUSxPQUFiLENBQXVCSCxVLENBRXZCSSxNQUFNLENBQUNELE9BQVAsQ0FBaUIsU0FBQ0UsQ0FBRCxDQUFrQixDQUUvQixDQUFBTixVQUFVLEVBQ1RNLENBQUMsQ0FBQ0MsWUFBRixHQUFpQkMsUUFBakIsQ0FBMEJaLFlBQTFCLENBREQsRUFFQ1UsQ0FBQyxDQUFDQyxZQUFGLEdBQWlCQyxRQUFqQixDQUEwQlQsVUFBMUIsQ0FKOEIsRUFNL0JFLFVBQVUsRUFDYixDLENBR0RRLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CQyxLQUFwQixDQUEwQixDQUN4QkMsWUFBWSxDQUFFLENBRFUsQ0FFeEJDLGNBQWMsQ0FBRSxDQUZRLENBQTFCLEMsQ0FNQUgsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JDLEtBQXRCLENBQTRCLENBQzFCQyxZQUFZLENBQUUsQ0FEWSxDQUUxQkMsY0FBYyxDQUFFLENBRlUsQ0FHMUJDLE1BQU0sR0FIb0IsQ0FJMUJDLElBQUksR0FKc0IsQ0FLMUJDLFFBQVEsR0FMa0IsQ0FBNUIsQyxDQVFBTixDQUFDLENBQUNaLFFBQUQsQ0FBRCxDQUFZbUIsS0FBWixDQUFrQixVQUFBLENBQ2hCUCxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CUSxFQUFuQixDQUFzQixPQUF0QixDQUErQixVQUFBLENBQ3pCUixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFTLFFBQVIsQ0FBaUIsUUFBakIsQ0FEeUIsRUFFM0JULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsV0FBUixDQUFvQixRQUFwQixDQUYyQixDQUczQlYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUNHVyxRQURILENBQ1ksVUFEWixFQUVHQyxPQUZILENBRVcsR0FGWCxDQUgyQixDQU0zQlosQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FDR1UsV0FESCxDQUNlLFVBRGYsRUFFR0csUUFGSCxDQUVZLFNBRlosQ0FOMkIsR0FVM0JiLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQ0dVLFdBREgsQ0FDZSxVQURmLEVBRUdHLFFBRkgsQ0FFWSxTQUZaLENBVjJCLENBYTNCYixDQUFDLENBQUMsSUFBRCxDQUFELENBQ0djLElBREgsQ0FDUSxHQURSLEVBRUdKLFdBRkgsQ0FFZSxTQUZmLEVBR0dHLFFBSEgsQ0FHWSxVQUhaLENBYjJCLENBaUIzQmIsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlUsV0FBbkIsQ0FBK0IsUUFBL0IsQ0FqQjJCLENBa0IzQlYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYSxRQUFSLENBQWlCLFFBQWpCLENBbEIyQixDQW1CM0JiLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY1ksT0FBZCxDQUFzQixHQUF0QixDQW5CMkIsQ0FvQjNCWixDQUFDLENBQUMsSUFBRCxDQUFELENBQ0dXLFFBREgsQ0FDWSxVQURaLEVBRUdJLFNBRkgsQ0FFYSxHQUZiLENBcEIyQixDQXdCOUIsQ0F4QkQsQ0F5QkQsQ0ExQkQsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEhlYWRlciBNZW51XHJcbmNvbnN0IGhlYWRlckJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idXR0b25cIik7XHJcbmNvbnN0IGhlYWRlck1lbnU6IEhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbGlzdFwiKTtcclxubGV0IG1lbnVPcGVuZWQgPSBmYWxzZTtcclxuY29uc3QgbWVudVRvZ2dsZSA9ICgpID0+IHtcclxuICBtZW51T3BlbmVkID0gIW1lbnVPcGVuZWQ7XHJcbiAgaGVhZGVyQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbn07XHJcblxyXG5oZWFkZXJCdXR0b24ub25jbGljayA9IG1lbnVUb2dnbGU7XHJcblxyXG53aW5kb3cub25jbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgbWVudU9wZW5lZCAmJlxyXG4gICAgIWUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaGVhZGVyQnV0dG9uKSAmJlxyXG4gICAgIWUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaGVhZGVyTWVudSlcclxuICApXHJcbiAgICBtZW51VG9nZ2xlKCk7XHJcbn07XHJcblxyXG5cclxuJCgnLmludHJvX19zbGlkZXInKS5zbGljayh7XHJcbiAgc2xpZGVzVG9TaG93OiA0LFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG59KTtcclxuXHJcblxyXG4kKCcucmV2aWV3c19fc2xpZGVyJykuc2xpY2soe1xyXG4gIHNsaWRlc1RvU2hvdzogMSxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBhcnJvd3M6IGZhbHNlLFxyXG4gIGRvdHM6IHRydWUsXHJcbiAgaW5maW5pdGU6IGZhbHNlLFxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICQoXCIuc2V0ID4gYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpXHJcbiAgICAgICAgLnNpYmxpbmdzKFwiLmNvbnRlbnRcIilcclxuICAgICAgICAuc2xpZGVVcCgyMDApO1xyXG4gICAgICAkKFwiLnNldCA+IGJ1dHRvbiBpXCIpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmEtbWludXNcIilcclxuICAgICAgICAuYWRkQ2xhc3MoXCJmYS1wbHVzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5zZXQgPiBidXR0b24gaVwiKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImZhLW1pbnVzXCIpXHJcbiAgICAgICAgLmFkZENsYXNzKFwiZmEtcGx1c1wiKTtcclxuICAgICAgJCh0aGlzKVxyXG4gICAgICAgIC5maW5kKFwiaVwiKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImZhLXBsdXNcIilcclxuICAgICAgICAuYWRkQ2xhc3MoXCJmYS1taW51c1wiKTtcclxuICAgICAgJChcIi5zZXQgPiBidXR0b25cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICQoXCIuY29udGVudFwiKS5zbGlkZVVwKDIwMCk7XHJcbiAgICAgICQodGhpcylcclxuICAgICAgICAuc2libGluZ3MoXCIuY29udGVudFwiKVxyXG4gICAgICAgIC5zbGlkZURvd24oMjAwKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcbiJdfQ==
