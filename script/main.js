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
			
			
			const NEXT = document.querySelector(".next");
			let postIndex = 0;
			NEXT.addEventListener("click", function(){
				postIndex++;
				const POSTS = document.querySelector("#posts");
				
				if(postIndex >= 3) postIndex = 0;
				
			
				
				let coord = -920 * postIndex;
				POSTS.style.marginLeft = coord + "px";
				
			})
			
			const PREV = document.querySelector(".prev");
			PREV.addEventListener("click", function(){
				postIndex--;
				const POSTS = document.querySelector("#posts");
				
				if(postIndex <= -1) postIndex = 2;
				
			
				
				let coord = -920 * postIndex;
				POSTS.style.marginLeft = coord + "px";
				
			})
			