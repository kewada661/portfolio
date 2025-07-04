import { useContext } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import gsap from 'gsap';

import TransitionContext from '../context/TransitionContext.jsx';

export default function TransitionComponent({ children, nodeRef }){
	const { toggleCompleted } = useContext(TransitionContext);
	return (
		<SwitchTransition>
			<Transition
					key={location.hash}
					timeout={500}
					nodeRef={nodeRef}
					onEnter={() => {
						const node = nodeRef.current;
						console.log("onEnter:");
						console.log(node);
						toggleCompleted(false);
						gsap.set(node, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
							gsap
								.timeline({
									paused: true,
									onComplete: () => toggleCompleted(true),
								})
								.to(node, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
								.to(node, { scale: 1, duration: 0.25 })
								.play();
					}}
					onExit={() => {
						const node = nodeRef.current;
						console.log("onExit:");
						console.log(node);
						gsap
							.timeline({ paused: true })
							.to(node, { scale: 0.8, duration: 0.2 })
							.to(node, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
							.play();
					}}
					>
					{children}
			</Transition>
		</SwitchTransition>
	)
}