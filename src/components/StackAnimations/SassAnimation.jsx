import styled,{keyframes} from 'styled-components';

export default function WaterDrop({status}){
    return(
        <WaterContent appear={status} className="container">

	<div className="rain">
		<div className="drop"></div>
		<div className="waves">
			<div></div>
			<div></div>
		</div>
		<div className="splash"></div>
		<div className="particles">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>

	<div className="rain">
		<div className="drop"></div>
		<div className="waves">
			<div></div>
			<div></div>
		</div>
		<div className="splash"></div>
		<div className="particles">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>

	<div className="rain">
		<div className="drop"></div>
		<div className="waves">
			<div></div>
			<div></div>
		</div>
		<div className="splash"></div>
		<div className="particles">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>

	<div className="rain">
		<div className="drop"></div>
		<div className="waves">
			<div></div>
			<div></div>
		</div>
		<div className="splash"></div>
		<div className="particles">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>

	<div className="rain">
		<div className="drop"></div>
		<div className="waves">
			<div></div>
			<div></div>
		</div>
		<div className="splash"></div>
		<div className="particles">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>

	<div className="rain">
		<div className="drop"></div>
		<div className="waves">
			<div></div>
			<div></div>
		</div>
		<div className="splash"></div>
		<div className="particles">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>

	<div className="rain">
		<div className="drop"></div>
		<div className="waves">
			<div></div>
			<div></div>
		</div>
		<div className="splash"></div>
		<div className="particles">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>

	<div className="rain">
		<div className="drop"></div>
		<div className="waves">
			<div></div>
			<div></div>
		</div>
		<div className="splash"></div>
		<div className="particles">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>

	<div className="rain">
		<div className="drop"></div>
		<div className="waves">
			<div></div>
			<div></div>
		</div>
		<div className="splash"></div>
		<div className="particles">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>

</WaterContent>
    )
}
const fall=keyframes`
0%{
    transform: translateY(-30vh);
}
45%{
    transform: translateY(0%);
    opacity: 1;
}
46%{
    opacity: 0;
}
100%{
    opacity: 0;
}`
const spread=keyframes`
0%{
		transform: scale(0);
		opacity: 1;
	}
	40%{
		transform: scale(0);
		opacity: 1;
	}

	100%{
		transform: scale(1);
		opacity: 0;
	}
`
const splash=keyframes`
	0%{
		transform: scale(0.3, 0);
	}

	49%{
		transform: scale(0.3, 0);
	}

	50%{
		transform: scale(0.3, 0.3);
	}

	60%{
		transform: scale(0.7, 1);
	}

	90%{
		transform: scale(1, 0);
	}

	100%{
		transform: scale(1, 0);
	}
`
const jumpLeft=keyframes`
	0%{
		transform: translate(0,0) scale(0);
	}

	45%{
		transform: translate(0,0) scale(0);
	}

	60%{
		transform: translate(-50px, -90px) scale(1);
	}

	100%{
		transform: translate(-60px, 0px) scale(0.1);
	}
`
const jumpRight=keyframes`
	0%{
		transform: translate(0,0) scale(0);
	}

	45%{
		transform: translate(0,0) scale(0);
	}

	60%{
		transform: translate(30px, -80px) scale(1);
	}

	100%{
		transform: translate(50px, 0px) scale(0.1);
	}
`

const WaterContent=styled.div`
   	width: 100%;
       visibility: ${(props)=>props.appear};
	height: 100%;
    position: absolute;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
    .row{
	display: flex;
	justify-content: center;
	align-items: center;
}

.rain{
	position: relative;
	width: 100%;
	height: 100%;
}

.rain:nth-of-type(1){
	--duration: 2.7s;
	--delay: 1s;
	transform: translate(10%, 10%) scale(0.9);
}

.rain:nth-of-type(2){
	--duration: 2.1s;
	--delay: 1.2s;
	transform: translate(-20%, 40%) scale(1.3);
}

.rain:nth-of-type(3){
	--duration: 2.3s;
	--delay: 2s;
	transform: translate(0%, 50%) scale(1.1);
}

.rain:nth-of-type(4){
	--duration: 2s;
	--delay: 4s;
	transform: translate(0%, -10%) scale(1.2);
}

.rain:nth-of-type(5){
	--duration: 2.5s;
	--delay: 0s;
	transform: translate(10%, 0%) scale(0.9);
}

.rain:nth-of-type(6){
	--duration: 2s;
	--delay: 2.7s;
	transform: translate(-20%, 0%) scale(1);
}

.rain:nth-of-type(7){
	--duration: 1.8s;
	--delay: 1.3s;
	transform: translate(20%, -40%) scale(1.2);
}

.rain:nth-of-type(8){
	--duration: 2.2s;
	--delay: 0s;
	transform: translate(20%, 0%) scale(1);
}

.rain:nth-of-type(9){
	--duration: 2s;
	--delay: 0.5s;
	transform: translate(0%, -10%) scale(1.3);
}

.drop{
	background-color: black;
	width: 3px;
	height: 100px;
	position: absolute;
	top: calc(50% - 100px); 
	left: calc(50% - 1.5px);
	animation-name: ${fall};
	animation-duration: var(--duration);
	animation-delay: var(--delay);
	animation-iteration-count: infinite;
	animation-timing-function: ease-in;
	animation-fill-mode: backwards;
}



.waves > div{
	position: absolute;
	top:0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	border-radius: 50%;
	border: solid black 3px;
	animation-name: ${spread};
	animation-duration: var(--duration);
	animation-delay: var(--delay);
	animation-iteration-count: infinite;
	animation-timing-function: ease-out;
	animation-fill-mode: backwards;
}

.waves > div:nth-child(2){
	animation-delay: calc(var(--delay) + 0.3s);
	animation-timing-function: linear;
}




.splash{
	position: absolute;
	top: 10%;
	bottom: 50%;
	left: 35%;
	right: 35%;
	border-radius: 8px;
	clip-path: polygon(7% 100%, 5% 95%, 3% 80%, 11% 50%, 17% 38%, 23% 44%, 30% 53%, 37% 28%, 40% 29%, 45% 43%, 51% 53%, 59% 36%, 64% 22%, 67% 23%, 70% 34%, 72% 46%, 79% 37%, 83% 37%, 93% 61%, 96% 76%, 96% 94%, 94% 100%);
	background-color: black;
	transform-origin: bottom;
	animation-name: ${splash};
	animation-duration: var(--duration);
	animation-delay: var(--delay);
	animation-iteration-count: infinite;
	animation-timing-function: ease-out;
	animation-fill-mode: backwards;
}



.particles > div{
	position: absolute;	
	border-radius: 100%;
	background-color: black;
	animation-duration: var(--duration);
	animation-delay: var(--delay);
	animation-iteration-count: infinite;
	animation-timing-function: ease;
	animation-fill-mode: backwards;
}

.particles > div:nth-child(1){
	width: 7px;
	height: 7px;
	top: 50%;
	left: 50%;
	animation-name: ${jumpLeft};
}

.particles > div:nth-child(2){
	width: 5px;
	height: 5px;
	top: 30%;
	left: 50%;
	animation-name: ${jumpLeft};
	animation-delay: calc(var(--delay) + 0.1s);
}

.particles > div:nth-child(3){
	width: 3px;
	height: 3px;
	top: 20%;
	left: 70%;
	animation-name: ${jumpRight};
	animation-delay: calc(var(--delay) + 0.15s);
}

.particles > div:nth-child(4){
	width: 5px;
	height: 5px;
	top: 30%;
	left: 50%;
	animation-name: jumpRight;
	animation-delay: calc(var(--delay) + 0.3s);
}




`