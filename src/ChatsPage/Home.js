
import React from "react";
import "../app.css"
import "../Home.css"
const Home1=()=>{
    const [showHeader,setheader]=React.useState(false);
	React.useEffect(()=>{
		setInterval(() => {
			setheader(true)
		}, 18000);
	})
	function Header()
	{
		return(
			<div class="content">
            <div class="content__container">
				<p class="content__container__text">
				Hello
				</p>
    
			<ul class="content__container__list">
			<li class="content__container__list__item">users !</li>
			<li class="content__container__list__item">Enjoy !</li>
			<li class="content__container__list__item">Kome !</li>
			<li class="content__container__list__item">Chating</li>
			</ul>
		</div>
		</div>
		);
	}
    
    return(
        <div className="title-continer">
          
          {showHeader && <Header/>}
            <div class="sp-container">
	<div class="sp-content">
		<div class="sp-globe"></div>
		<h2 class="frame-1">HI THERE</h2>
		<h2 class="frame-2">AND WELCOM</h2>
		<h2 class="frame-3">TO KOME WHERE</h2>
		<h2 class="frame-4">you can</h2>
		<h2 class="frame-5">
			<span>CHAT,</span>
			<span>COMMUNICAT, </span>
			<span>AND HAVE FUN.</span>
		</h2>
		<a class="sp-circle-link" href="https://github.com/Kumenit">by kome</a>
	</div>
</div>
        </div>
    )
}
export default Home1;