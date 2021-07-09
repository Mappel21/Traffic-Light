import React, { useState } from "react";

//create your first component
export function Home() {
	const [selectedColor, setSelectedColor] = useState("green");

	return (
		<div className="traffic-light">
			<div
				onclick={() => setSelectedColor("green")}
				class={
					"light green" + (selectedColor === "green" ? "glow" : "")
				}></div>
			<div
				onclick={() => setSelectedColor("yellow")}
				class={
					"light yellow" + (selectedColor === "yellow" ? "glow" : "")
				}></div>
			<div
				onclick={() => setSelectedColor("red")}
				class={
					"light red" + (selectedColor === "red" ? "glow" : "")
				}></div>
		</div>
	);
}
