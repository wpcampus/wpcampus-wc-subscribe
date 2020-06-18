import { WPCampusHTMLElement } from "@wpcampus/wpcampus-wc-default";
import "./wpcampus-subscribe.css";

const newsletterURL = "https://www.wpcampus.org/about/newsletter/";

const template = `<div class="wpc-subscribe__graphic__wrapper">
	<div class="wpc-subscribe__graphic" role="img" aria-label="Truck Sheep"></div>
</div>
<div class="wpc-subscribe__main__wrapper">
	<div class="wpc-subscribe__main">
		<h2 class="wpc-subscribe__heading">Subscribe to WPCampus updates</h2>
		<div class="wpc-subscribe__message">
			<p>Subscribe to our newsletter or blog updates and stay up-to-date on our community and events.</p>
		</div>
		<div class="wpc-subscribe__button">
			<a class="wpc-button" href="https://www.wpcampus.org/about/newsletter/" aria-label="Subscribe to WPCampus updates">Subscribe to updates</a>
		</div>
	</div>
</div>`;

class WPCampusSubscribe extends WPCampusHTMLElement {
	constructor() {
		super({ componentID: "subscribe" });
	}
	connectedCallback() {
		super.connectedCallback();
		this.setAttribute("role", "complementary");
		this.setAttribute("aria-label", "Subscribe to WPCampus newsletter");
		this.innerHTML = this.wrapTemplate(template, false);
	}
}
customElements.define("wpcampus-subscribe", WPCampusSubscribe);

export default WPCampusSubscribe;
