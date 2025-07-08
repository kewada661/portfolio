import { useContext } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import gsap from 'gsap';

import TransitionContext from '../context/TransitionContext.jsx';

export default function TransitionComponent({ children, nodeRef }){
	// const { containerId } = useContext(TransitionContext);
	const parseContainerId = (hash) => {
		return "#" + hash.substring(2) + "Container";
	}

	const otherContainers = (hash) => {
		return ".thumbnailContainer:not(" + parseContainerId(hash) + ")";
	}

	const onEnterHome = (node, tl) => {
		console.log("onEnterHome");
		gsap.set(".thumbnailContainer", { x: "-100vw" });
		tl.to(".thumbnailContainer", { x: 0, ease: "power4.out", duration: 1, stagger: 0.1 })
			.play();
	}

	const onEnterAbout = (node, tl) => {
		console.log("onEnterAbout");
		gsap.set(node, { y: "1rem", autoAlpha: 0 });
		tl.to(node, { y: 0, autoAlpha: 1, duration: 0.5 })
	}

	const onEnterProject = (node, tl) => {
		console.log("onEnterProject");
		gsap.set(node, { x: "90vw" })
		tl.to(node, { x: 0, duration: 1, ease: "power4.out" })
	}

	const onExitHome = (node, tl) =>{
		console.log("onExitHome");
		tl.to(node, { x: "90vw", ease: "power1.in", duration: 1 })
	}

	const onExitAbout = (node, tl) =>{
		console.log("onExitAbout");
		tl.to(node, { y: "1rem", autoAlpha: 0, duration: 0.5 })
	}

	const onExitProject = (node, tl) =>{
		console.log("onExitProject");
		tl.to(otherContainers(location.hash), { scale: 0.7, autoAlpha: 0, duration: 0.2 })
			.to(node, { x: "-90vw", ease: "power1.in", duration: 0.5 }, 0)
	}

	return (
		<SwitchTransition>
			<Transition
				key={location.hash}
				timeout={500}
				nodeRef={nodeRef}
				
				onEnter={() => {
					const node = nodeRef.current;
					const hash = location.hash.substring(2);
					const tl = gsap.timeline();
					console.log("onEnter: " + hash.toString());
					// toggleCompleted(false);

					switch (hash) {
						case "":
							onEnterHome(node, tl);
							break;
						case "about":
							onEnterAbout(node, tl);
							break;
						default:
							onEnterProject(node, tl);
					}
					// gsap.set(node, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
					// gsap
					// 	.timeline({
					// 		// paused: true,
					// 		// onComplete: () => toggleCompleted(true),
					// 	})
					// 	.to(node, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
					// 	.to(node, { scale: 1, duration: 0.25 })
					// 	.play();
					}}
				
				onExit={() => {
					const node = nodeRef.current;
					const hash = location.hash.substring(2);
					const tl = gsap.timeline();
					console.log("onExit: " + hash.toString());

					switch (hash) {
						case "":
							onExitHome(node, tl);
							break;
						case "about":
							onExitAbout(node, tl);
							break;
						default:
							onExitProject(node, tl);
					} 
				}}
			>
				{children}
			</Transition>
		</SwitchTransition>
	)
};

// export function ProjectTransition({ children, nodeRef, container}) {
// 	return (
// 		<SwitchTransition>
// 			<Transition
// 				key={location.hash}
// 				timeout={500}
// 				nodeRef={nodeRef}
// 				onEnter={() => {
// 					const node = nodeRef.current;
// 					console.log("onEnter:");
// 					console.log(node);
// 					// toggleCompleted(false);
// 					gsap.set(node, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
// 					gsap
// 						.timeline({
// 							paused: true,
// 							// onComplete: () => toggleCompleted(true),
// 						})
// 						.to(node, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
// 						.to(node, { scale: 1, duration: 0.25 })
// 						.play();
// 				}}
// 				onExit={() => {
// 				}}
// 			>
// 				{children}
// 			</Transition>
// 		</SwitchTransition>
// 	)
// }