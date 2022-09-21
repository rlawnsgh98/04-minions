/**
 * 
 */
 window.addEventListener("DOMContentLoaded", function(){
				setTimeout(showAfterLoad, 3000);
				
				const popup = document.querySelector("#popup");
				const BODY = document.querySelector("body");
				const CLOSE = document.querySelector("#close");
					
				function showAfterLoad(){
/* 					console.log(popOuter) */
					popup.style.display = "block";
					
					BODY.style.overflow = "hidden";
					
					/* $("#popup").css("display", "block");
					$("body").css("overflow", "hidden"); */
					
				}
				CLOSE.addEventListener("click", function(){
					popup.style.display = "none";
					
					BODY.style.overflow = "auto";
				})
				/* $("#close").click(function(){
					$("#popup").css("display", "none");
					$("body").css("overflow", "auto");
					}) */
			})